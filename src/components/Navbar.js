import React from "react";
import "../style.css";
import search from "../asssets/search.png";
import profile from "../asssets/profile.png";
import logo from "../asssets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div >
        <img src={logo} className="imglogo"/>
      </div>
      <div className="navitems">
      <div className="searchbar">
        <input type="text" placeholder="what are you looking for? "/>
        <img src={search} className="logo" />
      </div>
      <div className="profile">
        <img src={profile} className="logo" />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
