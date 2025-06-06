import React from "react";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, NewYork, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-0123</p>
        <p className="p__opensans">+1 212-344-1234</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer-logo" />
        <p className="p__opensans">
          The best way to find yourself is to lose yourself in the service of
          others
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer_links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday: </p>
        <p className="p__opensans">10:00am - 02:00am</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">10:00am - 04:00am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        2025 Gericht, All Rights Reserved.{" "}
        <span style={{ color: "#DCCA87", fontSize: "20px" }}>&copy;</span>
      </p>
    </div>
  </div>
);

export default Footer;
