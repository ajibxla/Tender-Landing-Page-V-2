import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";

function Question({ title, info }) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prevShow) => {
      return !prevShow;
    });
  };
  return (
    <section className={` question-card ${show ? "p-action" : ""}`}>
      <div className="line line-before"></div>
      <div className="title">
        <h3>{title}</h3>{" "}
        <div
          // className="btn" onClick={handleShow}
          onClick={handleShow}
          className={` btn ${show ? "action" : ""}`}
        >
          {show ? <AiOutlineClose /> : <AiOutlineDown />}
        </div>
      </div>
      <p>{show && info}</p>
    </section>
  );
}

export default Question;
