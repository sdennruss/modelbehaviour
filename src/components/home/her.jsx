import React from "react";
import { details } from "../about/about";

const Her = ({ move }) => {
  const styles = {
    right: `${move}rem`,
  };

  return (
    <React.Fragment>
      <div className="her-container">
        <p style={styles} className={`her-0`}>
          {details[0].about}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Her;
