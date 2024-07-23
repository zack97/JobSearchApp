import React from "react";
import "../css/Filters.css";

const Filters = () => {
  return (
    <div className="filters">
      <div className="header">
        <h3>Job Filter</h3>
        <a href="#">Clear all</a>
      </div>
      <div className="item">
        <div className="title">
          <h4>Time</h4>
          <a href="#">Clear</a>
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" name="today" />
            <label htmlFor="today">Just Now</label>
          </div>
          <p>50 Jobs</p>
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" name="week" />
            <label htmlFor="week">Weekly</label>
          </div>
          <p>150 Jobs</p>
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" name="month" />
            <label htmlFor="month">Monthly</label>
          </div>
          <p>200 Jobs</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <h4>Experience</h4>
          <a href="#">Clear</a>
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" name="trainer" />
            <label htmlFor="trainer">Entry</label>
          </div>
          <p>50 Jobs</p>
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" name="junior" />
            <label htmlFor="junior">Junior</label>
          </div>
          <p>100 Jobs</p>
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" name="middle" />
            <label htmlFor="middle">Middle</label>
          </div>
          <p>100 Jobs</p>
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" name="senior" />
            <label htmlFor="senior">Senior</label>
          </div>
          <p>50 Jobs</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <h4>Job Type</h4>
          <a href="#">Clear</a>
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" name="full" />
            <label htmlFor="full">Full Time</label>
          </div>
          <p>100 Jobs</p>
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" name="part" />
            <label htmlFor="part">Part Time</label>
          </div>
          <p>50 Jobs</p>
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" name="freelance" />
            <label htmlFor="freelance">Contract</label>
          </div>
          <p>50 Jobs</p>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <h4>Job Location</h4>
          <a href="#">Clear</a>
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" name="site" />
            <label htmlFor="site">On Site</label>
          </div>
          <p>100 Jobs</p>
        </div>
        <div className="location">
          <i className="bx bxs-location-plus"></i>
          <input type="text" placeholder="Search location" />
        </div>
        <div className="checkbox">
          <div>
            <input type="checkbox" name="remote" />
            <label htmlFor="remote">Remote</label>
          </div>
          <p>50 Jobs</p>
        </div>
      </div>
    </div>
  );
};

export default Filters;
