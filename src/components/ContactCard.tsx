import { FC } from "react";
import Profile from "@/assets/profile.jpg";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
interface ContactCardProps {}

const ContactCard: FC<ContactCardProps> = ({}) => {
  return (
    <>
      <div
        id="Contact-section"
        className="flex flex-col w-full max-w-md lg:max-w-lg rounded-lg bg-zinc-500 border-2 border-slate-300"
      >
        <div className="py-2 px-4 flex gap-4  items-center basis-1/4">
          <div className="rounded-full w-20 aspect-square overflow-hidden">
            <Image src={Profile} alt="Profile" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Idan Elchalal</h1>
          </div>
        </div>
        <div className="basis-2/4 py-2 px-4 text-sm">
          Thank you for staying so far, feel free to contact me for additional
          information :)
        </div>
        <div className="group basis-1/4 py-2 px-4">
          <Link
            target="_blank"
            href={
              "mailto:idanelchalal@gmail.com?subject=I want your CV&body=Hey friend, Please send me your CV!"
            }
            className="
                group relative flex rounded-lg items-center px-4 py-2 gap-2
                transition
                bg-primary-purple
                group-hover:bg-secondary-purple
            "
          >
            <CiMail size={20} className="group-hover:animate-ping" />
            <span>Send me a mail</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
