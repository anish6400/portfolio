import React, { Component } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import "../styles/contact.css";
import { Link } from "react-router-dom";

class contact extends Component {
  state = {
    message: null,
  };
  sendEmail = (e) => {
    e.preventDefault();
    if (
      document.getElementsByClassName("nameField")[0].value === "" ||
      document.getElementsByClassName("emailField")[0].value === "" ||
      document.getElementsByClassName("messageField")[0].value === ""
    ) {
      this.setState({ message: { error: "Fields are empty." } });
      return false;
    }

    emailjs
      .sendForm("gmail", "portfolio", e.target, "user_iU934zVMw2b55HNpteObP")
      .then(
        (result) => {
          this.setState({ message: { ok: "Message sent successfully." } });
        },
        (error) => {
          this.setState({ message: { error: "Something went wrong." } });
        }
      );
  };
  render() {
    return (
      <div className="bigWrapper">
        <Link to="/">
          <button className="backButton">
            <FontAwesomeIcon icon={faAngleLeft} /> Back
          </button>
        </Link>
        <form className="container" onSubmit={this.sendEmail}>
          <div className="headerInfo">Contact Me</div>
          <input
            className="field nameField"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="field emailField"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="field numberField"
            type="number"
            name="number"
            placeholder="Phone Number (Optional)"
          />
          <input
            className="field siteField"
            type="site"
            name="site"
            placeholder="Website (Optional)"
          />
          <textarea
            className="field messageField"
            name="message"
            placeholder="Type your message here"
          />
          <input className="field submitButton" type="submit" value="Send" />
          {this.state.message ? (
            this.state.message.error ? (
              <div className="error">{this.state.message.error}</div>
            ) : (
              <div className="ok">{this.state.message.ok}</div>
            )
          ) : null}
        </form>
      </div>
    );
  }
}

export default contact;
