import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  //console.log(moment().format("Do-MMM"));
  return (
    <div className="nav-bar">
      <Link className="heading" to="/">
        <h1>Habit-Tracker</h1>
      </Link>
      <Link to="/weekly">
        <h2>Weekly-View</h2>
      </Link>
    </div>
  );
};

export default NavBar;
