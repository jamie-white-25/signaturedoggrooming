import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCut } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { faPoo } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="bg-dark py-5" id="services">
      <Container>
        <h2 className="text-gold text-center h1 text-uppercase my-5">
          My Services
        </h2>
        <Row className="py-5">
          <Col md={4} className="py-4">
            <i className="text-center d-flex justify-content-center">
              <FontAwesomeIcon icon={faCut} size="4x" color="#efdf92" />
            </i>
            <h2 className="text-center text-white mt-4">Cut</h2>
            <p className="text-gold text-center col-md-10 mx-auto">
              A smal paragraph on what you offer
            </p>
          </Col>
          <Col md={4} className="py-4">
            <i className="text-center d-flex justify-content-center">
              <FontAwesomeIcon icon={faBath} size="4x" color="#efdf92" />
            </i>
            <h2 className="text-center text-white mt-4">Wash</h2>
            <p className="text-gold text-center col-md-10 mx-auto">
              A smal paragraph on what you offer
            </p>
          </Col>
          <Col md={4} className="py-4">
            <i className="text-center d-flex justify-content-center">
              <FontAwesomeIcon icon={faPoo} size="4x" color="#efdf92" />
            </i>
            <h2 className="text-center text-white mt-4">Anal clean</h2>
            <p className="text-gold text-center col-md-10 mx-auto">
              A smal paragraph on what you offer
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
