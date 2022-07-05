import React from "react";

function WhyTenderCard(props) {
  return (
    <div className="why-tender-card">
      <div className="why-left">
        <h2>{props.number}</h2>
        <div className="line"></div>
      </div>
      <div className="why-right">
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default WhyTenderCard;
