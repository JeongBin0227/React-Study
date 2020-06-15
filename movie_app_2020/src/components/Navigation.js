import "./Navigation.css";

import { Link } from "react-router-dom";
import React from "react";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/movie-detail">detail</Link>
    </div>
  );
}

export default Navigation;
