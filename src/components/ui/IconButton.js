import React from "react";

const IconButton = ({ img, wrapperStyle, hrefStyle, imgStyle, href }) => {
  return (
    <div className={`${wrapperStyle}`}>
      <a
        href={href}
        target="_blank"
        className={`${hrefStyle}`}
      >
        <img src={img} className={`${imgStyle}`} alt=""/>
      </a>
    </div>
  );
};

export default IconButton;
