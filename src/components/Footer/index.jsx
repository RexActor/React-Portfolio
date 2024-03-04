import { Link, NavLink } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <div className="footer position-bottom ">
      <div className="container">
        <span>(c) All Rights Reserved </span>
        <div>
          <Link className="flex-item" to="/contacts">
            Contacts
          </Link>
          <Link className="flex-item" to="/about">
            About
          </Link>
          <Link className="flex-item" to="/projects">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Footer;
