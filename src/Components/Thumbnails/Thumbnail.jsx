import React from "react";
import { Link } from "react-router-dom";

const Thumbnail = ({ name, project }) => {
  const Element = ["about", "contact"].includes(name) ? "div" : Link; // Select Link or div
  const props = ["about", "contact"].includes(name)
    ? {}
    : { to: `/projects/${name}` };

  return (
    <Element
      className={`thumbnail ${name} ${
        !["about", "contact"].includes(name) ? "project" : "info"
      }`}
      {...props}
    >
      <h1 className="roboto-serif-light">{project.title}</h1>
      <h2 className="poppins-medium">{project.subtitle}</h2>
      {["about", "contact"].includes(name) && (
        <a href={name} className="roboto-serif-light">
          See more
        </a>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="24"
        height="24"
        strokeWidth="2"
      >
        <path d="M7 7l10 10"></path>
        <path d="M17 8l0 9l-9 0"></path>
      </svg>
    </Element>
  );
};

export default Thumbnail;
