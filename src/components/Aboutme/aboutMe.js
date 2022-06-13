import React from "react";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/animations";
import "./aboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return; //If not in view dont show
    Animations.animations.fadeInScreen(props.id); //Else show data
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(
      fadeInScreenHandler
    );

  const SCREEN_CONSTSANTS = {
    description:
      "Currently a Computer Engineering student with full stack web and game developer beginner knowledge, along with data structures and algorithms efficiency. Professional communication and writing expertise with willingness to learn new technologies",
    highlights: {
      bullets: [
        "Full Stack web development MERN",
        "Interactive/Responsive Front End design",
        "React, React Native, and Vue",
        "Game developement with Unreal and Unity Engine",
        "Data structure and Algorithms",
        "Data analysis",
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map(
      (value, i) => (
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      )
    );
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading
          title={"About Me"}
          subHeading={"Why Choose Me?"}
        />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>
                  {SCREEN_CONSTSANTS.highlights.heading}
                </span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn btn-primary"
                onClick={() =>
                  ScrollService.scrollHandler.scrollToHireMe()
                }
              >
                {" "}
                Hire Me{" "}
              </button>
              <a
                href="Paul_Reyes_Resume.pdf"
                download="Paul_Reyes_Resume.pdf"
              >
                <button className="btn btn-highlighted">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
