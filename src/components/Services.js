import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { services } from "../helpers/services";

const Services = () => {
  return (
    <section className="p-4 bg-primary">
      <h2 className="text-center text-white mb-4">What We Can Do for You</h2>
      <Row xs={1} md={2} lg={4} className="g-4 mb-5">
        {services.map((service, idx) => (
          <Col key={idx}>
            <Card text="primary" className="text-center">
              <Card.Header>{<service.icon size={30} />}</Card.Header>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.desc}</Card.Text>
                <Button variant="outline-primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="text-center">
        <Col
          style={{ height: "400px", borderRight: "2px solid white" }}
          className="d-flex flex-column align-content-center justify-content-center"
        >
          <h3 className="text-light mb-5">
            Already Know What Services You Need?
          </h3>
          <div>
            <Button variant="light">Connect with us</Button>
          </div>
        </Col>
        <Col
          style={{ height: "400px" }}
          className="d-flex flex-column align-content-center justify-content-center"
        >
          <h3 className="text-light mb-5">
            Not Sure What Type Of Care You Need?
          </h3>
          <div>
            <Button variant="outline-light">Let's Find Out</Button>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Services;
