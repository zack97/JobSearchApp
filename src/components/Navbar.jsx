import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocationQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery, locationQuery); // Notify App about the search change
  };

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const menuBtn = document.getElementById("menuToggle");

    const handleMenuClick = () => {
      sidebar.style.left = "0px";
    };

    const handleClickOutside = (event) => {
      const isClickInside =
        sidebar.contains(event.target) || menuBtn.contains(event.target);

      if (!isClickInside) {
        sidebar.style.left = "-172px";
      }
    };

    menuBtn.addEventListener("click", handleMenuClick);
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listeners on component unmount
    return () => {
      menuBtn.removeEventListener("click", handleMenuClick);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="nav">
      <button id="menuToggle">
        <i className="bx bx-menu"></i>
      </button>
      <div className="search">
        <i className="bx bx-search"></i>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for jobs or companies"
        />
      </div>
      <div className="city">
        <i className="bx bxs-location-plus"></i>
        <input
          type="text"
          value={locationQuery}
          onChange={handleLocationChange}
          placeholder="Enter city, state, or region"
        />
      </div>
      <button onClick={handleSearchClick}>Search</button>
      <i className="bx bx-bell"></i>
      <div className="user-info">
        <img src="assets/profile-1.png" alt="user" />
        <div>
          <a href="#">
            Reza.UI <i className="bx bx-chevron-down"></i>
          </a>
          <p>Reza@Test.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
