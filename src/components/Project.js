import React from "react";

const projects = [
  {
    id: 0,
    title: "SpaceLink",
    languages: "HTML, JavaScript, jQuery, Bootstrap",
    API: "SpaceX API,Globe API",
    image: "../images/pic2.jpg",
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
    image: "../images/pic2.jpg",
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
    image: "../images/pic2.jpg",
    description:
      "This website serves as the ultimate SpaceX launch dashboard, providing you with the most up-to-date and comprehensive information about all things SpaceX",
    repo: "https://github.com/Shiby-Mathew/Weather-Dashboard",
    live: "https://shiby-mathew.github.io/Weather-Dashboard/",
  },
];

function Project() {
  return (
    <div>
      <p className="content is-medium">Full Stack Developer</p>
      <hr />

      <p className="content is-italic mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
        massa quis libero mattis consectetur.
      </p>
      <p className="content">
        This is Project Page Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Praesent et massa quis libero mattis consectetur. Praesent ex
        urna, ultrices vel
      </p>
    </div>
  );
}
export default Project;
