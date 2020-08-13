import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode } from "@fortawesome/free-solid-svg-icons";

const Box = (props) => {
  return (
    <span className="box">
      <span className="image">
        <img src={props.logo} alt="projectLogo" className="imgElement" />
        <div className="links">
          <button
            className="linkButton"
            onClick={(e) => {
              e.preventDefault();
              window.open(props.toSite, "blank");
            }}
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button
            className="linkButton"
            onClick={(e) => {
              e.preventDefault();
              window.open(props.toCode, "blank");
            }}
          >
            <FontAwesomeIcon icon={faCode} />
          </button>
        </div>
      </span>
      <span className="descriptionBox">
        <div className="projectTitle">{props.title}</div>
        <div className="tags">
          {props.tagNames.split(",").map((tag) => (
            <span className="tag">{tag.trim()}</span>
          ))}
        </div>
        <div className="description">
          <p>{props.p1}</p>
          <p>{props.p2}</p>
          <p>{props.p3}</p>
        </div>
      </span>
    </span>
  );
};

export default Box;
