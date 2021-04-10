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
            <p className="image-cred-mobile">
              tap image for Photographer creds
            </p>
            <img
              className="bb-images"
              src={process.env.PUBLIC_URL + `/landingimages/best-1.jpg`}
            />
            <p className="hide-para">Photographer: Svetlana Yaroshuk </p>
            <img
              className="bb-images"
              src={process.env.PUBLIC_URL + `/landingimages/best-2.jpg`}
            />
            <p className="hide-para">
              Photographer: Suzanne @atthebeachphoto Brand: @indigoluna.store
            </p>
          </div>
          <div data-aos="fade-up" className="bb-col-2">
            <img
              className="bb-images-right"
              src={process.env.PUBLIC_URL + `/landingimages/best-3.jpg`}
            />
            <p className="hide-para">
              Photographer: Suzanne @atthebeachphoto Brand: @indigoluna.store{" "}
            </p>
            <img
              className="bb-images-right "
              src={process.env.PUBLIC_URL + `/landingimages/best-4.jpg`}
            />
            <p className="hide-para">
              Photographer: Suzanne @atthebeachphoto Brand: @indigoluna.store{" "}
            </p>
            <img
              className="bb-images-right"
              src={process.env.PUBLIC_URL + `/landingimages/best-5.jpg`}
            />
            <p className="hide-para">Photographer: Eszter Papp @eszt_ </p>
          </div>
        </div>
        <div className="bb-container-2">
          <div data-aos="fade-up" className="bb-col-1">
            <img
              className="bb-images"
              src={process.env.PUBLIC_URL + `/landingimages/best-6.jpg`}
            />
            <p className="hide-para">
              Photographer: Suzanne @atthebeachphoto Brand: @indigoluna.store{" "}
            </p>
            <img
              className="bb-images bottom"
              src={process.env.PUBLIC_URL + `/landingimages/best-7.jpg`}
            />
            <p className="hide-para">
              Photographer: Suzanne @atthebeachphoto Brand: @indigoluna.store{" "}
            </p>
          </div>
          <div data-aos="fade-up" className="bb-col-2">
            <img
              className="bb-images-right"
              src={process.env.PUBLIC_URL + `/landingimages/best-8.jpg`}
            />
            <p className="hide-para">
              Photographer: Suzanne @atthebeachphoto Brand: @indigoluna.store{" "}
            </p>
            <img
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
