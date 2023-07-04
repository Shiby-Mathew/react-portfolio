import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import "./styles/style.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <address>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin style={{ fontSize: "30px" }} />
          </a>
          <a href="mailto:name@gmail.com" target="_blank" rel="noreferrer">
            Email
          </a>
          <a
            href="https://github.com/Shiby-Mathew/react-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={{ color: "black", fontSize: "30px" }} />
          </a>
        </address>
      </footer>
    </div>
  );
}

export default Footer;
