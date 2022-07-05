import React, { useState } from "react";
import HowCard from "./HowCard";
import WindowResize from "./WindowResize";
import { motion } from "framer-motion";

function HowItWorks() {
  const windowResize = WindowResize();
  const windowSize = windowResize.props.children;

  return (
    <motion.section
      className="how-it-works"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="how-heading">
        How it works
        {windowSize > 1200 && (
          <span className="svg-design">
            <img src="/Images/Group 2117.svg" alt="" />
          </span>
        )}
      </h2>
      <div className="how-cards">
        <HowCard />
      </div>
    </motion.section>
  );
}

export default HowItWorks;
