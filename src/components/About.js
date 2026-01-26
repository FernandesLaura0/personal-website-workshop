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
        <div class="page" id="page1">
          <div class="front-page">
            <p>
              More about me:
            </p>
            <label class="next" for="checkbox-page1">
              <i class="fas-fa-chevron-right">
              </i>
            </label>
          </div>
        </div>

        <div class="page" id="page2">

        </div>
        
        <div className="back-cover"></div>
      </div>
    </div>
  );
};

export default About;