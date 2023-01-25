import React from "react";
import { navLinks, socialMedia } from "../constants/dummyData";
import styles from "../style";
import IconButton from "./ui/IconButton";

const Footer = () => {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} w-full h-full`}>
      <div className="flex items-center justify-around ss:flex-row flex-col gap-[20px]">
        <div className="header-logo">
          <a href="#home">
            <h2 className="font-bold sm:text-[32px] text-[20px]">Krystian</h2>
            <h2 className="font-bold sm:text-[32px] text-[20px]">Ratajczyk</h2>
          </a>
        </div>
        <div className="footer-quick-links">
          <h2 className="font-bold text-[20px] text-center">Quick links</h2>
          <div className="flex flex-col ss:text-left text-center">
            {navLinks.map((navLink) => {
              return (
                navLink.name !== "Let's Talk" && (
                  <a
                    key={`navLink-${navLink.id}`}
                    href={`#${navLink.name.toLocaleLowerCase()}`}
                    className={`text-[#858385] md:text-[20px] font-normal text-[17px]`}
                  >
                    {navLink.name}
                  </a>
                )
              );
            })}
          </div>
        </div>
        <div className="flex">
          {socialMedia.map((socialLink) => {
            return (
              <IconButton
                key={`social-${socialLink.id}`}
                img={socialLink.img}
                wrapperStyle="header-github w-[40px] rounded-[20px] h-[40px] bg-[#232123]"
                hrefStyle="w-full h-full flex justify-center items-center"
                imgStyle="w-[80%] h-[80%]"
                href={socialLink.href}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
