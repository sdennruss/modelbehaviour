import React from "react";
import { details } from "../about/about";

const Next = ({ handleNext, handleMobileNext, move, next }) => {
  return (
    <React.Fragment>
      <div className="next-button">
        <p
          onClick={() => handleNext(next + 1, move + 50)}
          className="next desktop"
        >
          {details[next].go}
        </p>
        <p
          onClick={() => handleMobileNext(next + 1, move + 30)}
          className="next mobile"
        >
          {details[next].go}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Next;
