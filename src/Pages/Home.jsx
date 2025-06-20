import React from "react";
import Sidebar from "../Components/Sidebar";

const Home = ({ sidebar }) => {
  return (
    <div>
      <Sidebar sidebar={sidebar} />
    </div>
  );
};

export default Home;
