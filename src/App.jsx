import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/video/:category/:videoId" element={<Video/>} />
      </Routes>
    </>
  );
}

export default App;
