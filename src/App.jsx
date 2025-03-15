import Nav from "./Components/Shared/Nav/Nav.jsx";
import Home from "./Components/Home/Home.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects/:projectId" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
