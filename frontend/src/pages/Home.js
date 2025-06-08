// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Resume Builder</h1>
      <p>Create your professional resume easily</p>
      <Link to="/resume">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Go to Resume Maker
        </button>
      </Link>
    </div>
  );
}

export default Home;
