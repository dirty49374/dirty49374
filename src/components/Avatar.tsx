import React, { FC, HTMLAttributes } from "react";
import classNames from "classnames";

// disable-eslint

type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  size: "small" | "medium" | "big";
  uri?: string | undefined | null;
};

const Avatar: FC<AvatarProps> = ({ size, className, uri }) => {
  uri = uri || "/avatar.png";

  if (size === "big")
    return (
      <img
        className={classNames(
          "inline-block rounded-full bg-gray-400 w-24 h-24 my-3",
          className
        )}
        src={uri}
      />
    );
  if (size === "medium")
    return (
      <img
        className={classNames(
          "inline-block rounded-full bg-gray-400 w-12 h-12 my-3",
          className
        )}
        src={uri}
      />
    );
  return (
    <img
      className={classNames(
        "inline-block rounded-full bg-gray-400 w-8 h-8 my-3",
        className
      )}
      src={uri}
    />
  );
};

export default Avatar;
