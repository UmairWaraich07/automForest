import styles from "@/app/style";
import Image from "next/image";
import { discount, robot } from "@/public/assets";
import heroImg from "../public/assets/hero-img.png";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`font-poppins flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image
            src={discount}
            alt="discount"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Free</span> Maintenance For{" "}
            <span className="text-white">1 Month</span>.
          </p>
        </div>

        <div className="flex justify-between items-center w-full">
          <h1 className="text-white flex-1 font-semibold ss:text-[62px] text-[52px] ss:leading-[85px] leading-[75px]">
            Future Proof Your <span className="text-gradient">Business</span>
            <br className="sm:block hidden" />
          </h1>

          <div className="ss:flex hidden md:mr-4 md:ml-2 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="text-white flex-1 font-semibold ss:text-[52px] text-[52px] ss:leading-[75px] leading-[75px] w-full">
          with AI Automation.{" "}
        </h1>

        <p
          className={`styles.paragraph max-w-[470px] text-white mt-5 sm:text-lg`}
        >
          Our team of employs a methodology that leverages cutting-edge chatbots
          and AI tools to transform your operations, boost profits and
          streamline your journey to success.
        </p>
      </div>

      <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Image
          src={heroImg}
          alt="robot"
          className="w-[95%] h-[95%] object-contain relative z-[5]"
          priority
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`${styles.flexCenter} w-full ss:hidden flex`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
