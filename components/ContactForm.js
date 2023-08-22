"use client";
import Image from "next/image";
import contactImg from "../public/assets/contact-img.svg";
import styles, { layout } from "@/app/style";
import { useRef, useState } from "react";

const ContactForm = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };
    console.log(formData);
    setLoading(false);
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <section id="contact" className={`${layout.section}`}>
      <div
        className={`flex-1 flex ${styles.flexCenter}  md:mt-0 mt-10 relative`}
      >
        <Image
          src={contactImg}
          alt="contact"
          className="w-[90%] h-[90%] relative z-[5] "
          priority
        />
        <div
          className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full
        white__gradient"
        />
        <div
          className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full
        pink__gradient"
        />
      </div>
      <div className={`${layout.sectionInfo} contact my-6 md:my-0`}>
        <h2 className={`${styles.heading2} `}>Let's get in touch</h2>
        <form
          action="https://formspree.io/f/myyqwwdn"
          method="POST"
          className="w-full flex flex-col justify-start items-start
           text-white font-poppins space-y-2 mt-5"
        >
          <div className="w-full flex flex-col ss:flex-row items-center justify-start gap-2 ss:gap-0 ss:space-x-2">
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              ref={firstNameRef}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              ref={lastNameRef}
              name="last_name"
            />
          </div>
          <div className="w-full flex  flex-col ss:flex-row  items-center justify-start gap-2 ss:gap-0 space-x-0 ss:space-x-2 ">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              ref={emailRef}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              ref={subjectRef}
            />
          </div>
          <textarea
            className="w-full"
            name="message"
            rows="5"
            placeholder="How we can help you?"
            ref={messageRef}
            required
          ></textarea>
          <button
            type="submit"
            className={`py-4 px-10 bg-blue-gradient font-poppins font-medium
  text-[18px] text-primary outline-none ${styles} rounded-[10px] mt-10`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
