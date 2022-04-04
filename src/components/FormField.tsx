import classNames from "classnames";
import { FC, ReactNode } from "react";

export type FormFieldProps = {
  className?: string;
  label?: string;
  children?: ReactNode;
};

const FormField: FC<FormFieldProps> = ({ className, label, children }) => (
  <div className={classNames("flex flex-row my-3", className)}>
    <div className="w-24 font-thin">{label}</div>
    {children}
  </div>
);

export default FormField;
