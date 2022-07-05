import React from "react";
import data from "/Users/ajibolaokungbaye/tender-landing-page-v2/src/components/HowData.js";

function HowCard() {
  return (
    <>
      {data.map((h) => {
        const { number, image, heading, text } = h;
        return (
          <div className="how-cardholder" key={number}>
            <div className="how">
              <img src={image} alt={heading} className="how-img" />
              <h3>{heading}</h3>
              <p className="how-text">{text}</p>
              <div className="circle">
                <p>{number}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HowCard;
