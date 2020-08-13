import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/InfoBar.css";
import { Link } from "react-router-dom";

class InfoBar extends Component {
  render() {
    return (
      <span>
        <span
          className="textWrap"
          onClick={(e) => {
            e.preventDefault();
            window.open("http://www.linkedin.com/in/anish0285", "blank");
          }}
        >
          <button
            className="textUp text"
            style={{ backgroundColor: "#0077b5" }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </button>
          <button
            className="textDown text"
            style={{ backgroundColor: "#0077b5" }}
          >
            Linkedin
          </button>
        </span>
        <span
          className="textWrap"
          onClick={(e) => {
            e.preventDefault();
            window.open("http://github.com/AnishKumar0285", "blank");
          }}
        >
          <button className="textUp text" style={{ backgroundColor: "#333" }}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </button>
          <button className="textDown text" style={{ backgroundColor: "#333" }}>
            Github
          </button>
        </span>
        <Link to="/contact">
          <span className="textWrap">
            <button
              className="textUp text"
              style={{ backgroundColor: "#6fc2b0" }}
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </button>
            <button
              className="textDown text"
              style={{ backgroundColor: "#6fc2b0" }}
            >
              Contact
            </button>
          </span>
        </Link>

        <span className="textWrap">
          <button
            className="textUp text"
            style={{ backgroundColor: "#565f69" }}
          >
            <FontAwesomeIcon icon={faIdCard} size="2x" />
          </button>
          <button
            className="textDown text"
            style={{ backgroundColor: "#565f69" }}
          >
            Resume
          </button>
        </span>
      </span>
    );
  }
}

export default InfoBar;
