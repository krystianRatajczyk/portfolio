import React from "react";

const Skill = ({ title, level, image }) => {
  
  return (
    <div className=" h-full w-full rounded-[10px] bg-[#20292e] flex flex-col items-center justify-center z-[1000]">
      <h2>{title}</h2>
      <img src={image} className="h-[70px] mt-[10px]"/>
      <h4 className="mt-[10px] text-[18px] text-[#666666]">{level}</h4>
    </div>
  );
};

export default Skill;
