import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

export default function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>All Users</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">My Places</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">Add Place</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authnticate</NavLink>
      </li>
    </ul>
  );
}
