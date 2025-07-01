import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";

const Home = ({ sidebar }) => {

  const [category, setCategory] = useState(0);
  return (
    <div>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
      <div className={`pr-8 ${sidebar ? "pl-[17%]" : "pl-[7%]"}`}>
        <Feed category={category}/>
      </div>
    </div>
  );
};

export default Home;
