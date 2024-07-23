import React from "react";
import "../css/JobCards.css";

const JobCards = ({ jobList }) => {
  return (
    <div className="content">
      <div className="header">
        <h4>
          Opportunities matching your skills <span>{jobList.length}</span>
        </h4>
        <p>Here are jobs that fit your skill set</p>
      </div>

      <div className="job-cards">
        {jobList.map((job, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <div className="job-info">
                <i className={job.icon}></i>
                <div>
                  <h5>
                    {job.company} <span>| {job.time}</span>
                  </h5>
                  <a href="#">{job.position}</a>
                  <p>{job.location}</p>
                </div>
              </div>
              <i className="bx bx-bookmark-plus"></i>
            </div>
            <div className="card-tags">
              {job.tags.map((tag, index) => (
                <a href="#" key={index}>
                  {tag}
                </a>
              ))}
            </div>
            <div className="card-desc">{job.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCards;
