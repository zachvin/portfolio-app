import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

const toRawReadmeUrl = (githubUrl) => {
  const match = githubUrl.match(/github\.com\/([^/]+\/[^/]+)/);
  if (!match) return null;
  return `https://raw.githubusercontent.com/${match[1]}/HEAD/README.md`;
};

const Project = ({ filePath, githubLink }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      if (githubLink) {
        const rawUrl = toRawReadmeUrl(githubLink);
        if (rawUrl) {
          try {
            const res = await fetch(rawUrl);
            if (res.ok) {
              setContent(await res.text());
              return;
            }
          } catch (err) {
            console.error("Error loading GitHub README:", err);
          }
        }
      }
      fetch(filePath)
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch((err) => console.error("Error loading markdown:", err));
    };
    fetchContent();
  }, [filePath, githubLink]);

  return <div className="markdown-body"><Markdown>{content}</Markdown></div>;
};

export default Project;
