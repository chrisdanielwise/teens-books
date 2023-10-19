import React from "react";
import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <div className="dhiwise-navigation">
      <ul>
        <li>
          <Link to="/">DesktopOne</Link>
        </li>
        <li>
          <Link to="/list_page">DesktopThree</Link>
        </li>
      </ul>
    </div>
  );
};
export default Layout;
