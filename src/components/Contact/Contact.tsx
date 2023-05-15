import { FC } from "react";
import Avatar from "@/assets/emoji_contact.png";
import Title from "../Title";
import Image from "next/image";
import ContactCard from "../ContactCard";
interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <>
      <div className="flex justify-center items-center py-6">
        <Image src={Avatar} className="w-36 select-none" alt="Idandi avatar" />
        <Title
          title="Let's talk!"
          subTitle="A coffee is also an option :)"
          subTitleColor="gray"
          titleColor="cyan"
        />
      </div>
      <div className="w-full flex justify-center">
        <ContactCard />
      </div>
    </>
  );
};

export default Contact;
