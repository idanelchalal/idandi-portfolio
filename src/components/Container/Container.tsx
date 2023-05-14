import { FC } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ ...props }: ContainerProps) => {
  return (
    <div
      {...props}
      className={`flex flex-col justify-center items-center w-screen px-6 md:px-28 py-12 text-white ${
        props.className !== undefined ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
