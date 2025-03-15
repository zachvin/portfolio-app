import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

const Project = ({ filePath }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Error loading markdown:", err));
  }, [filePath]);

  return <Markdown>{content}</Markdown>;
};

export default Project;
