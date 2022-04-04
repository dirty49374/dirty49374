export const errors = {
  unauthenticated: () => new Error(`Unauthenticated!`),
  unauthorized: () => new Error(`Unauthorized!`),
  invalidArgument: (argument: string) =>
    new Error(`invalid argument '${argument}'`),
};
