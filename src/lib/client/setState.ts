import { ChangeEvent } from "react";

export const onChangeProps = (setState: (v: string) => void) => ({
  onChange: (e: ChangeEvent<HTMLInputElement>) => setState(e.target.value),
});
