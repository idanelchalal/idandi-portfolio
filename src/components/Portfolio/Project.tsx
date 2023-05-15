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
      <div className="w-full absolute top-1/2 z-20 group-hover:block hidden transition text-center py-4 ">
        <div className="flex flex-col justify-center gap-3">
          <h1 className="text-secondary-purple">{title}</h1>
          <div>
            <span
              onClick={() => router.push(gitUrl)}
              className="cursor-pointer bg-secondary-purple/50 px-4 py-2 rounded-lg"
            >
              View Repository
            </span>
          </div>
        </div>
      </div>
      <Image
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/png"
        src={imgSrc}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={`icon ${title}`}
        referrerPolicy="no-referrer"
        className="mx-auto object-contain group-hover:scale-125 aspect-video transition p-3 "
      />
    </div>
  );
};

export default Project;
