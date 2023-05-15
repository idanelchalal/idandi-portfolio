import { FC } from "react";
import Introduction from "./Introduction";
import MySkills from "./MySkills";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <>
      <Introduction />
      <MySkills />
    </>
  );
};

export default About;
