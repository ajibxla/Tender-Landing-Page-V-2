import React, { useState } from "react";
import Accordion from "./Accordion";
import data from "../components/data.js";
import Category from "./Category";
import Question from "./Question";

const AllCategories = [
  "All",
  ...new Set(
    data.map((category) => {
      return category.classificaton;
    }),
  ),
];
function Faq() {
  const [categories, setCategories] = useState(AllCategories);
  const [questions, setQuestions] = useState(data);
  const [activeTab, setActiveTab] = useState("All");

  const handleFilter = (category) => {
    if (category === "All") {
      setQuestions(data);
      setActiveTab("All");
      return;
    }
    const newItem = data.filter((item) => {
      return item.classificaton === category;
    });

    setQuestions(newItem);
    setActiveTab(category);
  };

  return (
    <section className="faq">
      <div className="faq-heading">
        <h1>FAQs</h1>
        <h3>Have a question? Look here.</h3>
      </div>
      <aside>
        <Category
          categories={categories}
          active={activeTab}
          handleFilter={handleFilter}
        />
        <div className="accordion-card-holder">
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
        </div>
      </aside>
    </section>
  );
}

export default Faq;
