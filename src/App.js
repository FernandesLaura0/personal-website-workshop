import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import './App.css';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/experience" element={<h1>Expereince Page</h1>} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;

/*run on gitbash:
go to the folder personal-website-workshop
npm run deploy
every time you change something on the page
so the new link it's updated
*/