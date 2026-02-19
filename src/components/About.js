import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
        <input type="checkbox" id="checkbox-cover"></input>
        <input type="checkbox" id="checkbox-page1"></input>
        <input type="checkbox" id="checkbox-page2"></input>
        <input type="checkbox" id="checkbox-page3"></input>
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
          <div class="back-page">
            <img src="1.jpg"></img>
            <label class="prev" for="checkbox-page1">
              <i class="fas-fa-chevron-right">
              </i>
              </label>
          </div>
        </div>

        <div class="page" id="page2">
          <div class="front-page">
            <h2> Page 2</h2>
            <p> I am doing Psychology and Computer Science Computer
              combined major because I always believed that people and computers 
              are very much connected so getting to learn about both has been really
              interesting.</p>
              <label class="next" for="checkbox-page2"><i
              class="fas fa-chevron-right"></i></label>
          </div>
        </div>

        <div class="back-page">
          <img src="2.jpg"></img>
          <label class="prev" for="checkbox-page2"><i 
          class="fas fa-chevron-left"></i></label>
        </div>
        <div class="page" id="page3">
          <div class="front-page">
            <h2> Page 3</h2>
            <p>More info about me:</p>
          </div>
        </div>
        <div className="back-cover"></div>
      </div>
    </div>
  );
};

export default About;