import React from "react";
import "../styles/Button.css";

const Button = (props) => {
  return (
    <span className="wrapper">
      <button className="buttonUp buttonProp">{props.text}</button>
      <button className="buttonDown buttonProp">{props.text}</button>
    </span>
  );
};

export default Button;
