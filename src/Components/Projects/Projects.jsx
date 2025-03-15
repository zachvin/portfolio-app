import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  const { projectId } = useParams();
  const filePath = `/projects/${projectId}.md`;
  const history = useNavigate();

  // go to home page
  const buttonHandler = () => {
    history("/");
  };

  return (
    <>
      <button className="project-back" onClick={buttonHandler}>
        Go back
      </button>
      <div className="project-page">
        <h1 className="project-title">{projectId} project</h1>
        <Project filePath={filePath} />
      </div>
    </>
  );
};

export default Projects;
