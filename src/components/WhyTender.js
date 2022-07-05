import React from "react";
import WhyTenderCard from "./WhyTenderCard";
import EmailForm from "./EmailForm";
import { Outlet, Link } from "react-router-dom";
import WindowResize from "./WindowResize";

function WhyTender() {
  const windowResize = WindowResize();
  const windowSize = windowResize.props.children;

  return (
    <section className="why-tender">
      <div className="tender-app-img">
        {windowSize > 1500 ? (
          <img src="/Images/desktop pone.svg" alt="" />
        ) : (
          <img src="/Images/mobile phine.svg" alt="" />
        )}
      </div>

      <div>
        <h3 className="why-us-heading">Why Tender?</h3>
        <div className="why-tender-cardholder">
          <WhyTenderCard
            number="01"
            heading="Easy and convenient to use"
            text="You can get and grant a loan quickly and easily"
          />
          <WhyTenderCard
            number="02"
            heading="Control over loan terms"
            text="The amount, interest rate and duration are all decided by you"
          />
          <WhyTenderCard
            number="03"
            heading="No hidden charges"
            text="We are 100% transparent with charges on Tender"
          />
        </div>
        <button className="why-btn">
          <a href=".banner">Get early access</a>
        </button>
      </div>
    </section>
  );
}

export default WhyTender;
