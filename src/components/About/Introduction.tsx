"use client";

import { FC } from "react";
import Image from "next/image";

import Container from "../Container/Container";
import Button from "../Button";

import AboutEmoji from "../../assets/emoji_about.png";
import { useRouter } from "next/navigation";

const Introduction: FC = ({}) => {
  const router = useRouter();
  return (
    <>
      <Container id="intro-container">
        <div className="flex relative w-4/5 overflow-hidden">
          <section
            id="intro-section"
            className="relative z-10 flex flex-col justify-between "
          >
            <p className="text-2xl">
              I&apos;M{" "}
              <span className="mx-0.5 text-5xl text-secondary-purple font-serif font-semibold">
                Idan Elchalal
              </span>{" "}
              <span className="block">
                A{" "}
                <span className="text-secondary-cyan">
                  Full Stack Developer
                </span>
              </span>
              <span className="my-4 block text-lg md:w-3/4 lg:w-1/2">
                I am looking for challenging web application development
                opportunities that will allow me to learn and grow as a
                full-stack developer in a dynamic team environment. I have
                strong self-studying, communication, teamwork, and
                problem-solving skills. I am PASSIONATE about creating
                innovative and user-friendly software solutions.
              </span>
              <Button
                handleClick={() => router.push("/#Contact-section")}
                intent="purple"
                outline
              >
                CONTACT ME
              </Button>
            </p>
          </section>
          <div
            className="
          absolute
          top-[25%] sm:top-0 xl:top-[-16%]
          right-0
           opacity-30 lg:opacity-100 z-0"
          >
            <Image
              src={AboutEmoji}
              className="scale-x-[-1]"
              alt="Contact emoji"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Introduction;
