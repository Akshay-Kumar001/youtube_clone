import React from "react";
import images from "../assets/image";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex items-center justify-between sticky top-0 p-2.5 bg-white  shadow-2xs z-10">
      <div className="flex items-center">
        <img
          className="cursor-pointer w-5 mr-5"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={images.menu}
          alt=""
        />
        <Link to="/">
          <img className="cursor-pointer w-32" src={images.logo} alt="" />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-between border rounded-3xl border-gray-300 mr-6 px-3 py-2 w-100">
          <input className="outline-0" type="text" placeholder="search" />
          <img className="w-3.5" src={images.search} alt="" />
        </div>
      </div>

      <div className="flex items-center">
        <img className="cursor-pointer w-6 mr-6" src={images.upload} alt="" />
        <img className="cursor-pointer w-6 mr-6" src={images.more} alt="" />
        <img
          className="cursor-pointer w-6 mr-6"
          src={images.notification}
          alt=""
        />
        <img
          className="cursor-pointer w-9 mr-6 rounded-full"
          src={images.jack}
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
