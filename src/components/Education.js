import React from "react";
import { aboutContent } from "../constants/dummyData";
import Title from "./ui/Title";
import calendar from "../assets/icons/calendar.png";

const Education = () => {
  return (
    <div className="w-full h-full">
      <div className="flex p-[40px] flex-col h-full ">
        <Title title="Education" titleWrapper={"p-0 text-[40px] font-bold"} />
        <h3 className="text-[20px] text-gray font-bold">
          {aboutContent.ExperienceDescription}
        </h3>
        <div className="w-full h-full md:mt-[10px] mt-[20px]">
          <div className="flex w-full justify-between md:flex-row flex-col">
            <div className="flex-1">
              <h2 className="text-white text-[20px] font bold">
                Primary School
              </h2>
              <h3 className="text-gray text-[17px] font-bold">
                I graduated primary school
              </h3>
              <div className="flex justify-center w-full">
                <img src={calendar} />
                <h3>2013-2021</h3>
              </div>
            </div>
            <div className="flex items-center flex-col">
              <div className="w-[14px] h-[14px] bg-blue-300 rounded-[7px]" />
              <div className="md:h-full h-[50px] w-[2px] bg-blue-300" />
              <div className="w-[14px] h-[14px] bg-blue-300 rounded-[7px] md:hidden block" />
            </div>
            <div className="flex-1 md:flex hidden" />
          </div>
          <div className="flex w-full justify-between md:flex-row-reverse flex-col">
            <div className="flex-1">
              <h2 className="text-white text-[20px] font bold">High School</h2>
              <h3 className="text-gray text-[17px] font-bold">
                I am currently in 2th grade
              </h3>
              <div className="flex justify-center w-full">
                <img src={calendar} />
                <h3>2022-2025</h3>
              </div>
            </div>
            <div className="flex items-center flex-col">
            <div className="w-[14px] h-[14px] bg-blue-300 rounded-[7px]" />
              <div className="md:h-full h-[50px] w-[2px] bg-blue-300" />
              <div className="w-[14px] h-[14px] bg-blue-300 rounded-[7px] md:hidden block" />
            </div>
            <div className="flex-1 md:flex hidden" />
          </div>
          <div className="flex w-full justify-between md:flex-row flex-col">
            <div className="flex-1">
              <h2 className="text-white text-[20px] font bold">University</h2>
              <h3 className="text-gray text-[17px] font-bold">
                Somewhen in the future...
              </h3>
              <div className="flex justify-center w-full">
                <img src={calendar} />
                <h3>...</h3>
              </div>
            </div>
            <div className="flex items-center flex-col">
              <div className="w-[14px] h-[14px] bg-blue-300 rounded-[7px] md:block hidden" />
            </div>
            <div className="flex-1 md:flex hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
