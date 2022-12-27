import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "././HeroSection.css";
import { SlSocialYoutube } from "react-icons/sl";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,

  imgStart,
  textbox,
}) {
  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart == "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="text-box">
                  <h2>{textbox}</h2>
                  <p className="ptext">
                    <SlSocialYoutube className="ikon" /> &nbsp; YouTube
                    İstatistikleri
                  </p>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
