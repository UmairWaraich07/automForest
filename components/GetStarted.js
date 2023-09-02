import styles from "@/app/style";
import { arrowUp } from "@/public/assets";
import Image from "next/image";
const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full
  bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div className="bg-primary w-[100%] h-[100%] rounded-full font-poppins">
        <a
          href="https://calendly.com/d/2yk-84x-8mq/chatbot-development-consultation?month=2023-09"
          className={`${styles.flexCenter} flex-col w-full h-full`}
          target="_blank"
        >
          <p className={`${styles.flexCenter} space-x-2 text-gradient`}>
            <span className="font-medium  text-[18px] leading-[23px]">
              Let's
            </span>
            <Image
              src={arrowUp}
              width={23}
              height={23}
              className="object-contain"
              alt="arrow"
              priority
            />
          </p>
          <p
            className={`text-gradient font-medium text-left  text-[18px] leading-[23px]`}
          >
            Discuss
          </p>
        </a>
      </div>
    </div>
  );
};

export default GetStarted;
