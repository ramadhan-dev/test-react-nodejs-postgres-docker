import React, { Fragment } from "react";
import "./Tollbar.css";
import { Link } from "react-router-dom";

const Tollbar = (props) => {

  return (
    <Fragment>
      <header className="tollbar">
        <nav className="tollbar__navigation">
          <div className="tollbar__logo">
            <Link to="/">Logo</Link>
          </div>
          <div className="spacer"></div>
          <div className="tollbar-navigation__items">
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Tollbar;
