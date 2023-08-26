import React from "react";
import Project from "./Project";

// Portfolio Section

const projects = [
  {
    id: 0,
    title: "eCommerceRevolve",
    languages: "REACT, MongoDB, Node.js, Express.js, GraphQL, ApolloServer",
    image: "pic",
    description:
      "This website is the ultimate hub for sharing captivating stories and reviews in the world of Australian e-commerce. This platform is dedicated to showcasing the customer journey, with a focus on shipping period, user locations, and the value range of orders",
    repo: "https://github.com/Shiby-Mathew/EcomRevolve",
    live: "https://ecommercerevolve-app-5084df896f21.herokuapp.com/",
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
    title: "SpaceLink",
    languages: "HTML, JavaScript, jQuery, Bootstrap",
    image: "pic2",
    description:
      "This website serves as the ultimate SpaceX launch dashboard, providing you with the most up-to-date and comprehensive information about all things SpaceX",
    repo: "https://github.com/Shiby-Mathew/Cityreviewr",
    live: "https://maxkeable.github.io/SpaceLink/",
  },

  {
    id: 3,
    title: "Weather-Dashboard",
    languages: "HTML, JavaScript, Bootstrap, OpenWeather API",
    image: "pic3",
    description:
      "This application allows user to search for a city to get the current weather and 5-day forecast. It will display city name, date, an icon representation of weather conditions, temperature, humidity, wind speed.",
    repo: "https://github.com/Shiby-Mathew/Weather-Dashboard",
    live: "https://shiby-mathew.github.io/Weather-Dashboard/",
  },
  {
    id: 4,
    title: "Note Taker",
    languages: "Node.js, Express.js, HTML, CSS, JavaScript",
    image: "pic4",
    description:
      "This application called Note Taker that can be used to write and save notes.This application uses Express.js as a back-end, save and retrieve note data from a JSON file.",
    repo: "https://github.com/Shiby-Mathew/Note-taker",
    live: "https://shiby-note-taker-app.herokuapp.com/",
  },
  {
    id: 5,
    title: "Interview-Quiz",
    languages: "JavaScript, HTML,CSS",
    image: "pic5",
    description:
      "This application is a timed coding quiz with multiple-choice questions.This app will run in the browser and it features dynamically updated HTML along with CSS powered by JavaScript code. ",
    repo: "https://github.com/Shiby-Mathew/Interview-Quiz",
    live: "https://shiby-mathew.github.io/Interview-Quiz/",
  },
];

function Portfolio() {
  return (
    <div className="portfolioCards">
      <p className="contact">Portfolio</p>
      <div className="portfolio-card">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
