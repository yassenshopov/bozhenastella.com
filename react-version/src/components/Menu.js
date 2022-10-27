// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Link } from "react-router-dom";
import {Outlet} from "react-router-dom";

function Menu() {
  return (
    <div className="Menu">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/writing">Writing</Link>
      </nav>
      < Outlet/>
    </div>
  );
}

export default Menu;
