import React from "react";

function Resume() {
  return (
    <div>
      <p className="contact is-medium">Resume</p>

      <div className="header__buttons">
        <a href="./Shiby-Resume.pdf" download>
          Download my Resume
        </a>
      </div>

      <div className="column">
        <p className="skill mt-5">Front-End Skills</p>
        <hr />
        <ul>
          <li>HTML, CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Bootstrap, jQuery</li>
          <li>REST API</li>
          <li>React</li>
          <li>Github, Heroku</li>
        </ul>
      </div>
      <div className="column">
        <p className="skill mt-5">Back-End Skills</p>
        <hr />
        <ul>
          <li>Node.js, Express.js, GraphQL</li>
          <li>SQL, ORM</li>
          <li>MongoDB, Mongoose</li>
          <li>MERN</li>
          <li>Github, Heroku</li>
        </ul>
      </div>
    </div>
  );
}
export default Resume;
