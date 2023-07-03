import React from "react";
import "./styles/style.css";

function Project({ project }) {
  return (
    <divu>
      <a class="" href={project.repo} target="#">
        <div>
          <h3 class="work-title">{project.title}</h3>
        </div>
      </a>
      <a href={project.live}>
        <img
          alt={project.title}
          src={require(`../images/${project.image}.jpg`)}
        />
      </a>
      <div>
        <p className="">{project.description}</p>
      </div>
      <div>
        <p>Technologies Used</p>
        <p className="">{project.languages}</p>
      </div>

      {/* <img className="content">{project.image}</img> */}
    </divu>
  );
}
export default Project;
