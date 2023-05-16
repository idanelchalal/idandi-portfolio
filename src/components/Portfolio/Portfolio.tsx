"use client";
import { FC } from "react";
import Project from "./Project";
import { ProjectsStack } from "./ProjectsStack";
import Title from "../Title";
import Avatar from "@/assets/emoji_business.png";
import Image from "next/image";

interface PortfolioProps {}

const Portfolio: FC<PortfolioProps> = ({}) => {
  return (
    <div>
      <section id="portfolio-section">
        <div className="py-6 flex justify-center items-center">
          <Image
            src={Avatar}
            className="w-36 select-none"
            alt="Idandi avatar"
          />
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
