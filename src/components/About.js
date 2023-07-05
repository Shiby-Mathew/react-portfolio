import React from "react";
import image from "../assets/img.png";

function About() {
  return (
    <div>
      <p className="contact is-medium">About Me</p>
      <img src={image} className="image p-3" alt="mypic" />

      <p className="content is-italic mt-4 p-4">
        I'm Shiby, currently doing Bootcamp to make a carrier change, as a Full
        Stack Developer
      </p>
      <p className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
        massa quis libero mattis consectetur. Praesent ex urna, ultrices
        vel.This is Project Page Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent et massa quis libero mattis consectetur.
        Praesent ex urna, ultrices vel. Praesent et massa quis libero mattis
        consectetur. Praesent ex urna, ultrices vel.This is Project Page Lorem
        ipsum dolor sit amet
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
        massa quis libero mattis consectetur. libero mattis consectetur.
        Praesent ex urna, ultrices vel.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent et massa quis libero mattis consectetur.
        libero mattis consectetur. Praesent ex urna, ultrices vel.Lorem ipsum
        dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
  );
}

export default About;
