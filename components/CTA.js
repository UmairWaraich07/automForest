import styles from "@/app/style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexStart}  ${styles.marginY} ${styles.padding} sm:flex-row sm:items-center flex-col
bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2}`}>Let's try our services now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to automate your business anywhere on the planet.
      </p>
    </div>
    <div className={`${styles.flexCenter}  sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button
        label="Schedule a Call"
        link="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ345C5KzxrH3PfOLVeHJM4SzmHFEJ_KXizTedoALXghDaVATY4V58Umeug9nyCA_guEy-h5Xv7o"
      />
    </div>
  </section>
);

export default CTA;
