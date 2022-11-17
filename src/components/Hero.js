import React from "react";
import backgroundImage from "../assets/img/hero-bg.avif";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <section
      className="p-5 text-center bg-image hero-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="hero-content">
          <h2 className="mb-3 text-white">
            Home care services for the ones that matter most
          </h2>
          <Button variant="primary" className="me-4">
            Find a Caregiver
          </Button>
          {"  "} <Button variant="outline-light">Become a Caregiver</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
