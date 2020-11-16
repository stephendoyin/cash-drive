import React from "react";
import "./Hero.scss";
import HeroForm from "./HeroForm";
import Fade from "react-reveal/Fade";
import AnimatedSvg from "../AnimatedSvg";
import TextAnimation from "../TextAnimation";

function Hero() {
  return (
    <div
      className="hero position-relative container-fluid"
      style={{
        backgroundImage: `url('./images/Hero.png')`,
        backgroundPosition: "55% bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <img src="./images/hero-bg.jpg" className="hero__bg" /> */}
      <div className=" px-md-5 px-3 mx-0 mx-md-5">
        <div className="col-md-6  d-md-none">
          <AnimatedSvg />
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 mb-5">
            <Fade left duration={1500}>
              <h5 className="hero__title__small hero__resp">Quick loans</h5>
              <TextAnimation />
              <h2 className="hero__title">For Car Owners</h2>

              <p className="hero__lead-text">
                Using your car as collateral and still drive it
              </p>
              <HeroForm />
            </Fade>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <AnimatedSvg />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;