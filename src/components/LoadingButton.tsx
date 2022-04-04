import React, { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

type LoadingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // className?: string;
  // children?: ReactNode;
  loading?: boolean;
};

const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading,
  disabled,
  children,
  ...props
}) => {
  return (
    <button disabled={disabled || loading} {...props}>
      {loading && <ButtonSpinner />} {children}
    </button>
  );
};

export default LoadingButton;

export const ButtonSpinner = () => {
  return (
    <svg className="animate-spin h-5 w-5 mr-1 inline-block" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};
