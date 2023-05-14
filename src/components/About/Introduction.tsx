"use client";
import { FC } from "react";
import Container from "../Container/Container";
import Image from "next/image";
import AboutEmoji from "../../assets/emoji_about.png";
import Button from "../Button";

interface IntroductionProps {}

const Introduction: FC<IntroductionProps> = ({}) => {
  return (
    <>
      <Container id="Intro-container">
        <div className="flex relative w-4/5 max-h-[420px] h-[420px]">
          <section className="relative z-10 flex flex-col justify-between ">
            <p className="text-2xl">
              I'M{" "}
              <span className="mx-0.5 text-5xl text-secondary-purple font-serif font-semibold">
                Idan Elchalal
              </span>{" "}
              <span className="block">
                A{" "}
                <span className="text-secondary-cyan">
                  Full Stack Developer
                </span>
              </span>
              <span className="block text-lg my-8 md:w-3/4 lg:w-1/2">
                I am looking for challenging web application development
                opportunities that will allow me to learn and grow as a
                full-stack developer in a dynamic team environment. I have
                strong self-studying, communication, teamwork, and
                problem-solving skills. I am PASSIONATE about creating
                innovative and user-friendly software solutions.
              </span>
              <Button outline>CONTACT ME</Button>
            </p>
          </section>
          <div className="absolute top-[25%] sm:top-0 z-0 right-0 opacity-30 lg:opacity-100">
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
