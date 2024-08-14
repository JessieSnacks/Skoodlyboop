import React, { useContext } from "react";
import { UIContext } from "../context/UI_context";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";

const Navbar = () => {
  const {
    navbar_flex,
    container,
    main_menu_list,
    main_menu_items,
    mobile_menu,
    mobile_menu_list,
    mobile_menu_toggle,
    mobile_menu_items,
    active,
    navbar,
    logo,
  } = classes;
  const { handleOpen, toggleMenu, toggle } = useContext(UIContext);

  return (
    <>
      <nav className={navbar}>
        <div className={`${navbar_flex} ${container}`}>
          <div className={logo}>{/* <h2>LOGO</h2> */}</div>
          <div className={main_menu_items}>
            <ul className={main_menu_list}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>

              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>

              <li>
                <NavLink to="/blog">The Nosh</NavLink>
              </li>
              <li>
                <NavLink to="/consulting">Consulting</NavLink>
              </li>
            </ul>
          </div>
          <div className={mobile_menu}>
            <div className={mobile_menu_toggle} onClick={toggleMenu}>
              <i className="fa fa-bars fa-3x"></i>
            </div>
            <div className={`${mobile_menu_items} ${toggle ? active : ""}`}>
              <ul className={mobile_menu_list}>
                <li>
                  <NavLink to="/" onClick={toggleMenu}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/events" onClick={toggleMenu}>
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={toggleMenu}>
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/contact" onClick={toggleMenu}>
                    Contact
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/blog" onClick={toggleMenu}>
                    The Nosh
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/consulting" onClick={toggleMenu}>
                    Consulting
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={handleOpen}>
                    Subscribe
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Button onClick={handleOpen}> Stay in the loop</Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
