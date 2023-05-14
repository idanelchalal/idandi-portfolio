"use client";
import { FC } from "react";
import Image from "next/image";
import Logo from "@/assets/logo_sm.svg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import HeaderLink from "./HeaderLink";
import Link from "next/link";
interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="px-6 md:px-28 py-12 w-full flex flex-co justify-between items-center relative flex-wrap">
      <div
        id="logo-container"
        className="
        flex 
        flex-[100%] 
        justify-center 
        sm:justify-start
        sm:flex-initial 
        w-[64px] 
        md:w-[120px]
        relative
        "
      >
        <div id="logo-img" className="relative">
          <Image
            src={Logo}
            alt="IDANDI-LOGO"
            referrerPolicy="no-referrer"
            className="select-none hover:cursor-pointer"
          />
        </div>
        <div id="logo-blur-img" className="absolute blur-xl z-[-1]">
          <Image
            src={Logo}
            alt="IDANDI-LOGO"
            referrerPolicy="no-referrer"
            className="select-none"
          />
        </div>
      </div>
      <div id="navbar" className="flex gap-4 text-secondary-black md:text-xl">
        <HeaderLink href="About">About</HeaderLink>
        <HeaderLink href="Portfolio">Portfolio</HeaderLink>
        <HeaderLink href="Contact">Contact</HeaderLink>
      </div>
      <div id="icons-stack" className="flex gap-4">
        <Link href="http://www.github.com/idanelchalal">
          <AiFillGithub className="text-3xl" />
        </Link>
        <Link href="http://www.linkedin.com/in/idanelchalal">
          <AiFillLinkedin className="text-3xl" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
