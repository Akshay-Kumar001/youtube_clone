import React from "react";

const PlayVideo = () => {
  return (
    <div>
      <video src={images.video} controls autoPlay muted></video>
      <h3>test</h3>
      <div>
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={images.like} alt="" />
            125
          </span>
          <span>
            <img src={images.like} alt="" />2
          </span>
          <span>
            <img src={images.share} alt="" />
            Share
          </span>
          <span>
            <img src={images.save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div>
        <img src={images.jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>

        <button>Subscribe</button>
      </div>
      <div>
        <p>Chanels thats make learning Easy</p>
        <p>
            Subsribe gaimg to watch more gameing video.
        </p>
        <hr />
        <h4>130 Comments</h4>
      </div>
    </div>
  );
};

export default PlayVideo;
