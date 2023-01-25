import React from "react";

import github from "../assets/icons/github.png";
import eye from "../assets/icons/eye.png";
import no_project from "../assets/images/no-project.png";

const Project = ({ image, githublink, previewlink }) => {
  return (
    <div
      className={`rounded-[20px] ll:h-full h-[70%] w-full overflow-hidden shadow-lg shadow-[#4e4e4e] project 
    ${image ? "image" : "gradient"}`}
    >
      <img
        src={image ? image : no_project}
        alt=""
        className="w-full h-full object-cover"
      />
      {(githublink && previewlink) ||
        (image && (
          <div className="hidden">
            <a href={githublink}>
              <img src={github} />
              <h3>Github</h3>
            </a>
            <a href={previewlink}>
              <img src={eye} />
              <h3>Website</h3>
            </a>
          </div>
        ))}
    </div>
  );
};

export default Project;
