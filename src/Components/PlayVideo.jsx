import React from "react";
import images from "../assets/image";
const PlayVideo = ({ videoId }) => {
  return (
    <div className="w-2/3">
      <iframe
        className="w-full h-[30vw]"
        src={`https://www.youtube.com/embed/${videoId}/?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3 className="mt-2.5 text-2xl font-semibold">test</h3>
      <div className="flex items-center justify-between flex-wrap mt-2.5 text-sm text-slate-600">
        <p>1525 Views &bull; 2 days ago</p>
        <div className="flex items-center gap-3.5">
          <span className="inline-flex items-center gap-2">
            <img className="w-5" src={images.like} alt="" />
            125
          </span>
          <span className="inline-flex items-center gap-2">
            <img className="w-5" src={images.like} alt="" />2
          </span>
          <span className="inline-flex items-center gap-2">
            <img className="w-5" src={images.share} alt="" />
            Share
          </span>
          <span className="inline-flex items-center gap-2">
            <img className="w-5" src={images.save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr className="border-0 h-px bg-gray-300 my-2.5" />
      <div className="flex items-center mt-5 gap-3.5">
        <img src={images.jack} alt="" className="w-10 rounded-full" />
        <div className="grow ">
          <p className="text-lg font-semibold text-black leading-4">
            GreatStack
          </p>
          <span className="text-xs text-slate-600 leading-3">
            1M Subscribers
          </span>
        </div>

        <button className="bg-red-600 text-white py-2 px-7 rounded-sm border-0 outline-0 cursor-pointer">
          Subscribe
        </button>
      </div>
      <div className="pl-14 my-3.5">
        <p className="text-sm text-slate-600 mb-1">
          Chanels thats make learning Easy
        </p>
        <p className="text-sm text-slate-600 mb-1">
          Subsribe gaimg to watch more gameing video.
        </p>
        <hr />
        <h4 className="text-sm text-slate-600 mt-1">130 Comments</h4>
        <div className="flex items-start my-5 mx-0 gap-3.5">
          <img className="w-8 rounded-full" src={images.user_profile} alt="" />
          <div>
            <h3 className="text-sm mb-0.5 ">
              Rakesh Kumar{" "}
              <span className="text-xs text-slate-600 font-semibold ml-2">
                1 Day Ago
              </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus asperiores natus odit ex doloremque, dolorem ducimus
              saepe et deleniti cumque!
            </p>
            <div className="flex item-center gap-1 my-2 mx-0 text-sm">
              <img className="w-5 rounded-0 " src={images.like} alt="" />
              <span className="mr-5 text-slate-600">244</span>
              <img className="w-5 rounded-0 " src={images.dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-start my-5 mx-0 gap-3.5">
          <img className="w-8 rounded-full" src={images.user_profile} alt="" />
          <div>
            <h3 className="text-sm mb-0.5 ">
              Rakesh Kumar{" "}
              <span className="text-xs text-slate-600 font-semibold ml-2">
                1 Day Ago
              </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus asperiores natus odit ex doloremque, dolorem ducimus
              saepe et deleniti cumque!
            </p>
            <div className="flex item-center gap-1 my-2 mx-0 text-sm">
              <img className="w-5 rounded-0 " src={images.like} alt="" />
              <span className="mr-5 text-slate-600">244</span>
              <img className="w-5 rounded-0 " src={images.dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="flex items-start my-5 mx-0 gap-3.5">
          <img className="w-8 rounded-full" src={images.user_profile} alt="" />
          <div>
            <h3 className="text-sm mb-0.5 ">
              Rakesh Kumar{" "}
              <span className="text-xs text-slate-600 font-semibold ml-2">
                1 Day Ago
              </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus asperiores natus odit ex doloremque, dolorem ducimus
              saepe et deleniti cumque!
            </p>
            <div className="flex item-center gap-1 my-2 mx-0 text-sm">
              <img className="w-5 rounded-0 " src={images.like} alt="" />
              <span className="mr-5 text-slate-600">244</span>
              <img className="w-5 rounded-0 " src={images.dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
