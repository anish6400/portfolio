import React, { Component } from "react";
import "../styles/about.css";
import { Link } from "react-router-dom";
import InfoBar from "../components/InfoBar";
import Button from "../components/Button";

class about extends Component {
  render() {
    return (
      <div className="main">
        <Link to="/" className="brandName">
          Anish Kumar
        </Link>
        <div className="aboutWrapper">
          <div className="header">
            <span>Hi, It's</span> <span>Anish Kumar</span>
          </div>
          <div className="about">
            <span>
              I am a software developer currently based in Vancouver, BC.
            </span>
            <span>Have a look at my portfolio</span>
          </div>
          <div style={{ display: "inline-block", marginTop: "50px" }}>
            <Link to="/projects">
              <Button text="View Projects > " />
            </Link>
          </div>
        </div>
        <div className="info">
          <InfoBar />
        </div>
      </div>
    );
  }
}

export default about;
