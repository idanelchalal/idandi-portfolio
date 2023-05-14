import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div
      id="container"
      className="flex flex-col justify-center items-center w-screen text-secondary-purple"
    >
      {children}
    </div>
  );
};

export default Container;
