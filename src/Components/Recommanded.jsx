import React from "react";
import images from "../assets/image";
const Recommanded = () => {
  return (
    <div className="w-1/3">
      <div className="flex justify-between mb-2 gap-3">
        <img src={images.thumbnail1} alt="" className="w-1/2 rounded-sm" />
        <div className="w-1/2">
          <h4 className="text-base mb-1 font-medium">
            Learn react js with me Lorem ipsum, dolor sit amet{" "}
          </h4>
          <p className="text-sm mb-0.5">Good learner</p>
          <p className="text-sm mb-0.5">200K Views</p>
        </div>
      </div>
    </div>
  );
};

export default Recommanded;
