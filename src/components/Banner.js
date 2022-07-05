import React from "react";
import EmailForm from "./EmailForm";
import WindowResize from "./WindowResize";
import { motion } from "framer-motion";

function Banner() {
  const newWin = WindowResize();
  const windowSize = newWin.props.children;

  return (
    <section className="banner">
      <div className="banner-text-email">
        <div className="banner-text">
          <motion.h1
            className="banner-heading"
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Lend and Borrow on your own terms
          </motion.h1>
          <motion.p
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{
              // delay: 1,
              duration: 1,
            }}
          >
            We connect verified borrowers who need short-term loans with lenders
            who are looking to make extra income.
          </motion.p>
        </div>
        <EmailForm />
      </div>

      <motion.div
        className="center-banner-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
      >
        <div className="banner-image">
          {windowSize >= 1200 ? (
            <img src="/Images/desktop bg.svg" alt="" />
          ) : (
            <img src="/Images/mobile bg.svg" alt="" />
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default Banner;
