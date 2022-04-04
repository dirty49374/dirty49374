import { Types, Model, FilterQuery } from "mongoose";

export type PaginationArguments = {
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

export type PageInfo = {
  startCursor?: string;
  endCursor?: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type Edge<T> = {
  cursor: string;
  node: T;
};

export type Connection<T> = {
  edges: Edge<T>[];
  nodes: T[];
  pageInfo: PageInfo;
};

export class MongoosePaginator<T> {
  constructor(
    private model: Model<T>,
    private type: string,
    private filter: FilterQuery<T> = {}
  ) {}

  private checkArgs(args: PaginationArguments): PaginationArguments {
    if (typeof args.first === "number" && args.first > 0) {
      return {
        first: args.first,
        after: args.after,
      };
    }
    if (typeof args.last === "number" && args.last > 0) {
      return {
        last: args.last,
        before: args.before,
      };
    }

    console.error(
      "invalid pagination arguments",
      this.type,
      JSON.stringify(args)
    );
    throw new Error("invalid pagination arguments");
  }

  async paginate(args: PaginationArguments): Promise<Connection<T>> {
    const { first, last, before, after } = this.checkArgs(args);

    const order = first ? -1 : 1;
    const count = (first ? first : last) || 0;

    if (count <= 0 || 1000 < count) {
      throw new Error("first or last should be within 1 - 1000");
    }

    let objectIdFilter = first
      ? after
        ? { _id: { $lt: new Types.ObjectId(after) } }
        : {}
      : before
      ? { _id: { $gt: new Types.ObjectId(before) } }
      : {};
    const filter = { ...this.filter, ...objectIdFilter };

    const nodes = await this.model
      .find(filter as any)
      .sort({ _id: order })
      .limit(count + 1);

    const hasNextPage = first ? nodes.length > count : !!before;
    const hasPreviousPage = last ? nodes.length > count : !!after;

    if (order === 1) nodes.reverse();
    if (nodes.length > count) nodes.pop();

    const edges = nodes.map((node) => ({ cursor: node._id.toString(), node }));
    const startCursor = edges[0]?.cursor;
    const endCursor = edges[edges.length - 1]?.cursor;

    return {
      edges,
      nodes,
      pageInfo: {
        startCursor,
        endCursor,
        hasNextPage,
        hasPreviousPage,
      },
    };
  }
}
