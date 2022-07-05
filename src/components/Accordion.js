import React from "react";
import { useState } from "react";
import data from "../components/data.js";
import Question from "./Question";

function Accordion() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="accordion-card">
      {questions.map((question) => {
        return (
          <Question
            title={question.title}
            info={question.info}
            key={question.id}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
