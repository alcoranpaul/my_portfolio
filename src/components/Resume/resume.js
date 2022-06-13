import React, { useState } from "react";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/animations";

export default function resume(props) {
  //   const [selectedBulletIndex, setSelectedBulletIndex] =
  //     useState(0);
  //   const [carousalOffSetStyle, setCarousalOffSetStyle] =
  //     useState({});
  const resumeHeading = (props) => {
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet">
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>
            {props.subHeading ? props.subHeading : ""}
          </span>
        </div>
        <div className="heading-description">
          <span>
            {props.description ? props.description : ""}
          </span>
        </div>
      </div>
    </div>;
  };

  const resumeBullets = [
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    {
      label: "Programming Skills",
      logoSrc: "programming-skills.svg",
    },
    { label: "Education", logoSrc: "education.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "React Js", ratingPercentage: 60 },
    { skill: "Express Js", ratingPercentage: 70 },
    { skill: "Mongo Db", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Java", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "C#", ratingPercentage: 10 },
    { skill: "C++", ratingPercentage: 30 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase my details, experience, and projects.",
      subHeading:
        "Technologies used: React Js, JavaScript, React-Bootstrap",
    },
    //Add more projects here...
  ];
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return; //If not in view dont show
    Animations.animations.fadeInScreen(props.id); //Else show data
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(
      fadeInScreenHandler
    );
  return (
    <div
      className="resume-container screen-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading
          title={"Resume"}
          subHeading={"My Formal Bio Details"}
        />
      </div>
    </div>
  );
}
