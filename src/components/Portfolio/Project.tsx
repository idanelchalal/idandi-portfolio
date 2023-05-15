"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { FC } from "react";
import { FaRegHandPointer } from "react-icons/fa";

export type Project = {
  title: string;
  gitUrl: string;
  imgSrc: string;
};

interface ProjectProps {
  title: string;
  gitUrl: string;
  imgSrc: string;
}

const Project: FC<ProjectProps> = ({ gitUrl, imgSrc, title }) => {
  const router = useRouter();
  return (
    <div
      id={`project-${title}`}
      className="group relative px-4 w-full md:px-0 py-4 basis-1/1 md:basis-1/2 mx-auto overflow-hidden select-none"
    >
      <div
        className="
         group-hover:backdrop-blur-sm group-hover:bg-white/30 transition
         bg-white/0 backdrop-blur-0 backdrop-filter 
         absolute
         z-10 
         w-screen h-screen"
      >
        {" "}
      </div>
      <div className="absolute z-20 group-hover:block hidden group-hover:animate-bounce top-8 left-2 cursor-pointer">
        <div className="rounded-full bg-secondary-black  p-2 rotate-[140deg]">
          <FaRegHandPointer size={24} onClick={() => router.replace(gitUrl)} />
        </div>
      </div>
      <div
        onClick={() => router.replace(gitUrl)}
        className="w-full bg-secondary-black/50 absolute top-1/2 z-20  group-hover:block hidden transition text-center py-4 cursor-pointer"
      >
        {title}
      </div>
      <Image
        src={imgSrc}
        alt={`icon ${title}`}
        referrerPolicy="no-referrer"
        className="mx-auto object-contain group-hover:scale-125 aspect-video transition p-3 "
      />
    </div>
  );
};

export default Project;
