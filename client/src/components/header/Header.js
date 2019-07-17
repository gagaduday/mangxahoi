import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header-icon">
        <Link to="/">
          <i className="instagram icon" />
          Instagram
        </Link>
        <Link to="">
          <i className="compass outline icon" />
          <i className="heart outline icon" />
          <i className="user outline icon" />
        </Link>
      </div>
      <GoogleAuth />
    </div>
  );
};

export default Header;
