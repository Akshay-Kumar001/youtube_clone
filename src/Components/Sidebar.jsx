import images from "../assets/image";
const Sidebar = ({ sidebar }) => {
  return (
    <div
      className={`bg-white  h-100vh fixed top-0 pt-20 pl-2.5 ${
        sidebar ? "w-[15%]" : "w-[5%] side-bar-small"
      }`}
    >
      <div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-5 mr-5" src={images.home} alt="" />{" "}
          <p className="leading-[20px]">Home</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-5 mr-5" src={images.game_icon} alt="" />{" "}
          <p className="leading-[20px]">Gaming</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-5 mr-5" src={images.automobiles} alt="" />{" "}
          <p className="leading-[20px]">Automobiles</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-5 mr-5" src={images.sports} alt="" />{" "}
          <p className="leading-[20px]">Sports</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-5 mr-5" src={images.entertainment} alt="" />{" "}
          <p className="leading-[20px]">Entertainment</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-5 mr-5" src={images.tech} alt="" />{" "}
          <p className="leading-[20px]">Technology</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-5 mr-5" src={images.music} alt="" />{" "}
          <p className="leading-[20px]">Music</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-5 mr-5" src={images.blogs} alt="" />{" "}
          <p className="leading-[20px]">Blogs</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-5 mr-5" src={images.news} alt="" />{" "}
          <p className="leading-[20px]">News</p>
        </div>
        <hr className="border-0 h-px bg-gray-400 w-5/6 " />
      </div>
      <div>
        <h3 className="text-xs my-5 mx-0 text-slate-600">Subscribed</h3>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-6 rounded-full mr-5" src={images.jack} alt="" />{" "}
          <p className="leading-[20px]">Jack</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-6 rounded-full mr-5" src={images.simon} alt="" />{" "}
          <p className="leading-[20px]">Simon</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-6 rounded-full mr-5" src={images.tom} alt="" />{" "}
          <p className="leading-[20px]">Tom</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-6 rounded-full mr-5" src={images.megan} alt="" />{" "}
          <p className="leading-[20px]">Megan</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer side-link">
          <img className="w-6 rounded-full mr-5" src={images.cameron} alt="" />{" "}
          <p className="leading-[20px]">Nas Daily</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
