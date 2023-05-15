"use client";
import { FC } from "react";
import Project from "./Project";
import { ProjectsStack } from "./ProjectsStack";
import Title from "../Title";

interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = ({}) => {
  return (
    <div>
      <section id="Portfolio section">
        <div className="py-6 text-center">
          <Title title="Latest Projects" titleColor="purple" />
        </div>
        <div className="flex flex-wrap">
          {ProjectsStack.map((proj) => (
            <Project {...proj} key={proj.title + "uid"} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
