import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const WorstImages = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <div className="wb-images-container">
        <div data-aos="fade-up" className="wb-main">
          <img
            alt=""
            className="wb-images"
            src={process.env.PUBLIC_URL + `/landingimages/worst-1.jpg`}
          />

          <img
            alt=""
            className="wb-images"
            src={process.env.PUBLIC_URL + `/landingimages/worst-2.jpg`}
          />
          <img
            alt=""
            className="wb-images two"
            src={process.env.PUBLIC_URL + `/landingimages/worst-3.jpg`}
          />
        </div>
      </div>

      <div className="wi-container">
        <div data-aos="fade-up" className="wb-col-1">
          <img
            alt=""
            className="image left"
            src={process.env.PUBLIC_URL + `/landingimages/worst-4.jpg`}
          />
          <p className="hide-para">Photographer: Eszter Papp @eszt_</p>
          <img
            alt=""
            className="image bottom"
            src={process.env.PUBLIC_URL + `/landingimages/worst-5.jpg`}
          />
          <p className="hide-para">Photographer: Svetlana Yaroshuk </p>
        </div>
        <div data-aos="fade-up" className="wb-col-2">
          <img
            alt=""
            className="image right"
            src={process.env.PUBLIC_URL + `/landingimages/worst-6.jpg`}
          />
          <p className="hide-para">Photo Credits: Eszter Papp @eszt_</p>

          <img
            alt=""
            className="image small"
            src={process.env.PUBLIC_URL + `/landingimages/worst-7.jpg`}
          />
          <p className="hide-para">Photographer: Svetlana Yaroshuk</p>

          <img
            alt=""
            className="image small"
            src={process.env.PUBLIC_URL + `/landingimages/worst-8.jpg`}
          />
          <p className="hide-para">Photographer: Svetlana Yaroshuk</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WorstImages;
