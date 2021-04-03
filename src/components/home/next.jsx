import React from "react";
import { details } from "../about/about";

const Next = ({ next, handleNext, move }) => {
  return (
    <React.Fragment>
      <div className="next-button">
        <p onClick={() => handleNext(next + 1, move + 50)} className="next">
          {details[next].go}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Next;
