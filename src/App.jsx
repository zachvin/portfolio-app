import { useState } from "react";
import Thumbnails from "./Components/Thumbnails/Thumbnails.jsx";
import Nav from "./Components/Nav/Nav.jsx";
import Header from "./Components/Header/Header.jsx";

import "./App.css";
import "./Components/Thumbnails/Thumbnail.css";
import "./Components/Header/Header.css";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Thumbnails />
    </>
  );
}

export default App;
