import React, { useState } from "react";
import Her from "./her";
import Next from "./next";

const Home = () => {
  const [next, setNext] = useState(0);
  const [move, setMove] = useState(0);

  const handleNext = (number, moveLeft) => {
    number === 4 ? setNext(0) : setNext(number);
    setMove(moveLeft);

    console.log(number);
    console.log(move);
  };

  return (
    <React.Fragment>
      <div className="home-container">
        <div className="main-image">
          <img
            className="half-image"
            src={process.env.PUBLIC_URL + `/landingimages/home-${next}.jpg`}
          />
        </div>
        <div className="about-container">
          <Her next={next} move={move} />
          <Next next={next} handleNext={handleNext} move={move} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
