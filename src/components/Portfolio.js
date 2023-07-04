import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "SpaceLink",
    languages: "HTML, JavaScript, jQuery, Bootstrap",
    image: "pic2",
    description:
      "This website serves as the ultimate SpaceX launch dashboard, providing you with the most up-to-date and comprehensive information about all things SpaceX",
    repo: "https://github.com/Shiby-Mathew/Cityreviewr",
    live: "https://maxkeable.github.io/SpaceLink/",
  },
  {
    id: 1,
    title: "Cityreviewr",
    languages: "Express-handlebars, Express.js, Node.js, Sequelize, MySQL",
    image: "pic1",
    description:
      "This website is the ultimate platform for city explorers, traveller seeking authentic experiences or a local wanting to share your insights, CityReviewr is your go-to web app.",
    repo: "https://github.com/Shiby-Mathew/Cityreviewr",
    live: "https://cityreviwr.herokuapp.com",
  },
  {
    id: 2,
    title: "Weather-Dashboard",
    languages: "HTML, JavaScript, Bootstrap, OpenWeather API",
    image: "pic3",
    description:
      "This application allows user to search for a city to get the current weather and 5-day forecast. It will display city name, date, an icon representation of weather conditions, temperature, humidity, wind speed.",
    repo: "https://github.com/Shiby-Mathew/Weather-Dashboard",
    live: "https://shiby-mathew.github.io/Weather-Dashboard/",
  },
  {
    id: 3,
    title: "Note Taker",
    languages: "Node.js, Express.js, HTML, CSS, JavaScript",
    image: "pic4",
    description:
      "This application called Note Taker that can be used to write and save notes.This application uses Express.js as a back-end, save and retrieve note data from a JSON file.",
    repo: "https://github.com/Shiby-Mathew/Note-taker",
    live: "https://shiby-note-taker-app.herokuapp.com/",
  },
  {
    id: 4,
    title: "Interview-Quiz",
    languages: "JavaScript, HTML,CSS",
    image: "pic5",
    description:
      "This application is a timed coding quiz with multiple-choice questions.This app will run in the browser and it features dynamically updated HTML along with CSS powered by JavaScript code. ",
    repo: "https://github.com/Shiby-Mathew/Interview-Quiz",
    live: "https://shiby-mathew.github.io/Interview-Quiz/",
  },
  {
    id: 5,
    title: "Password Generator",
    languages: "HTML, JavaScript, CSS",
    image: "pic6",
    description:
      "This application enables users to generate random passwords based on the criteria selected by user.This app will run in the browser and it will feature dynamically updated HTML along with CSS powered by JavaScript code.",
    repo: "https://github.com/Shiby-Mathew/Password-Generator",
    live: "https://shiby-mathew.github.io/Password-Generator/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="contact">Portfolio</p>
      {projects.map((project, index) => (
        <Project project={project} key={index} />
      ))}
    </div>
  );
}
export default Portfolio;
