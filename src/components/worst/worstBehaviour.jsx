import React, { useEffect } from "react";
import WorstImages from "./worstImages";
import Aos from "aos";
import "aos/dist/aos.css";

const WorstBehaviour = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <div data-aos="fade-up" data-aos-duration="3000" className="wb-container">
        <p className="wb left">Worst</p>
        <p className="wb right">Behaviour.</p>
      </div>
      <WorstImages />
    </React.Fragment>
  );
};

export default WorstBehaviour;
