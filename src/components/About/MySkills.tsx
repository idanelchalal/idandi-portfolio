"use client";
import { FC } from "react";
import Skill from "../Skill";
import { StackOfSkills } from "./SkillsStack";
import Title from "../Title";

const MySkills: FC = () => {
  return (
    <>
      <section id="Skills section">
        <div className="p-6">
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
