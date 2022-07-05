import React, { useEffect } from "react";
import NavDropDown from "./NavDropDown";
import { useState } from "react";
import navLinksData from "./NavLinksData";
import WindowResize from "./WindowResize";
import { motion } from "framer-motion";

function Nav() {
  const [navDropDown, setNavDropDown] = useState(false);
  const [closeDropDown, setCloseDropDown] = useState(false);

  const windowResize = WindowResize();
  const windowSize = windowResize.props.children;

  const dropDown = () => {
    setCloseDropDown(!closeDropDown);
  };

  const handleDropDown = () => {
    setNavDropDown((prev) => {
      return !prev;
    });
    if (!navDropDown) {
      setNavDropDown(true);
    }
    setCloseDropDown((prev) => {
      return !prev;
    });
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="nav-menu">
        <div className="logo">
          <img src="/Images/Group 2116.svg" alt="" className="tender-logo" />
        </div>

        <div className="nav-link-holder">
          {navLinksData.map((link) => {
            const { address, name, number } = link;
            return (
              windowSize > 600 && (
                <ul className="nav-link" key={number}>
                  <li>
                    <a href={address}>{name}</a>
                  </li>
                </ul>
              )
            );
          })}
        </div>

        {windowSize < 600 && (
          <NavDropDown closeDropDown={closeDropDown} prop={() => dropDown()} />
        )}

        {windowSize < 600 && (
          <div
            className="hamburger"
            onClick={() => {
              handleDropDown();
            }}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Nav;
