"use client";
import React, { FC } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  theme?: string;
}

const Button: FC<ButtonProps> = ({ ...props }: ButtonProps) => {
  const selectedTheme = props.theme ? `${props.theme}` : "secondary-purple";

  return (
    <button
      {...props}
      className={`
      transition
      text-base
      text-${selectedTheme}
      py-2
      px-4
      rounded-md
    ${
      props.outline
        ? `hover:bg-${selectedTheme} hover:bg-opacity-80 bg-transparent border-2 border-${selectedTheme} hover:text-white`
        : `bg-${selectedTheme} bg-opacity-80 hover:bg-opacity-100 text-white`
    } 
  `}
    >
      {props.children}
    </button>
  );
};

export default Button;
