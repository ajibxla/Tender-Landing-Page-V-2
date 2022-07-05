import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { VscClose } from "react-icons/vsc";
import navLinksData from "./NavLinksData";

function NavDropDown({ prop, closeDropDown, windowResize }) {
  const variants = {
    open: { x: 0 },
    close: { x: "-100vw" },
  };
  return (
    <motion.section
      initial={{ x: "-100vw" }}
      animate={closeDropDown ? "open" : "close"}
      exit={{
        x: "-100vw",
        transition: { delay: 0.7, duration: 1 },
      }}
      variants={variants}
      transition={{ type: "spring", stiffness: 50 }}
      className="nav-dropdown"
    >
      <div className="dropdown-holder">
        {navLinksData.map((link) => {
          const { address, name, number } = link;
          return (
            <ul className="nav-link" key={number}>
              <li>
                <a href={address}>{name}</a>
              </li>
            </ul>
          );
        })}
      </div>

      <div className="navDropDown-btn" onClick={prop}>
        <VscClose size={30} style={{ color: "rgba(0, 0, 0, 0.75)" }} />
      </div>
    </motion.section>
  );
}

export default NavDropDown;
