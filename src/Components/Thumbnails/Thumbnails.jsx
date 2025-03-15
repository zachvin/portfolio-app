import React from "react";
import Thumbnail from "./Thumbnail.jsx";
import data from "/public/project-data.json";

import "./Thumbnail.css";

const Thumbnails = () => {
  return (
    <div className="thumbnails">
      {Object.entries(data).map(([name, project]) => (
        <Thumbnail key={name} name={name} project={project} />
      ))}
    </div>
  );
};

export default Thumbnails;
