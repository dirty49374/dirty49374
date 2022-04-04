import { useMemo, useState } from "react";

export type UseListEditOptions<T> = {
  equalFn?: (a: T, b: T) => boolean;
};
export const useListEdit = <T>(
  initialList: T[],
  options?: UseListEditOptions<T>
) => {
  const [origList, setOrigList] = useState<T[]>(initialList);
  const [currList, setCurrList] = useState<T[]>(initialList);

  const result = useMemo(() => {
    const same =
      origList.length === currList.length &&
      origList.every((orig, i) =>
        options?.equalFn
          ? options?.equalFn(orig, currList[i])
          : orig == currList[i]
      );

    return {
      add: (value: T) => setCurrList([...currList, value]),
      remove: (idx: number) =>
        setCurrList([...currList.slice(0, idx), ...currList.slice(idx + 1)]),
      move: (from: number, to: number) => {
        if (from < 0 || to < 0) return;
        if (from >= currList.length || to >= currList.length) return;
        if (from == to) return;

        const list = [...currList];
        if (from < to) {
          const removed = list.splice(from, 1);
          list.splice(to, 0, ...removed);
        } else {
          const removed = list.splice(from, 1);
          list.splice(to, 0, ...removed);
        }
        setCurrList(list);
      },
      list: currList,
      setList: (list: T[]) => {
        setOrigList(list);
        setCurrList(list);
      },
      modified: !same,
    };
  }, [origList, currList]);

  return result;
};
