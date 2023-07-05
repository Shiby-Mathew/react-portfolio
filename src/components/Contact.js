import React, { useState } from "react";
import { validateEmail } from "../utils/helper";

import "./styles/style.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitmessage, setsubmitmessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "name") {
      setName(value);
    } else setMessage(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const valCheck = validateEmail(email);
    if (!name) {
      setsubmitmessage("Please enter the name");
    } else if (!email) {
      setsubmitmessage("Please enter the email");
    } else if (!valCheck) {
      setsubmitmessage("Please enter a valid email");
    } else if (!message) {
      setsubmitmessage("Please enter a message");
    } else {
      setsubmitmessage("Thank you for submitting contact form");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      <p className="contact">Contact Me</p>
      <hr />
      <form className="contactForm p-4">
        <div className="form">
          <div className="form-group mb-2">
            <label className="label p-2">Name :</label>
            <input
              className="input "
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-2">
            <label className="label p-2">Email Address :</label>
            <input
              className="input"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <label className="label p-2">Message :</label>
            <textarea
              className="textarea"
              value={message}
              name="message"
              onChange={handleInputChange}
              rows="5"
              placeholder="Message"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-4"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      <p>{submitmessage}</p>
    </div>
  );
}
export default Contact;
