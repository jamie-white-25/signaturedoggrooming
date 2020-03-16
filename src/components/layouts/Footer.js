import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-dark py-3 ">
      <Container>
        <Row className="col-md-10 mx-auto">
          <Col className="my-auto">
            <h3 className="text-gold h6 text-uppercase mb-0">
              Copyright Jamie - 2020
            </h3>
          </Col>
          <Col className="d-flex justify-content-end my-auto">
            <i className="my-auto px-2">
              <FontAwesomeIcon icon={faFacebook} size="2x" color="#efdf92" />
            </i>
            <i className="my-auto px-2">
              <FontAwesomeIcon icon={faTwitter} size="2x" color="#efdf92" />
            </i>
            <i className="my-auto">
              <FontAwesomeIcon icon={faInstagram} size="2x" color="#efdf92" />
            </i>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
