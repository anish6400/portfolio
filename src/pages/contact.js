import React, { Component } from "react";
import emailjs from "emailjs-com";

import "../styles/contact.css";

class contact extends Component {
  state = {
    message: null,
  };
  sendEmail = (e) => {
    e.preventDefault();
    this.setState({ message: { ok: "Working on it..." } });
    if (
      document.getElementsByClassName("nameField")[0].value === "" ||
      document.getElementsByClassName("emailField")[0].value === "" ||
      document.getElementsByClassName("messageField")[0].value === ""
    ) {
      this.setState({ message: { error: "Fields are empty." } });
      return false;
    }

     var tempParams = {
        name: document.getElementsByClassName("nameField")[0].value,
        email: document.getElementsByClassName("emailField")[0].value,
        number: document.getElementsByClassName("numberField")[0].value,
        site: document.getElementsByClassName("siteField")[0].value,
        message: document.getElementsByClassName("messageField")[0].value
    }

    emailjs
      .send("gmail", "portfolio", tempParams, "user_iU934zVMw2b55HNpteObP")
      .then(
        (result) => {
          this.setState({ message: { ok: "Message sent successfully." } });
        },
        (error) => {
          this.setState({ message: { error: "Something went wrong." } });
          console.log(error);
        }
      );
  };
  back = (e) => {
    e.preventDefault();
    window.history.back();
  }
  render() {
    return (
      <div className="bigWrapper">
        <form className="container">
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
          <div className="buttonWrapper">
          <button className="field formButton" onClick={this.back}> Back </button> 
          <button className="field formButton" onClick={this.sendEmail}> Send </button>
          </div>
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
