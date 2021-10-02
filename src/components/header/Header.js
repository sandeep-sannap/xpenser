import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpenser.
          <i className="fi fi-rr-credit-card"></i>
        </div>
        <div className="header-button">
          <a
            href="https://github.com"
            target="_blank"
            //   studdy about no opener and no referre
            rel="noopener noreferrer"
          >
            <i className="devicon-github-original"></i>Star
          </a>
        </div>
      </div>
    </div>
  );
}
