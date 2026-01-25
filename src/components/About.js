import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
        <input type="checkbox" id="checkbox-cover"></input>
      <div className="book">
        <div className="cover">
            <label for="checkbox-cover"></label>
        </div>
        <div className="page"></div>
        <div className="back-cover"></div>
      </div>
    </div>
  );
};

export default About;