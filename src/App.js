import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import './App.css';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;

/*run on gitbash:
if you are not on the local link open do the following:
go to git bash and write npm start

go to the folder personal-website-workshop
then after saving the edits on VS code commit the changes then open gitbash and write
git push -u origin main (so gitHub and the link will be updated)

if that does not work try the following:
npm run deploy
every time you change something on the page
so the new link it's updated




ok actually the way to push the updates to the link I created is:
git commit -am "write what you updated"
git push
npm run deploy
*/