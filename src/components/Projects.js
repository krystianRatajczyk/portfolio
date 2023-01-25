import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { projects } from "../constants/dummyData";
import Title from "./ui/Title";
import styles from "../style";
import Project from "./Project";

const Projects = () => {
  const { ref: projectsRef, inView: isVisible } = useInView();
  const [showMore, setShowMore] = useState(true);

  const renderProjects = () => {
    return (
      <div>
        <div
          className={`ll:w-[90%] w-full h-full ${styles.paddingY} grid ll:grid-cols-3 ss:grid-cols-2 grid-cols-1 items-center gap-y-[10px] gap-x-[40px] 
          justify-center ss:hidden`}
        >
          {projects.map((project, index) => {
            if (!showMore && index < 3) {
              return <Project key={`project-${project.id}`} {...project} />;
            } else if (showMore) {
              return <Project key={`project-${project.id}`} {...project} />;
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
          className={`ll:w-[90%] w-full h-full ${styles.paddingY} ss:grid ll:grid-cols-3 ss:grid-cols-2 grid-cols-1 items-center gap-y-[10px] gap-x-[40px] 
          justify-center hidden`}
        >
          {projects.map((project) => {
            return <Project key={`project-${project.id}`} {...project} />;
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${styles.flexCenter} w-[100vw] min-h-[100vh]  ${styles.paddingY} mm:px-0 mm:py-0`}
      id="projects"
    >
      <div className="w-full h-full flex items-center flex-col-reverse mm:flex-row">
        <div className="mm:w-[60%] xs:w-[90%] w-full h-full flex items-center justify-center ">
          {renderProjects()}
        </div>
        <div className="mm:w-[40%] xs:w-[80%] w-full  h-[100%] flex items-center justify-center ">
          <div
            className={`h-full xm:w-[70%] ss:w-[90%] w-full  flex justify-center items-start flex-col projects  ${
              isVisible ? "show" : ""
            }`}
            ref={projectsRef}
          >
            <Title
              title="Projects"
              titleWrapper="xl:text-[105px] lg:text-[80px] ss:text-[60px] text-[50px] font-bold pl-[30px]"
            />
            <div className="mt-[30px]">
              <h2 className="mb-[20px] font-bold text-[30px]">
                Krystian Ratajczyk
              </h2>
              <h3 className="ss:text-[20px] text-[#707070] font-bold text-[15px]">
                Lorem IpsumEiusmod cillum aliquip minim sint dolor consectetur.
                Velit labore non commodo ex dolore nulla incididunt ea veniam
                tempor reprehenderit incididunt aute veniam. Aliqua nulla
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
