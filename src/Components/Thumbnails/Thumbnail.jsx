import React from "react";

const Thumbnail = ({ project }) => {
  return (
    <div className="thumbnail">
      <h1 className="roboto-serif-light">{project.title}</h1>
      <h2 className="poppins-medium">{project.subtitle}</h2>
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
    </div>
  );
};

export default Thumbnail;
