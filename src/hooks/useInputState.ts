import { ChangeEvent, useCallback, useMemo, useState } from "react";

type InputStateChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
export type InputState = {
  value: string;
  onChange: (e: InputStateChangeEvent|string|undefined) => void;
};

export const useInputState = (initialValue: string): InputState => {
  const [value, setState] = useState(initialValue);
  const onChange = useCallback(
    (e: InputStateChangeEvent|string|undefined) => {
      if (e) {
        if (typeof e === 'string') setState(e);
        else setState(e.target.value);
      } else {
        setState('');
      }
    },
    [setState]
  );

  return useMemo(() => ({ value, onChange }), [value, onChange]);
};
