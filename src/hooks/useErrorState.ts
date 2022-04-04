import { useMemo, useState } from "react";

const explainError = (e: Error|null): string => e?.message || '';

const useErrorState = (): [string, (e: Error|null) => void] => {
  const [error, setError] = useState("");

  const setExplainError = useMemo(
    () => (e: Error|null) => setError(explainError(e)),
    [setError]
  );

  return [error, setExplainError];
};

export default useErrorState;
