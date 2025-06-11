import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
//import ResumeMaker from './pages/ResumeMaker'; 
import ErrorPage from './pages/ErrorPage'; // ✅ new import

function App() {
  return (
    
    <Router>
      <Routes>
        {/* <meta name="google-adsense-account" content="ca-pub-1305960827881085"></meta> */}
       
        {/* <Route path="/resume" element={<ResumeMaker />} /> */}
         <Route path="/" element={<Home />} />
        <Route path="/resume" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
