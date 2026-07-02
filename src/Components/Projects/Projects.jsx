import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Project from "./Project";
import projectData from "../../project-data.json";
import githubIcon from "../../assets/github.svg";
import "./Projects.css";

const Projects = () => {
  const { projectId } = useParams();
  const filePath = `/projects/${projectId}.md`;
  const history = useNavigate();
  const project = projectData[projectId];
  const githubLink = project?.link || null;

  const buttonHandler = () => {
    history("/");
  };

  return (
    <>
      <button className="project-back" onClick={buttonHandler}>
        Go back
      </button>
      <div className="project-page">
        <h1 className="project-title">{project?.title || projectId}</h1>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" className="project-github-link">
            <img src={githubIcon} alt="" />
            See on GitHub
          </a>
        )}
        <Project filePath={filePath} githubLink={githubLink} />
      </div>
    </>
  );
};

export default Projects;
