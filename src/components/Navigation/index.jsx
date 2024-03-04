// import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Gatis Jansons
        </Link>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink
              to="projects"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="contacts"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contacts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
