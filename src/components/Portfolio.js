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
      "This application allows user to search for a city to get the current weather and 5-day forecast. It will display city name, date, an icon representation of weather conditions, temperature, humidity, wind speed. Cities that user previously looked up will be saved in their local storage. Recently viewed city name is shown in the dashboard and a button to clear local storage data.",
    repo: "https://github.com/Shiby-Mathew/Weather-Dashboard",
    live: "https://shiby-mathew.github.io/Weather-Dashboard/",
  },
  {
    id: 3,
    title: "Note Taker",
    languages: "",
    image: "pic4",
    description:
      "This application allows user to search for a city to get the current weather and 5-day forecast. It will display city name, date, an icon representation of weather conditions, temperature, humidity, wind speed. Cities that user previously looked up will be saved in their local storage. Recently viewed city name is shown in the dashboard and a button to clear local storage data.",
    repo: "https://github.com/Shiby-Mathew/Weather-Dashboard",
    live: "https://shiby-mathew.github.io/Weather-Dashboard/",
  },
  {
    id: 4,
    title: "Employee Tracker",
    languages: "MySQL",
    image: "pic5",
    description:
      "This application allows user to search for a city to get the current weather and 5-day forecast. It will display city name, date, an icon representation of weather conditions, temperature, humidity, wind speed. Cities that user previously looked up will be saved in their local storage. Recently viewed city name is shown in the dashboard and a button to clear local storage data.",
    repo: "https://github.com/Shiby-Mathew/Weather-Dashboard",
    live: "https://shiby-mathew.github.io/Weather-Dashboard/",
  },
  {
    id: 5,
    title: "Password Generator",
    languages: "HTML, JavaScript,CSS",
    image: "pic6",
    description:
      "This application allows user to search for a city to get the current weather and 5-day forecast. It will display city name, date, an icon representation of weather conditions, temperature, humidity, wind speed. Cities that user previously looked up will be saved in their local storage. Recently viewed city name is shown in the dashboard and a button to clear local storage data.",
    repo: "https://github.com/Shiby-Mathew/Weather-Dashboard",
    live: "https://shiby-mathew.github.io/Weather-Dashboard/",
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
