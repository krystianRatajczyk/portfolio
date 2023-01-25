import React from "react";
import { aboutContent } from "../constants/dummyData";
import Title from "./ui/Title";
import badge from "../assets/icons/badge.png";
import head from "../assets/icons/head.png";
import projects from "../assets/icons/projects.png";

const Experience = () => {
  return (
    <div className="w-full h-full">
      <div className="flex p-[40px] flex-col h-full ">
        <Title
          title="My Experience"
          titleWrapper={"p-0 text-[40px] font-bold"}
        />
        <h3 className="text-[20px] text-gray font-bold">
          {aboutContent.ExperienceDescription}
        </h3>
        <div
          className="w-full mt-[10px] grid mm:grid-cols-3 xs:grid-cols-2 grid-cols-1 items-center 
        justify-center gap-x-[10px] gap-y-[10px]"
        >
          <div className="mm:w-[80%] xs:w-full w-[80%] xs:p-0 p-2 bg-secondary rounded-[20px] flex items-center justify-center flex-col aspect-square justify-self-center">
            <img src={badge} />
            <h3>Experience</h3>
            <h4>0 years of experience</h4>
          </div>
          <div className="mm:w-[80%] xs:w-full w-[80%] xs:p-0 p-2 bg-secondary rounded-[20px] flex items-center justify-center flex-col aspect-square justify-self-center">
            <img src={head} />
            <h3>Clients</h3>
            <h4>0 clients</h4>
          </div>
          <div
            className="mm:w-[80%]  xs:w-full w-[80%] xs:p-0 p-2 bg-secondary rounded-[20px] flex items-center justify-center flex-col aspect-square  
          justify-self-center"
          >
            <img src={projects} />
            <h3>Projects</h3>
            <h4>3+ completed</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
