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
            <label htmlFor="checkbox-cover"></label>
        </div>
        <div className="page" id="page1">
          <div class="front-page">
            <p>
              More about me:
            </p>
            <label className="next" for="checkbox-page1">
              <i className="fas-fa-chevron-right">
              </i>
            </label>
          </div>
          <div className="back-page">
            <img src="1.jpg"></img>
            <label className="prev" htmlFor="checkbox-page1">
              <i className="fas-fa-chevron-right">
              </i>
              </label>
          </div>
        </div>

        <div className="page" id="page2">
          <div className="front-page">
            <h2> Page 2</h2>
            <p> I am doing Psychology and Computer Science Computer
              combined major because I always believed that people and computers 
              are very much connected so getting to learn about both has been really
              interesting.</p>
              <label className="next" htmlFor="checkbox-page2"><i
              className="fas fa-chevron-right"></i></label>
          
            <div className="back-page">
              <img src="2.jpg"></img>
              <label className="prev" htmlFor="checkbox-page2"><i 
              className="fas fa-chevron-left"></i></label>
            </div>
          </div>
        </div>
        <div className="page" id="page3">
          <div className="front-page">
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