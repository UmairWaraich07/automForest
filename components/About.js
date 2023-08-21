import styles, { layout } from "@/app/style";
import aboutImg from "../public/assets/about.jpg";
import Image from "next/image";

const About = () => (
  <section id="about" className={layout.section}>
    <div
      className={`${layout.sectionInfo} flex flex-col md:justify-center md:items-center`}
    >
      <h2 className={`${styles.heading2} md:text-center`}>About Us</h2>
      <p
        className={`${styles.paragraph} max-w-[470px] font-poppins mt-5 md:text-center md:max-w-[60%]`}
      >
        At AutomForest AI, we are your end to end AI development ally. From idea
        to implementation and more, we provide AI solutions that emplify
        efficiency and propel growth. Lets shape your success together.
      </p>
    </div>

    {/* <div className={layout.sectionImg}>
      <Image
        src={aboutImg}
        alt="card"
        className="w-[100%] h-[100%] object-contain"
        priority
      />
    </div> */}
  </section>
);

export default About;
