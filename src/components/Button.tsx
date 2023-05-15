"use client";
import clsx from "clsx";
import React, { FC } from "react";

interface ButtonProps {
  handleClick: () => void;
  outline?: boolean;
  intent: "cyan" | "gray" | "purple";
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  intent = "cyan",
  outline = false,
  handleClick,
}: ButtonProps) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleClick();
  };

  return (
    <button
      onClick={(e) => clickHandler(e)}
      className={clsx(
        "transition py-2 px-4 border-2 rounded-md text-base opacity-[85%] hover:opacity-100",
        {
          "bg-secondary-black border-secondary-black": intent === "gray",
          "bg-secondary-purple border-secondary-purple": intent === "purple",
          "bg-secondary-cyan border-secondary-cyan": intent === "cyan",
          "bg-transparent": outline,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
