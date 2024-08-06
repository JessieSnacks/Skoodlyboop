import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  const { footer, info, info_link, social } = classes;
  return (
    <section className={`${footer}`}>
      <div className={`${info}`}>
        <div className={info_link}>
          <NavLink to="/contact">
            Contact <i className="fa fa-angle-right fa-lg"></i>
          </NavLink>
        </div>
        <div className={info_link}>
          <NavLink to="/about">
            About us <i className="fa fa-angle-right fa-lg"></i>
          </NavLink>
        </div>
        <div className={info_link}>
          <NavLink to="/blog">
            Blog <i className="fa fa-angle-right fa-lg"></i>
          </NavLink>
        </div>
      </div>
      <div className={`${social} p3`}>
        <ul>
          <li>
            <Link to="https://facebook.com">
              <i className="fa fa-facebook fa-lg"></i>
            </Link>
          </li>
          <li>
            <Link to="https://youtube.com">
              <i className="fa fa-youtube fa-lg"></i>
            </Link>
          </li>
          <li>
            <Link to="https://instagram.com">
              <i className="fa fa-instagram fa-lg"></i>
            </Link>
          </li>
          <li>
            <Link to="https://pinterest.com">
              <i className="fa fa-pinterest fa-lg"></i>
            </Link>
          </li>
        </ul>
      </div>
      <p>Copyright &copy; 2024, nameof website, All Rights Reserved</p>
    </section>
  );
};

export default Footer;
