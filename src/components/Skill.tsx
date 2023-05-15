import Image from "next/image";
import { FC } from "react";
export interface SkillProps {
  icon: any;
  title: string;
}

const Skill: FC<SkillProps> = ({ icon, title }) => {
  return (
    <div
      id={`icon-${title} `}
      className="transition scale-75 hover:scale-100 py-4 rounded-lg basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 hover:bg-secondary-cyan"
    >
      <Image
        src={icon}
        alt={`icon ${title}`}
        referrerPolicy="no-referrer"
        className="aspect-square w-36 mx-auto"
      />
    </div>
  );
};

export default Skill;
