import React from "react";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";

const Home = ({ sidebar }) => {
  return (
    <div>
      <Sidebar sidebar={sidebar} />
      <div className={`pr-8 ${sidebar ? "pl-[17%]" : "pl-[7%]"}`}>
        <Feed />
      </div>
    </div>
  );
};

export default Home;
