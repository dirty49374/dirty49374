import { ChangeEvent, useCallback, useMemo, useState } from "react";

type InputStateChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export type InputStateProps = {
  value: string;
  onChange: (e: InputStateChangeEvent | string | undefined) => void;
};
export type InputState = [InputStateProps, (v: string) => void];

export const useInputState = (initialValue: string): InputState => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(
    (e: InputStateChangeEvent | string | undefined) => {
      if (e) {
        if (typeof e === "string") setValue(e);
        else setValue(e.target.value);
      } else {
        setValue("");
      }
    },
    [setValue]
  );

  return useMemo(
    () => [{ value, onChange }, setValue],
    [value, onChange, setValue]
  );
};
