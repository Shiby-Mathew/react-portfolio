import React from "react";
import image from "../assets/shiby.jpg";

// About Section"
function About() {
  return (
    <div>
      <p className="contact is-medium">About Me</p>
      <img src={image} className="image p-3" alt="mypic" />

      <p className="content is-italic mt-4 p-4">
        I'm Shiby, recently graduated Bootcamp (Full Stack Web Development) from
        University of Sydney
      </p>
      <p className="content">
        A junior full stack developer with a proven ability to adapt in both
        self-starting and collaborative environments while staying focused on
        achieving high-quality results under strict deadlines. Eager to obtain a
        challenging position that will expand my learning and build upon my
        developer skills.
      </p>
    </div>
  );
}

export default About;
