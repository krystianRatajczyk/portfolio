import React, { useState } from "react";
import afterglow from "../assets/images/afterglow.png";
import skills_image from "../assets/images/skills.png";
import Title from "./ui/Title";
import { useInView } from "react-intersection-observer";
import styles from "../style";
import { skills, skillsLinks } from "../constants/dummyData";
import Skill from "./Skill";
import Experience from "./Experience";
import Education from "./Education";

const Skills = () => {
  const { ref: skillsRef, inView: isVisible } = useInView();
  const [currentPage, setCurrentPage] = useState("Skills");
  const [showMore, setShowMore] = useState(false);

  const renderSkills = () => {
    return (
      <div>
        <div className="w-full grid xs:hidden sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 xs:gap-y-[8px] gap-y-[15px] gap-x-[8px] mt-[20px] h-full">
          {skills.map((skill, index) => {
            if (!showMore && index < 3) {
              return <Skill key={`project-${skill.id}`} {...skill} />;
            } else if (showMore) {
              return <Skill key={`project-${skill.id}`} {...skill} />;
            }
          })}

          <p
            className="text-right focus:text-gray ss:hidden block"
            onClick={() => setShowMore((prevState) => !prevState)}
          >
            {!showMore ? "Show more" : "Show less"}
          </p>
        </div>

        <div
          className={`w-full xs:grid hidden sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 xs:gap-y-[8px] gap-y-[15px] gap-x-[8px] mt-[20px] h-full`}
        >
          {skills.map((skill) => {
            return <Skill key={`project-${skill.id}`} {...skill} />;
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      id="skills"
      className={`${styles.flexCenter} w-[100vw] min-h-[100vh] `}
    >
      <div className="w-full h-full flex justify-between items-center xm:flex-row flex-col ">
        <img
          src={afterglow}
          className="absolute -bottom-[20px] left-0 "
          alt=""
        />
        <img src={afterglow} className="absolute right-0 rotate-180" alt="" />
        <div
          className="lg:w-[40%] xm:w-[30%] xs:w-[80%] w-full lg:h-full xm:h-[40%] h-[30%] flex items-center 
                        xm:flex-col justify-around z-[200] sm:flex-row"
        >
          <div
            className={`skills-info xs:w-[70%] w-full z-[1000] flex justify-center items-start flex-col ${
              isVisible ? "show" : ""
            }`}
            ref={skillsRef}
          >
            <Title
              title={currentPage}
              titleWrapper="xl:text-[105px] lg:text-[80px] ss:text-[60px] text-[50px] font-bold ll:pl-[30px]"
            />
            <div className="mt-[30px]">
              <h2 className="mb-[20px] font-bold text-[30px]">
                Krystian Ratajczyk
              </h2>
              <h3 className="ss:text-[20px] text-[#707070] font-bold text-[15px]">
                Lorem IpsumEiusmod cillum aliquip minim sint dolor consectetur.
              </h3>
            </div>
          </div>
          <div className="sm:w-full w-[40%] mt-[20px] lg:h-[40%] xm:h-[30%] items-center justify-center sm:flex hidden">
            <img src={skills_image} alt="" className="h-[90%] relative" />
          </div>
        </div>
        <div className="lg:w-[60%] w-full lg:h-full xm:h-[50%] h-[60%] mt-[20px] flex items-center justify-center z-[200]">
          <div className="w-full h-full flex items-center justify-center relative flex-col text-center">
            <div
              className="flex text-[40px] cursor-pointer transition duration-300 ease  w-[65%] items-center 
            justify-between mb-[15px] ss:flex-row flex-col"
            >
              {skillsLinks.map((skillsLink) => {
                return (
                  <div
                    onClick={() => setCurrentPage(skillsLink.name)}
                    key={`skills-link-${skillsLink.id}`}
                  >
                    <h2
                      className={`${
                        currentPage === skillsLink.name ? "active" : ""
                      } experience hover:text-gray transition duration-200 ll:text-[38px] text-[25px] font-bold`}
                    >
                      {skillsLink.name}
                    </h2>
                  </div>
                );
              })}
            </div>
            <div
              className={`xs:w-[85%] w-full h-auto bg-[#151515] ss:rounded-[64px] rounded-[32px] flex items-center justify-center 
              transition-all duration-300 `}
            >
              {currentPage === "Skills" ? (
                <div className="w-full h-full">
                  <div className="flex ss:p-[40px] p-[20px] flex-col h-full">
                    <Title
                      title="Technologies"
                      titleWrapper={"p-0 xs:text-[40px] text-[30px] font-bold"}
                    />
                    <h3 className="text-[20px] text-gray  font-bold">
                      These are technologies which I have worked with before
                    </h3>

                    {renderSkills()}
                  </div>
                </div>
              ) : currentPage === "Experience" ? (
                <Experience />
              ) : (
                <Education />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
