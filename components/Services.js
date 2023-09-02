import { services } from "@/constants";
import styles, { layout } from "@/app/style";
import Button from "./Button";
import Image from "next/image";

const ServicesCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== services.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <Image
        src={icon}
        alt="icon"
        className=" w-[50%] h-[50%] object-contain"
        priority
      />
    </div>
    <div className="flex-1 flex flex-col ml-3 font-poppins ">
      <h4
        className="font-semibold
    text-white text-[18px] leading-[23px] mb-1"
      >
        {title}
      </h4>
      <p
        className="font-normal
    text-dimWhite text-[16px] leading-[24px] mb-1"
      >
        {content}
      </p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section id="services" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll manage
          the automation.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] font-poppins mt-5`}>
          With the perfect AI automation solutions, your business can thrive by
          optimizing operations increasing profits and simplifying processes.
          But in a sea of options...
        </p>

        <Button styles="mt-10" label="Get Started" link="#contact" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {services.map((service, index) => (
          <ServicesCard key={service.id} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
