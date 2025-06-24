import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Video from "./Pages/Video.jsx";
import { useState } from "react";
function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:category/:videoId" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
