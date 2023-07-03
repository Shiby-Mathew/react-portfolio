import React from "react";

import "./styles/style.css";

function Project({ project }) {
  return (
    <div>
      <div class="row">
        <div class="col-md-5 project-item mt-4 ">
          <a href={project.live}>
            <img
              class="img-responsive mt-4"
              src={require(`../assets/${project.image}.jpg`)}
              alt="Project"
            />
          </a>
          <h2>{project.title}</h2>
          {/* <h3>
       <a href="/{{city.id}}">{{city_name}}, {{state}}</a>
     </h3>  */}
          <p>{project.description}</p>
          <h4>Technologies Used</h4>

          <p>{project.languages}</p>
        </div>
      </div>
    </div>
  );
}
export default Project;
