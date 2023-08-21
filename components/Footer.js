import styles from "@/app/style";
import { socialMedia } from "@/constants";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import mailLogo from "../public/assets/mail.svg";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div
      className={`flex justify-between items-start sm:items-center sm:flex-row flex-col mb-8 w-full`}
    >
      <div className=" flex flex-col justify-start mb-8 sm:mb-0">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="AutomForest Logo"
            width={50}
            height={50}
            className="object-contain"
            priority
          />
          <h4 className="font-semibold text-[20px] text-white font-poppins tracking-wide">
            Autom
            <span className="text-[#33bbcf]">Forest</span> AI
          </h4>
        </div>
        <p className={`${styles.paragraph} mt-4 ml-2 max-w-[310px]`}>
          A new way to optimize your Business with AI.
        </p>
      </div>

      <div className=" flex items-center">
        <div
          className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        >
          <Image
            src={mailLogo}
            alt="icon"
            className=" w-[50%] h-[50%] object-contain"
            priority
          />
        </div>
        <div className="flex flex-col ml-3 font-poppins ">
          <a
            href="mailto:umair@reachumair.com"
            className="font-normal
    text-dimWhite text-[18px] leading-[24px] hover:text-white"
          >
            umair@reachumair.com
          </a>
        </div>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-[18px] leading-[27px] text-white">
        {new Date().getFullYear()} AutomForest. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia?.map((social, index) => (
          <Image
            key={social.id}
            src={social.icon}
            alt={social.id}
            width={21}
            height={21}
            className={`object-contain ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
