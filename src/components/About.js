import React from "react";
import image from "../images/pic2.jpg";

function About() {
  return (
    <div>
      <p className="content is-medium">
        FrontEnd Developer/Full Stack Developer
      </p>

      <img src={image} className="image p-4" alt="mypic" />
      {/* <img src="./assets/images/pic2.jpg" alt="myphoto" /> */}
      <p className="content is-italic mt-4 p-4">
        I'm Shiby, currently doing Bootcamp to get better job, as a Full Stack
        Developer
      </p>
      <p className="content">
        This is Project Page Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Praesent et massa quis libero mattis consectetur. Praesent ex
        urna, ultrices vel.This is Project Page Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent et massa quis libero mattis
        consectetur. Praesent ex urna, ultrices vel
      </p>
    </div>
  );
}

export default About;
