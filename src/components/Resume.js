import React from "react";

function Resume() {
  return (
    <div>
      <p className="contact is-medium">Resume</p>

      <div className="header__buttons">
        <a href="../assets/Shiby-Resume.pdf" download>
          Download my Resume
        </a>
      </div>

      <div className="column">
        <p className="content is-medium mt-5">Front-End Skills</p>
        <hr />
        <ul>
          <li>HTML, CSS, Javascript</li>
          <li>Bootstrap, jQuery</li>
          <li>React, MERN</li>
          <li>Github, Heroku</li>
        </ul>
      </div>
      <div className="column">
        <p className="content is-medium mt-5">Back-End Skills</p>
        <hr />
        <ul>
          <li>Node.js, Express.js</li>
          <li>SQL, ORM</li>
          <li>MongoDB, Mongoose</li>
          <li>Github, Heroku</li>
        </ul>
      </div>
    </div>
  );
}
export default Resume;
