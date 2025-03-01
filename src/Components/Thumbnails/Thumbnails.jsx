import React from "react";
import { useEffect, useState } from "react";
import Thumbnail from "./Thumbnail.jsx";
import data from "../../project-data.json";

const Thumbnails = () => {
  //   const [thumbnails, setThumbnails] = useState([]);

  //   const thumbnailClicked = () => {
  //     // do something?
  //     alert("clicked!");
  //   };

  //   useEffect(() => {
  //     getThumbnails().then((thumbnails) => {
  //       setThumbnails(thumbnails);
  //     });
  //   }, []);

  return (
    <div className="thumbnails">
      {Object.entries(data).map(([key, project]) => (
        <Thumbnail project={project} />
      ))}
    </div>
  );
};

export default Thumbnails;
