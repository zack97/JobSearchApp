import React from "react";
import "../css/Sidebar.css";
import zackimage from "../assets/zackimagenoir.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="#">Works</a>
      <div className="side-nav">
        <div className="item active">
          <i className="bx bx-search-alt"></i>
          <a href="#">Home</a>
        </div>
        <div className="item">
          <i className="bx bx-message-square-dots"></i>
          <a href="#">Notifications</a>
        </div>
        <div className="item">
          <i className="bx bx-briefcase"></i>
          <a href="#">My Apps</a>
        </div>
        <div className="item">
          <i className="bx bx-bookmark-minus"></i>
          <a href="#">Saved Jobs</a>
        </div>
        <div className="item">
          <i className="bx bx-cog"></i>
          <a href="#">Settings</a>
        </div>
      </div>
      <div className="side-profile">
        <div className="info">
          <img src={zackimage} alt="profile" />
          <a href="#">ZackProg</a>
          <p>Software Developer</p>
        </div>

        <button>
          <a href="https://zackportfolio.netlify.app/" className="a-white">
            View Profile
          </a>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
