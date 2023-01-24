import React, { useEffect, useState } from "react";
import background from "../assets/images/background.png";
import banner from "../assets/images/earth-image.png";

const Home = () => {
  let basicText =
    "Hi! I am Krystian Ratajczyk and I am interested in web development.";
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(7);

  const [animationEnded, setAnimationEnded] = useState(false);
  const [animationClasses, setAnimationClasses] = useState("slide");
  const [currentFinishedAnimation, setCurrentFinishedAnimation] = useState("");

  useEffect(() => {
    if (currentIndex <= basicText.length) {
      const randomTime = Math.random() * (130 - 70) + 70;
      const timeout = setTimeout(() => {
        setCurrentText(basicText.slice(0, currentIndex));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, randomTime);

      return () => clearTimeout(timeout);
    }
  }, [currentText, basicText, currentIndex]);

  useEffect(() => {
    if (animationEnded && currentFinishedAnimation === "slide") {
      setAnimationClasses("pulse");
      setAnimationEnded(false);
    }
  }, [animationEnded, currentFinishedAnimation]);

  return (
    <div
      id="home"
      className="w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <img
        src={background}
        className="w-[100%] h-[calc(100vh)] absolute top-0 left-0 z-[99] object-cover"
        alt=""
      />
      <div className="w-[90%] h-[60%] z-[500] flex justify-between md:flex-row flex-col items-center">
        <div className="md:w-[50%] wd:h-[100%] flex flex-col justify-center gap-[24px] w-[90%]">
          <div className="w-[120px] py-[5px] px-[10px] border bg-primary-gradient">
            <h3 className="text-center  font-bold">Welcome!</h3>
          </div>
          <div className="w-[100%]">
            <h2 className="lg:text-[50px] text-[32px] font-bold leading-[1.1]">
              {currentText}
            </h2>
          </div>
          <div className="w-[100%]">
            <h4 className="text-[15px] text-[#707070] leading-[1.7]  font-bold">
              Est quis consequat laborum anim voluptate laborum officia tempor
              Lorem in occaecat. Est quis consequat laborum anim voluptate
              laborum officia tempor Lorem in occaecat. Laboris labore qui duis
              ut occaecat voluptate mollit aute anim quis laboris culpa Lorem
            </h4>
          </div>
        </div>
        <div className="w-[50%] md:h-[100%] h-[50%] sm:h-[70%] flex justify-center items-center md:mt-0 mt-4">
          <img
            src={banner}
            className={`h-[90%] ${animationClasses} banner`}
            alt={""}
            onAnimationEndCapture={(animation) => {
              setAnimationEnded(true);
              setCurrentFinishedAnimation(animation.animationName);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
