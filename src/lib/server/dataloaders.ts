import DataLoader from "dataloader";
import { Model } from "mongoose";

type ToStringTypes = { toString: () => string };

const groupBy = <TResult, TKey extends ToStringTypes>(
  keys: readonly TKey[],
  results: TResult[],
  groupFn: (v: TResult) => string
): (TResult | null)[] => {
  const map = new Map<string, TResult>();

  for (let i = 0; i < results.length; ++i) {
    const result = results[i];
    const resultKey = groupFn(result);
    map.set(resultKey, result);
  }

  return keys.map((key) => map.get(key.toString()) || null);
};

export const createDataLoader = <TKey extends ToStringTypes, TValue>(
  batchLoader: DataLoader.BatchLoadFn<TKey, TValue>
): DataLoader<TKey, TValue> =>
  new DataLoader(batchLoader, {
    cacheKeyFn: (id: TKey) => id.toString(),
  });

export const createUniqueFieldDataLoader = <T, TKey extends ToStringTypes>(
  model: Model<T>,
  filterFn: (keys: readonly TKey[]) => any,
  groupFn: (result: T) => string
): DataLoader<TKey, T> =>
  createDataLoader(async (keys: readonly TKey[]) => {
    const results = await model.find(filterFn(keys));
    return groupBy(keys, results, groupFn) as T[];
  });
