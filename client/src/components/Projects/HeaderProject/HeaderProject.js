import React from "react";
import "./HeaderProject.css";

export default function Header() {
    return (
        <div className="header-project-container">
            <div className="header-project-parent">
                <img
                    src={require("../../../assets/Home/shape-bg-vertical.png")}
                    alt="shape"
                />
            </div>
        </div>
    );
}
