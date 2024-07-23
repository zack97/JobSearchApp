import React from "react";
import "../css/Sidebar.css";

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
          <img src="assets/profile-1.png" alt="profile" />
          <a href="#">Alex.Talent</a>
          <p>Graphic Designer</p>
        </div>
        <div className="skills">
          <h5>Skills and Expertise</h5>
          <div className="skill-tags">
            <div className="item">
              <p>Graphic Designer</p>
            </div>
            <div className="item">
              <p>Illustrator</p>
            </div>
            <div className="item">
              <p>Photoshop</p>
            </div>
            <div className="item">
              <p>HTML/CSS</p>
            </div>
          </div>
        </div>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Sidebar;
