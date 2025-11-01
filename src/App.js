import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/experience" element={<h1>Expereince Page</h1>} />
        <Route path="/projects" element={<h1>Projects Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
