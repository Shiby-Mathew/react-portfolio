import React from "react";

import "./styles/style.css";

function Project({ project }) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 project-item ">
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
    </div>
  );
}
export default Project;
