import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Contact = () => {
  const history = useNavigate();

  const buttonHandler = () => {
    history("/");
  };

  return (
    <>
      <button className="project-back" onClick={buttonHandler}>
        Go back
      </button>
      <h1>This page is still under construction.</h1>
    </>
  );
};

export default Contact;
