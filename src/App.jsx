import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Layout/Home";
import Courses from "./Layout/Courses";

const App = () => {
  return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
      </div>
  );
};

export default App;
