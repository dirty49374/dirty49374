import classNames from "classnames";
import Dialog from "components/Dialog";
import FormField from "components/FormField";
import LoadingButton from "components/LoadingButton";
import React, { FC, ReactNode } from "react";

type designProps = {
  className?: string;
};

const DialogSample = () => (
  <Dialog className="mt-10" title={<>This is Title</>}>
    this is contents
    <br />
    this is contents
    <br />
    this is contents
    <br />
    this is contents
    <br />
    this is contents
    <br />
    this is contents
    <br />
  </Dialog>
);

const FormSample = () => (
  <Dialog className="mt-5" title="This is Form">
    <FormField label="field 1">
      <input type="text" />
    </FormField>
    <FormField label="field 2">
      <input type="text" />
    </FormField>
    <FormField label="field 3">
      <input type="text" />
    </FormField>
    <FormField label="field 4">
      <input type="text" />
    </FormField>
    <FormField>
      <div className="text-red-600">this is error</div>
    </FormField>
    <hr />
    <FormField>
      <button className="btn-primary mr-2">submit</button>
      <button className="btn-warning mr-2">clear</button>
      <button className="btn-danger mr-2">delete</button>
      <LoadingButton className="mr-2">NOT LOADING</LoadingButton>
      <LoadingButton className="mr-2" loading={true}>LOADING</LoadingButton>
    </FormField>
  </Dialog>
);

export const Headings = ({ className }: designProps) => (
  <Dialog title="Headings" className={className}>
    <h1>This is H1 text</h1>
    <h2>This is H2 text</h2>
    <h3>This is H3 text</h3>
  </Dialog>
);

export const Buttons = ({ className }: designProps) => (
  <div
    className={classNames(
      "w-full mx-auto max-w-2xl border-2 border-gray-800",
      className
    )}
  >
    <button className="m-3 btn-primary">Primary</button>
    <button className="m-3 btn-secondary">Secondary</button>
    <button className="m-3 btn-success">Success</button>
    <button className="m-3 btn-danger">Danger</button>
    <button className="m-3 btn-warning">Warning</button>
    <button className="m-3 btn-info">Info</button>
  </div>
);

export const AvatarIcon = ({ size }: { size: string }) => {
  if (size === "big")
    return (
      <div className="inline-block rounded-full bg-gray-400 w-24 h-24 my-3"></div>
    );
  if (size === "medium")
    return (
      <div className="inline-block rounded-full bg-gray-400 w-16 h-16 my-3"></div>
    );
  return (
    <div className="inline-block rounded-full bg-gray-400 w-16 h-16 my-3"></div>
  );
};

export const Page = ({ className }: designProps) => (
  <div className={classNames("w-full max-w-2xl p-5", className)}>
    <h1>This is page title</h1>
    <AvatarIcon size="medium" />
    <p className="meta text-sm">Author: john doe</p>
    <p className="meta text-sm">2021/03/01 10:23 KST</p>
    <p className="mt-5">
      this is page content. this is page content. this is page content. this is
      page content. this is page content. this is page content. this is page
      content. this is page content.
    </p>

    <div className="mt-5 flex items-center justify-center w-[8rem] h-[8rem] bg-slate-800">
      img
    </div>

    <p className="mt-5">
      this is page content. this is page content. this is page content. this is
      page content. this is page content. this is page content. this is page
      content. this is page content.
    </p>
    <p>
      this is page content. this is page content. this is page content. this is
      page content. this is page content. this is page content. this is page
      content. this is page content.
    </p>
  </div>
);

const design: React.FC<designProps> = ({ className }) => {
  return (
    <>
      <DialogSample />
      <FormSample />
      <Headings className="mt-5" />
      <Buttons className="mt-5" />
      <Page className="mt-5" />
    </>
  );
};

export default design;
