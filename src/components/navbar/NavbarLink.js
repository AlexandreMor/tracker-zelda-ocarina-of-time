import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLink({ link }) {
  return (
    <li className="nav-list">
      <Link to={link === "Tracker" ? "/" : link.toLowerCase()}>{link}</Link>
    </li>
  );
}
