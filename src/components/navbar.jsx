// import React, { Component } from "react";

// Stateless Functional Component
const Navbar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
