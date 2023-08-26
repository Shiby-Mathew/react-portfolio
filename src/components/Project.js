import React from "react";

import "./styles/style.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

function Project({ project }) {
  return (
    <div>
      <div className="header-row">
        <a href={project.live} target="_blank" rel="noreferrer">
          <img
            className="img-responsive"
            src={require(`../assets/${project.image}.PNG`)}
            alt="Project"
          />
        </a>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <h4>Technologies Used</h4>
        <p>{project.languages}</p>
        <p>
          <a href={project.repo} target="_blank" rel="noreferrer">
            See the Repo!
          </a>
        </p>
        <p>
          {" "}
          <a href={project.live} target="_blank" rel="noreferrer">
            See the Live Application!
          </a>
        </p>
      </div>
    </div>
  );
}
export default Project;
