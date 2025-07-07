import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../data";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchVideos = async () => {
    const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&videoCategoryId=${category}&maxResults=50&key=${API_KEY}`;

    try {
      console.log("Fetching from URL:", videoList_url);
      const response = await fetch(videoList_url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("API Response (Parsed JSON):", result);
      setData(result.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [category]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((card, index) => (
        <Link
          to={`video/${card.snippet.categoryId}/${card.id}`}
          key={index}
          className="bg-white overflow-hidden inline-block rounded-xl shadow"
        >
          <img
            src={card.snippet?.thumbnails?.high?.url}
            alt={card.snippet?.title}
            className="w-full h-48 object-cover rounded-xl"
          />
          <div className="p-3">
            <h2 className="text-lg font-semibold line-clamp-2">
              {card.snippet?.title}
            </h2>
            <h3 className="text-sm text-gray-600">
              {card.snippet?.channelTitle}
            </h3>
            <p className="text-sm text-gray-500 ">
                {value_converter(card.statistics?.viewCount)} Views &bull; {moment(card.snippet.publishedAt).fromNow()}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
