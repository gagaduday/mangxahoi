import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header-icon-div">
        <div className="instagram-div>">
          <Link to="/">
            <i className="instagram icon instagram-icon" />
            <span className="instagram-text-span">Instagram</span>
          </Link>
        </div>
        <div className="icon-div">
          <span className="header-icon-span">
            <i className="compass outline icon header-icon" />
          </span>
          <span className="header-icon-span">
            <i className="heart outline icon header-icon" />
          </span>
          <span className="header-icon-span">
            <i className="user outline icon header-icon" />
          </span>
        </div>
      </div>
      <GoogleAuth />
    </div>
  );
};

export default Header;
