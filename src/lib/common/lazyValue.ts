export const lazyValue = <T>(creator: () => T) => {
  let value: T | undefined;
  return () => value || (value = creator());
};
