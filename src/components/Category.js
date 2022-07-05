import React from "react";

function Category({ categories, handleFilter, active }) {
  // console.log(active);
  return (
    <div className="filter">
      {categories.map((classification, index) => {
        return (
          <button
            key={index}
            onClick={() => handleFilter(classification)}
            className={`filter-btn ${
              active === classification ? "active" : ""
            }`}
          >
            {classification}
          </button>
        );
      })}
    </div>
  );
}

export default Category;
