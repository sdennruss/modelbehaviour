import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BestImages from "./bestImages";

const Best = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <div data-aos="fade-up" data-aos-duration="3000" className="wb-container">
        <p className="wb left">Best</p>
        <p className="wb right">Behaviour.</p>
      </div>
      <BestImages />
    </React.Fragment>
  );
};

export default Best;
