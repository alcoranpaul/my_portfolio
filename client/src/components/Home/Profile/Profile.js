import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/PaulReyes30/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/paul-adrian-reyes-338139241/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/alcoranpaul">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://steamcommunity.com/profiles/76561198200509718/">
                <i className="fa fa-steam-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Kamusta (Hello), I'm{" "}
              <span className="highlighted-text">Paul</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Aspiring Developer ✍️(◔◡◔)",
                    2000,
                    "Application Developer 📱",
                    2000,
                    "Web Developer 🕸️",
                    2000,
                    "Game Developer 🎮",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Pursuing modern techniques and technologies in application development
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn btn-primary" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire me{" "}
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
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
