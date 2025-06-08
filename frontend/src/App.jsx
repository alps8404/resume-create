import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ResumeMaker from './pages/ResumeMaker'; // ✅ new import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ResumeMaker />} />
      </Routes>
    </Router>
  );
}

export default App;
