import { parse, text } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import data from "../components/LoremData.js";

function LoremIpsum() {
  const [input, setInput] = useState(0);
  const [para, setPara] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(input);
    if (amount <= 0) {
      amount = 1;
    }

    if (amount > data.length) {
      amount = data.length;
    }

    setPara(data.slice(0, amount));
  };
  return (
    <div>
      <h1>Lorem Generator</h1>
      <form action="">
        <input
          type="number"
          onChange={handleChange}
          name="input"
          value={input}
        />
        {para.map((tex, index) => {
          return <p key={index}>{tex}</p>;
        })}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoremIpsum;
