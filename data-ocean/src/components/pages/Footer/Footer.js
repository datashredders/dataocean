import React from "react";
import "./Footer.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Bizi ziyaret edin ve YouTube istatistikleri hakkında bilgi edinin!
        </p>
      </section>

      <section className="social-media">
        <h5 className="socbaslik">Geliştiricilerimizin GitHub Adresleri</h5>
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              DATA OCEAN
            </Link>
          </div>
          <small className="website-rights">Data Ocean © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link-okkes"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <a href="https://www.github.com/okkescan">
                <FaGithub />
              </a>
            </Link>
            <Link
              className="social-icon-link-salih"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <a href="https://www.github.com/salihturkoglu">
                <FaGithub />
              </a>
            </Link>

            <Link
              className="social-icon-link-yusuf"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <a href="https://www.github.com/yusufbasatogrul">
                <FaGithub />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
