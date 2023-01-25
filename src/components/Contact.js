import React from "react";
import styles from "../style";
import { elements } from "../style";
import { useInView } from "react-intersection-observer";
import typing from "../assets/images/writing.png";

const Contact = () => {
  const { ref: contactRef, inView: isVisible } = useInView();

  return (
    <div
      className={`${styles.flexCenter} w-[100vw] h-[100vh] ${styles.paddingY} `}
      id="contact"
    >
      <div className="flex w-full h-full xm:flex-row flex-col-reverse">
        <div
          className="ss:w-full xm:w-[30%] lg:w-[40%] sm:h-[30%] h-[30%] xm:h-full 
        flex px-[40px] ss:justify-between justify-center items-start"
        >
          <div className="ss:block xm:hidden hidden">
            <button className={`${elements.sendButton} `}>Send</button>
          </div>
          <div
            className={`self-center flex items-center justify-center xm:h-full h-[80%] contact-img ${
              isVisible ? "show" : ""
            } `}
            ref={contactRef}
          >
            <img src={typing} className="h-full object-contain" />
          </div>
        </div>
        <div className=" xs:w-[90%] w-full self-center ss:hidden">
          <button className={`${elements.sendButton} w-full xs:mt-0 mt-1.5`}>Send</button>
        </div>
        <div className="flex-1 lg:w-[60%] h-[70%] xm:h-full flex items-center justify-center flex-col">
          <h2 className="lg:text-[80px] ss:text-[60px] text-[40px] text-left w-[80%] font-bold leading-[1]">
            Contact with me
          </h2>
          <div
            className="lg:w-[80%] xs:w-[90%] w-full xm:h-[70%] h-[80%] flex items-center justify-center flex-col 
          ss:mt-0 mt-3"
          >
            <div className="w-full flex gap-[10px] mb-[10px] ss:flex-row flex-col flex-1 ss:flex-none">
              <input placeholder="First name" className={`${elements.input} placeholder`} />
              <input
                placeholder="Second name"
                className={`${elements.input} placeholder`}
              />
            </div>
            <div className="w-full flex gap-[10px] mb-[10px] ss:flex-row flex-col flex-1 ss:flex-none">
              <input placeholder="Email" className={`${elements.input} placeholder`} />
              <input placeholder="Phone" className={`${elements.input} placeholder`} />
            </div>
            <textarea
              placeholder="Message"
              className="xm:flex-[0.6] ss:flex-[0.8] flex-[1.2] w-full bg-transparent outline-none border rounded-[20px]
              pl-[20px] text-[25px] text-white leading-[1.4] p-[2%] focus:outline-none focus:border-pink placeholder"
            />
            <button
              className={`${elements.sendButton} mt-[40px] xm:block hidden `}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
