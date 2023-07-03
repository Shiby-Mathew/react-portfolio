import React, { useState } from "react";
import Project from "./Project";

function Portfolio() {
  const projects = [
    {
      id: 0,
      title: "SpaceLink",
      languages: "HTML, JavaScript, jQuery, Bootstrap",
      API: "SpaceX API,Globe API",
      image: "pic2",
      description:
        "This website serves as the ultimate SpaceX launch dashboard, providing you with the most up-to-date and comprehensive information about all things SpaceX",
      repo: "https://github.com/Shiby-Mathew/Cityreviewr",
      live: "https://maxkeable.github.io/SpaceLink/",
    },
    {
      id: 1,
      title: "Cityreviewr",
      languages: "HTML, JavaScript, jQuery, Bootstrap",
      Packages: "",
      image: "pic2",
      description:
        "This website serves as the ultimate SpaceX launch dashboard, providing you with the most up-to-date and comprehensive information about all things SpaceX",
      repo: "https://github.com/Shiby-Mathew/SpaceLink",
      live: "https://maxkeable.github.io/SpaceLink/",
    },
    {
      id: 3,
      title: "Weather-Dashboard",
      languages: "HTML, JavaScript, jQuery, Bootstrap",
      Packages: "",
      image: "pic2",
      description:
        "This website serves as the ultimate SpaceX launch dashboard, providing you with the most up-to-date and comprehensive information about all things SpaceX",
      repo: "https://github.com/Shiby-Mathew/Weather-Dashboard",
      live: "https://shiby-mathew.github.io/Weather-Dashboard/",
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </div>
  );
}
export default Portfolio;
