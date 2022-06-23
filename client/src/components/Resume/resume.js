import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/animations";
import "./resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] =
    useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] =
    useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return; //If not in view dont show
    Animations.animations.fadeInScreen(props.id); //Else show data
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(
      fadeInScreenHandler
    );

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
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
        <div className="resume-heading-description">
          <span>
            {props.description ? props.description : ""}
          </span>
        </div>
      </div>
    );
  };

  //Static Data
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    {
      label: "Programming Skills",
      logoSrc: "programming-skills.svg",
    },
    // { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" }
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "React Js", ratingPercentage: 60 },
    { skill: "Express Js", ratingPercentage: 70 },
    { skill: "Mongo Db", ratingPercentage: 60 },
    { skill: "Front End (HTML && CSS)", ratingPercentage: 70 },
    { skill: "Java", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "C#", ratingPercentage: 10 },
    { skill: "C++", ratingPercentage: 30 },
  ];


  const resumeDetails = [
    <div
      className="resume-screen-container"
      key="education"
    >
      <ResumeHeading
        heading={"University of Manitoba"}
        subHeading={
          "Bachelor of Science in Computer Engineering"
        }
        fromDate={"2019"}
        toDate={"Present"}
      />
      <ResumeHeading
        heading={"St. John's High school"}
        subHeading={"Grade 9 - 12 Graduate"}
        fromDate={"2015"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"La Naval Academy (Philippines)"}
        subHeading={"Grade 3 - 8"}
        fromDate={"2010"}
        toDate={"2015"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div
      className="resume-screen-container"
      key="work-experience"
    >
      <div className="experience-container">
        <ResumeHeading
          heading={"Co-Op Student Programmer"}
          subHeading={"Agriculture and Agri-Food Canada"}
          fromDate={"2021"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            To create a simple UX form design along with a simple
            and secure back end
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Designed a responsive user form
            application using JavaScript, Vue, and
            Grails
          </span>
          <br />
          <span className="resume-description-text">
            - Optimized/modified an existing
            application that transfers inputted data
            between two excel files using VBA
          </span>
          <br />
          <span className="resume-description-text">
            - Handled and directed sensitive company
            data using MS Word, Excel, and Access on
            a daily basis
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{
                width: skill.ratingPercentage + "%",
              }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,


    /* Interests */
    <div
      className="resume-screen-container"
      key="interests"
    >
      <ResumeHeading
        heading="Video Editing"
        description="Apart from being a computer engineering student, I also love to work on editing personal videos and adding some VFX"
      />
      <ResumeHeading
        heading="Competitive Video Gaming"
        description="Playing some offline/online games, such as League of Legends, has helped me sharpen my reflexes and attentiveness to small details aswell as it helps me be more cooperative to other players"
      />
      <ResumeHeading
        heading="Robot Building"
        description="I like to challenge myself to learn new technologies and learning the fundametals of the Arduino board has helped me to widen my skills"
      />
    </div>,

  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: {
        transform:
          "translateY(" + index * offsetHeight * -1 + "px)",
      },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex
            ? "bullet selected-bullet"
            : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />

        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);


  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading
          title={"Resume"}
          subHeading={"My formal Bio Details"}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">
            {getResumeScreens()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
