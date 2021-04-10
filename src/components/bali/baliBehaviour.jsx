import React from "react";

const BaliBehaviour = () => {
  return (
    <React.Fragment>
      <div className="contact-container">
        <div className="contact-image-container">
          <img
            className="contact-image"
            src={process.env.PUBLIC_URL + `/landingimages/contact-1.jpg`}
          />
        </div>
        <div className="contact-info">
          <div className="contact name">
            <p className="shanicedr">{` Shanice \nDennis Russell. `}</p>
          </div>
          <div className="contact email">
            <p className="shanice-email">sdennisrussell@gmail.com</p>
          </div>
          <div className="contact button">
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sdennisrussell@gmail.com&su=Hi Shan!&shva=1"
              target="_blank"
              rel="noopener noreferrer"
              className="email-button"
            >
              Email me
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BaliBehaviour;
