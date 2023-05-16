"use client";
import { FC } from "react";
import AvatarIdea from "@/assets/emoji_idea.png";

import { StackOfSkills } from "./SkillsStack";
import Skill from "../Skill";

import Title from "../Title";
import Image from "next/image";

const MySkills: FC = () => {
  return (
    <>
      <section id="skills-section">
        <div className="py-6 flex justify-center items-center">
          <Image
            src={AvatarIdea}
            className="w-36 select-none"
            alt="Idandi avatar with a bulb"
          />
          <Title title="My Skills" titleColor="purple" />
        </div>
        <div className="flex flex-wrap">
          {StackOfSkills.map((skill) => (
            <Skill
              key={`skill-icon-${skill.title}`}
              icon={skill.icon}
              title={skill.title}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default MySkills;
