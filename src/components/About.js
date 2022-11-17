import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import aboutImg from "../assets/img/about-img.avif";

const About = () => {
  return (
    <section className="my-5" id="about">
      <Container fluid className="px-lg-5">
        <Row>
          <Col className="mb-5" md={6}>
            <Image src={aboutImg} alt="nurse at work" fluid />
          </Col>
          <Col md={6}>
            <div className="about-content text">
              <h2>Welcome to Benign Nursing Home</h2>
              <p className="about-text mt-3">
                We at Benign Nursing Home, through the recognition of
                individuality and respect of others, are committed to be a
                center of excellence which we provide for wellness of body, mind
                and spirit. This user friendly healthcare institution is
                equipped with many of the foremost specialists in the region and
                with courteous and efficient nurses and staff who are, at all
                times, ready to offer advice and assistance.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
