import React, { useEffect, useState } from "react";

import close from "../assets/images/close.png";
import menu from "../assets/images/menu.png";
import { navLinks, socialMedia } from "../constants/dummyData";
import IconButton from "./ui/IconButton";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className={`w-full flex py-[15px] justify-between items-center `}>
      <div className="flex xm:flex-[40%] flex-[25%] xl:flex-[85%]">
        {" "}
        {/* className: logo*/}
        <a href="#home">
          <h2 className="text-white font-bold xm:text-[20px] text-[16px]">
            {" "}
            {/* className: krystian*/}
            Krystian
          </h2>
          <h2 className="text-white font-bold xm:text-[20px] text-[16px]">
            {" "}
            {/* className: ratajczyk*/}
            Ratajczyk
          </h2>
        </a>
      </div>

      <div
        className={`justify-between items-center sm:flex hidden flex-[75%] xm:flex-[60%]`}
      >
        <div className="flex justify-between align-center flex-[50%]">
          <div className="flex gap-[40px] xm:gap-[70px] items-center">
            {navLinks.map((navLink) => {
              return (
                navLink.name !== "Let's Talk" && (
                  <a
                    href={`#${navLink.name.toLocaleLowerCase()}`}
                    key={`navLink-${navLink.id}`}
                    className={`${
                      activeTab === navLink.name ? "text-white" : "text-[#858385]"
                    } xm:text-[20px] font-normal text-[17px]`}
                    onClick={() => setActiveTab(navLink.name)}
                  >
                    {navLink.name}
                  </a>
                )
              );
            })}
          </div>
          <div className="flex justify-center items-center gap-[20px]">
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
          <div className="flex justify-center items-center">
            <a
              href="#contact"
              className="text-white bg-[#121112] border xm:py-[22px] xm:px-[25px] 
              py-[18px] px-[20px] hover:bg-[#272727] transition duration-300"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div className="flex justify-around items-center mr-2">
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
        <img
          src={toggle ? close : menu}
          alt=""
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle((prevState) => !prevState);
          }}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-primary absolute top-20 right-0 mx-4 my-2  rounded-xl
           slide-open
          `}
        >
          <ul className="list-none flex justify-end items-left flex-1 flex-col">
            {navLinks.map((navLink) => {
              return (
                <li
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white `}
                  key={`navLink-${navLink.id}`}
                >
                  <a
                    href={`#${
                      navLink.scrollId
                        ? navLink.scrollId
                        : navLink.name.toLocaleLowerCase()
                    }`}
                    className="text-[#858385] text-[20px] font-normal"
                  >
                    {navLink.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
