import React from "react";
import { NavLink } from "react-router-dom";
// import items from "./items";
// import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">SuperHeroes</NavLink>
      </li>
      <li>
        <NavLink to="/hero">SuperHero</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
