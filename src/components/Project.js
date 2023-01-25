import React, { useState } from "react";

import github from "../assets/icons/github.png";
import eye from "../assets/icons/eye.png";
import no_project from "../assets/images/no-project.png";

const Project = ({ image, githublink, previewlink, title }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`w-full h-full flex flex-col ll:justify-center justify-start project ${
        showDetails ? "active" : "inactive"
      }`}
    >
      <div className="flex justify-between">
        <h2 className="mb-[10px] text-[23px] font-bold">{title}</h2>
       { image && <p
          className="text-blue-200 cursor-pointer"
          onClick={() => {
            setShowDetails((prevState) => !prevState);
          }}
        >
          {!showDetails ? "Show details" : "Hide details"}
        </p>}
      </div>
      <div
        className={`rounded-[20px] ll:h-full h-[70%] w-full overflow-hidden shadow-lg shadow-[#4e4e4e] flex relative`}
      >
        <img
          src={image ? image : no_project}
          alt=""
          className="w-full h-full object-cover"
        />
        {image && (
          <div
            className="absolute left-0 top-0 w-full h-full hidden items-center justify-center 
          bg-black flex-col links cursor-pointer"
          >
            <a
              href={githublink}
              className="flex flex-row items-center mb-2 gap-2 animated-link"
            >
              <img src={github} className="w-1/5" />
              <h3>Github</h3>
            </a>
            <a
              href={previewlink}
              className="flex flex-row items-center gap-2 animated-link"
            >
              <img src={eye} className="w-1/5" />
              <h3>Website</h3>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
