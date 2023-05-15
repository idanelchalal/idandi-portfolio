import clsx from "clsx";
import { FC } from "react";

interface TitleProps {
  title: string;
  subTitle?: string;
  titleColor?: "purple" | "cyan" | "gray" | "white";
  subTitleColor?: "purple" | "cyan" | "gray" | "white";
  fn?: () => void;
}

const Title: FC<TitleProps> = ({
  title,
  subTitle,
  subTitleColor = "white",
  titleColor = "white",
  fn,
}) => {
  const handleClick = () => {
    if (fn) fn();
    return;
  };
  return (
    <div onClick={handleClick}>
      <h1
        className={clsx("font-semibold pb-1 text-3xl md:text-4xl xl:text-5xl", {
          "text-secondary-purple": titleColor === "purple",
          "text-secondary-cyan": titleColor === "cyan",
          "text-secondary-black": titleColor === "gray",
          "text-white": titleColor === "white",
          "cursor-pointer": fn,
        })}
      >
        {title}
      </h1>
      {subTitle ? (
        <h3
          className={clsx("text-md md:text-lg", {
            "text-secondary-purple": subTitleColor === "purple",
            "text-secondary-cyan": subTitleColor === "cyan",
            "text-secondary-black": subTitleColor === "gray",
            "text-white": subTitleColor === "white",
          })}
        >
          {subTitle}
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default Title;
