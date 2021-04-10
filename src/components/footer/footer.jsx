import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div></div>
      <div className="footer-container">
        <div className="instagram">
          <a
            href="https://www.instagram.com/onewayshan/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="footer"
          >
            Instagram.
          </a>
        </div>
        <div className="footer-email">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sdennisrussell@gmail.com&su=Hi Shan!&shva=1"
            target="_blank"
            rel="noopener noreferrer"
            className="footer"
          >
            Email.
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
