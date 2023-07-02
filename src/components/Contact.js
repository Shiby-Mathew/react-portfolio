import React from "react";
import "./styles/contact.css";

function Contact() {
  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    // return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // // Alert the user their first and last name, clear the inputs
    // alert(`Hello ${firstName} ${lastName}`);
    // setFirstName('');
    // setLastName('');
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
              // value={name}
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
              // value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <label className="label p-2 ">Message</label>
            <textarea
              className="textarea"
              // value={message}
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
    </div>
  );
}
export default Contact;
