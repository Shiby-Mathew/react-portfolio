import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./styles/style.css";
// Footer Section

function Footer() {
  return (
    <div>
      <footer className="footer">
        {/* Icons from fa-icons */}
        <address>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin style={{ color: "black", fontSize: "26px" }} />
          </a>
          <a href="mailto:name@gmail.com" target="_blank" rel="noreferrer">
            <span style={{ textDecoration: "none", color: "black" }}>
              {" "}
              Email
            </span>
          </a>
          <a
            href="https://github.com/Shiby-Mathew/react-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={{ color: "black", fontSize: "26px" }} />
          </a>
        </address>
      </footer>
    </div>
  );
}

export default Footer;
