import React, { useEffect } from "react";
import NavDropDown from "./NavDropDown";
import { useState } from "react";
import navLinksData from "./NavLinksData";

function Nav() {
  const [navDropDown, setNavDropDown] = useState(false);
  const [closeDropDown, setCloseDropDown] = useState(false);

  console.log(navDropDown);

  const [windowResize, setWindowResize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowResize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
    <nav>
      <div className="nav-menu">
        <div className="logo">
          <img src="/Images/tender logo.png" alt="" className="tender-logo" />
        </div>
        {windowResize > 765 && <NavDropDown windowResize={windowResize} />}
        {windowResize <= 765 ? (
          <>
            <NavDropDown
              closeDropDown={closeDropDown}
              prop={() => dropDown()}
            />
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
          </>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default Nav;
