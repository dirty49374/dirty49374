import { errors } from "../common/errors";

export type Serde<TD, TS> = {
  serialize(original: TD): TS;
  deserialize(serialized: TS): TD;
};

export type IdConverterType<TLocalId> = {
  toGlobal(_id: TLocalId): string;
  toLocal(id: string): TLocalId;
};

export type GlobalId = string;

export class IdConverter<TLocalId> {
  private _serialize: (id: TLocalId) => string;
  private _deserialize: (idPostfix: string) => TLocalId;

  constructor(public readonly idType: string, serde: Serde<TLocalId, string>) {
    this._serialize = serde.serialize;
    this._deserialize = serde.deserialize;
  }

  toGlobal(_localId: TLocalId): GlobalId;
  toGlobal(_localId: TLocalId[]): GlobalId[];
  toGlobal(_localId: TLocalId | TLocalId[]): GlobalId | GlobalId[] {
    if (_localId instanceof Array) {
      return _localId.map((_id) => this.toGlobal(_id));
    }

    return `${this.idType}:${this._serialize(_localId)}`;
  }

  toLocal(globalId: string): TLocalId;
  toLocal(globalId: string[]): TLocalId[];
  toLocal(globalId: string | string[]): TLocalId | TLocalId[] {
    if (globalId instanceof Array) {
      return globalId.map((id2) => this.toLocal(id2));
    }

    const [idType, serialized] = globalId.split(":");
    if (idType !== this.idType) {
      throw new Error(
        `invalid id prefix (expected=${this.idType}, actual=${idType})`
      );
    }
    return this._deserialize(serialized);
  }
}

export type ParsedGlobalId = {
  __typename: string;
  _id: string;
};

export function parseGlobalId(gid: string): ParsedGlobalId;
export function parseGlobalId(gids: string[]): ParsedGlobalId[];
export function parseGlobalId(
  globalId: string | string[]
): ParsedGlobalId | ParsedGlobalId[] {
  if (globalId instanceof Array) {
    return globalId.map((ids) => parseGlobalId(ids));
  }

  const [__typename, _id] = globalId.split(":");
  return { __typename, _id };
}
