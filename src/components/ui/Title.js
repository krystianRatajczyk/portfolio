import React from "react";

const Title = ({ title, fontSize = 105, titleStyle, titleWrapper }) => {
  return (
    <div className={`${titleWrapper}`}>
      <h2 className={`${titleStyle}`}>{title}</h2>
    </div>
  );
};

export default Title;
