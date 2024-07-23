// import React from "react";
// import "../css/Filters.css";

// const Filters = ({
//   filters,
//   onFilterChange,
//   onClearFilter,
//   onClearAllFilters,
//   applyFilters,
// }) => {
//   return (
//     <div className="filters">
//       <div className="header">
//         <h3>Job Filter</h3>
//         <a href="#" onClick={onClearAllFilters}>
//           Clear all
//         </a>
//       </div>
//       <div className="item">
//         <div className="title">
//           <h4>Time</h4>
//           <a href="#" onClick={() => onClearFilter("time")}>
//             Clear
//           </a>
//         </div>
//         <div className="checkbox">
//           <div>
//             <input
//               type="checkbox"
//               name="today"
//               checked={filters.time.includes("today")}
//               onChange={() => onFilterChange("time", "today")}
//             />
//             <label htmlFor="today">Just Now</label>
//           </div>
//           <p>50 Jobs</p>
//         </div>
//         <div className="checkbox">
//           <div>
//             <input
//               type="checkbox"
//               name="week"
//               checked={filters.time.includes("week")}
//               onChange={() => onFilterChange("time", "week")}
//             />
//             <label htmlFor="week">Weekly</label>
//           </div>
//           <p>150 Jobs</p>
//         </div>
//         <div className="checkbox">
//           <div>
//             <input
//               type="checkbox"
//               name="month"
//               checked={filters.time.includes("month")}
//               onChange={() => onFilterChange("time", "month")}
//             />
//             <label htmlFor="month">Monthly</label>
//           </div>
//           <p>200 Jobs</p>
//         </div>
//       </div>
//       <div className="item">
//         <div className="title">
//           <h4>Experience</h4>
//           <a href="#" onClick={() => onClearFilter("experience")}>
//             Clear
//           </a>
//         </div>
//         <div className="checkbox">
//           <div>
//             <input
//               type="checkbox"
//               name="entry"
//               checked={filters.experience.includes("entry")}
//               onChange={() => onFilterChange("experience", "entry")}
//             />
//             <label htmlFor="entry">Entry</label>
//           </div>
//           <p>50 Jobs</p>
//         </div>
//         <div className="checkbox">
//           <div>
//             <input
//               type="checkbox"
//               name="junior"
//               checked={filters.experience.includes("junior")}
//               onChange={() => onFilterChange("experience", "junior")}
//             />
//             <label htmlFor="junior">Junior</label>
//           </div>
//           <p>100 Jobs</p>
//         </div>
//         <div className="checkbox">
//           <div>
//             <input
//               type="checkbox"
//               name="middle"
//               checked={filters.experience.includes("middle")}
//               onChange={() => onFilterChange("experience", "middle")}
//             />
//             <label htmlFor="middle">Middle</label>
//           </div>
//           <p>100 Jobs</p>
//         </div>
//         <div className="checkbox">
//           <div>
//             <input
//               type="checkbox"
//               name="senior"
//               checked={filters.experience.includes("senior")}
//               onChange={() => onFilterChange("experience", "senior")}
//             />
//             <label htmlFor="senior">Senior</label>
//           </div>
//           <p>50 Jobs</p>
//         </div>
//       </div>
//       <div className="item">
//         <div className="title">
//           <h4>Job Type</h4>
//           <a href="#" onClick={() => onClearFilter("jobType")}>
//             Clear
//           </a>
//         </div>
//         <div className="checkbox">
//           <div>
//             <input
//               type="checkbox"
//               name="full"
//               checked={filters.jobType.includes("full")}
//               onChange={() => onFilterChange("jobType", "full")}
//             />
//             <label htmlFor="full">Full Time</label>
//           </div>
//           <p>100 Jobs</p>
//         </div>
//         <div className="checkbox">
//           <div>
//             <input
//               type="checkbox"
//               name="part"
//               checked={filters.jobType.includes("part")}
//               onChange={() => onFilterChange("jobType", "part")}
//             />
//             <label htmlFor="part">Part Time</label>
//           </div>
//           <p>50 Jobs</p>
//         </div>
//         <div className="checkbox">
//           <div>
//             <input
//               type="checkbox"
//               name="freelance"
//               checked={filters.jobType.includes("freelance")}
//               onChange={() => onFilterChange("jobType", "freelance")}
//             />
//             <label htmlFor="freelance">Contract</label>
//           </div>
//           <p>50 Jobs</p>
//         </div>
//       </div>
//       <div className="item">
//         <div className="title">
//           <h4>Job Location</h4>
//           <a href="#" onClick={() => onClearFilter("jobLocation")}>
//             Clear
//           </a>
//         </div>
//         <div className="checkbox">
//           <div>
//             <input
//               type="checkbox"
//               name="site"
//               checked={filters.jobLocation.includes("site")}
//               onChange={() => onFilterChange("jobLocation", "site")}
//             />
//             <label htmlFor="site">On Site</label>
//           </div>
//           <p>100 Jobs</p>
//         </div>
//         <div className="location">
//           <i className="bx bxs-location-plus"></i>
//           <input type="text" placeholder="Search location" />
//         </div>
//         <div className="checkbox">
//           <div>
//             <input
//               type="checkbox"
//               name="remote"
//               checked={filters.jobLocation.includes("remote")}
//               onChange={() => onFilterChange("jobLocation", "remote")}
//             />
//             <label htmlFor="remote">Remote</label>
//           </div>
//           <p>50 Jobs</p>
//         </div>
//       </div>
//       <button onClick={applyFilters}>Apply Filters</button>
//     </div>
//   );
// };

// export default Filters;
