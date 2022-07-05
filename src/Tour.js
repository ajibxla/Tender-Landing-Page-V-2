import { faLaptopFile } from "@fortawesome/free-solid-svg-icons";
import { React, useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Loading from "./components/Loading";

const url = "https://course-api.com/react-tours-project";

function Tour() {
  //States
  const [test, setTest] = useState(true);
  const [data, setData] = useState([]);
  const [tours, setTourData] = useState(data);

  //Generate a filtered arrar of unique elements based on the map return statement
  const newCategories = ["all", ...new Set(data.map((tour) => tour.price))];

  //A function used to fetch data from the course-api, then set Test (the state for knowing if Api has been called to true) to false to trigger the loading state to a stop
  //Same function then sets the Data states to the data that was received and sets the Tours state with data in the Data State
  const fetchData = () => {
    setTest(true);
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTest(false);
        setData(data);
        setTourData(data);
      });
  };

  //The useffect hook that monitors the fetch function
  //A set time out method was used to help illustrate how we will handle loading

  useEffect(() => {
    setTimeout(fetchData, 4000);
  }, []);

  //Handle reset function
  const handleReset = () => {
    setTimeout(fetchData);
  };

  //Handle delete function
  const handleDelete = (id) => {
    setTourData(
      tours.filter((tour) => {
        return tour.id !== id;
      }),
    );
  };

  //Handle filter fuction
  const handleFilter = (cate) => {
    if (cate === "all") {
      setTourData(data);
    } else {
      const newTour = data.filter((tour) => {
        return tour.price === cate;
      });
      setTourData(newTour);
    }
  };

  if (test) {
    return <Loading />;
  }

  return (
    <section className="tours">
      <div className="tours-filter">
        {newCategories.map((cate, index) => {
          return (
            <button key={index} onClick={() => handleFilter(cate)}>
              {cate}
            </button>
          );
        })}
      </div>
      {tours.length === 0 ? (
        <div>
          <h1>No more locations</h1>;
          <button onClick={handleReset}>reset</button>
        </div>
      ) : (
        <div className="tour-cards">
          {tours.map((tour) => {
            const { id, name, image, info, price } = tour;
            return (
              <div className="tour-card" key={id}>
                {tours.length === 0 ? (
                  <h1>No</h1>
                ) : (
                  <div className="tour-details">
                    <img src={image} alt="" />
                    <h1>{name}</h1>
                    <p>{info}</p>
                    <h3>{price}</h3>
                  </div>
                )}
                <button onClick={() => handleDelete(id)}>Not interested</button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Tour;
