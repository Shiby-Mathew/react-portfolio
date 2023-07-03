import React, { useState } from "react";
import "./styles/style.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitmessage, setsubmitmessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else setMessage(value);
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    setsubmitmessage("Thank you for submitting contact form");
    setName("");
    setEmail("");
    setMessage("");
    // setsubmitmessage("");
  };

  return (
    <div>
      <p className="contact">Contact Me</p>
      <hr />
      <form className="contactForm">
        <div className="form">
          <div className="form-group mb-4">
            <label className="label p-2">Name</label>
            <input
              className="input "
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-4">
            <label className="label p-2">Email Address</label>
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
            <label className="label">Message</label>
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
          class="btn btn-primary mt-4"
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
