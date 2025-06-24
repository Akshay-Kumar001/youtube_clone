import React from "react";
import { Link } from "react-router-dom";
import videoData from "../assets/videoData";
import images from "../assets/image";
const Feed = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videoData.map((card, index) => (
        <Link
          to={`video/20/2020`}
          key={index}
          className="bg-white overflow-hidden inline-block"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover rounded-xl"
          />
          <div className=" py-2">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <h3 className="text-sm text-gray-600">{card.channel}</h3>
            <p className="text-sm text-gray-500">{card.timestamp}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
