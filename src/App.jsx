import React, { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import JobCards from "./components/JobCards";
import Filters from "./components/Filters";
import jobList from "./model/JobList";
import "boxicons/css/boxicons.min.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = jobList.filter(
      (job) =>
        job.position.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase()) ||
        job.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Navbar onSearch={handleSearch} />
        <div className="main">
          <JobCards jobList={filteredJobs.length ? filteredJobs : jobList} />
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default App;
