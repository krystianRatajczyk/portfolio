import React, { useState } from "react";
import afterglow from "../assets/images/afterglow.png";
import skills_image from "../assets/images/skills.png";
import Title from "./ui/Title";
import { useInView } from "react-intersection-observer";
import styles from "../style";

const Skills = () => {
  const { ref: skillsRef, inView: isVisible } = useInView();
  const [currentPage, setCurrentPage] = useState("Skills");

  const titleStyle = {
    "font-size": "40px",
  };

  const titleWrapper = {
    padding: "0",
  };
  return (
    <div
      id="skills"
      className={`${styles.flexCenter} w-[100vw] h-[100vh] border`}
    >
      <div className="w-full h-full flex justify-between items-center ">
        <img
          src={afterglow}
          className="absolute -bottom-[20px] left-0 "
          alt=""
        />
        <img src={afterglow} className="absolute right-0 rotate-180" alt="" />
        <div className="w-[40%] h-full flex items-center flex-col justify-around z-[200]">
          <div
            className={`skills-info w-[70%] z-[1000] flex justify-center items-start flex-col ${
              isVisible ? "show" : ""
            }`}
            ref={skillsRef}
          >
            <Title
              title={currentPage}
              titleWrapper="text-[105px] font-bold pl-[30px]"
            />
            <div className="mt-[30px]">
              <h2 className="mb-[20px] font-bold text-[1.5em]">
                Krystian Ratajczyk
              </h2>
              <h3 className="text-[20px] text-gray  font-bold">
                Tancz z nami bracie by wiory szly...
              </h3>
            </div>
          </div>
          <div className="w-full h-[40%] flex items-center justify-center">
            <img src={skills_image} alt="" className="h-[90%] relative" />
          </div>
        </div>
        <div className="skills-right z-[200]">
          <div className="skills-container">
            <div className="skills-tabs">
              <div onClick={() => setCurrentPage("Skills")}>
                <h2 className={currentPage === "Skills" ? "active" : ""}>
                  Skills
                </h2>
              </div>
              <div onClick={() => setCurrentPage("Experience")}>
                <h2 className={currentPage === "Experience" ? "active" : ""}>
                  Experience
                </h2>
              </div>
            </div>
            <div
              className={`skills-background ${
                currentPage === "Skills" ? "skills" : "experience"
              }`}
            >
              <div className="skills-wrapper">
                <div className="skills-technologies">
                  <Title
                    title="Technologies"
                    titleStyle={titleStyle}
                    titleWrapper={titleWrapper}
                  />
                  <h3>
                    These are technologies which I have used worked with before
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
