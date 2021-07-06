import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const BestImages = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <React.Fragment>
      <div className="bb-main-container">
        <div className="bb-container">
          <div data-aos="fade-up" className="bb-col-1">
            <img
              alt="green plants"
              className="bb-images"
              src={process.env.PUBLIC_URL + `/landingimages/best-1.jpg`}
            />
            <p className="hide-para">Photographer: Svetlana Yaroshuk </p>
            <img
              alt="pink Indigo Luna yoga outfit"
              className="bb-images"
              src={process.env.PUBLIC_URL + `/landingimages/best-2.jpg`}
            />
            <p className="hide-para">
              Photographer: Suzanne @atthebeachphoto Brand: @indigoluna.store
            </p>
          </div>
          <div data-aos="fade-up" className="bb-col-2">
            <img
              alt="Grey Indigo Luna yoga outfit"
              className="bb-images-right"
              src={process.env.PUBLIC_URL + `/landingimages/best-3.jpg`}
            />
            <p className="hide-para">
              Photographer: Suzanne @atthebeachphoto Brand: @indigoluna.store{" "}
            </p>
            <img
              alt="Shanice in nature"
              className="bb-images-right "
              src={process.env.PUBLIC_URL + `/landingimages/best-4.jpg`}
            />
            <p className="hide-para">
              Photographer: Suzanne @atthebeachphoto Brand: @indigoluna.store{" "}
            </p>
            <img
              alt="Shanice wearing Ethnotek Backpack"
              className="bb-images-right"
              src={process.env.PUBLIC_URL + `/landingimages/best-5.jpg`}
            />
            <p className="hide-para">
              Photographer: Eszter Papp @eszt_ Brand: @ethnotekbags{" "}
            </p>
          </div>
        </div>
        <div className="bb-container-2">
          <div data-aos="fade-up" className="bb-col-1">
            <img
              alt="Shanice wearing Indigo Luna intimate pieces"
              className="bb-images"
              src={process.env.PUBLIC_URL + `/landingimages/best-6.jpg`}
            />
            <p className="hide-para">
              Photographer: Suzanne @atthebeachphoto Brand: @indigoluna.store{" "}
            </p>
            <img
              alt="Shanice back shot of Indigo Luna's yoga attire"
              className="bb-images bottom"
              src={process.env.PUBLIC_URL + `/landingimages/best-7.jpg`}
            />
            <p className="hide-para">
              Photographer: Suzanne @atthebeachphoto Brand: @indigoluna.store{" "}
            </p>
          </div>
          <div data-aos="fade-up" className="bb-col-2">
            <img
              alt=""
              className="bb-images-right"
              src={process.env.PUBLIC_URL + `/landingimages/best-8.jpg`}
            />
            <p className="hide-para">
              Photographer: Suzanne @atthebeachphoto Brand: @indigoluna.store{" "}
            </p>
            <img
              alt=""
              className="bb-images-right bottom "
              src={process.env.PUBLIC_URL + `/landingimages/best-9.jpg`}
            />
            <p className="hide-para">
              Photographer: Suzanne @atthebeachphoto Brand: @indigoluna.store{" "}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BestImages;
