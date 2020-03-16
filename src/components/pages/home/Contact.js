import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <div className="bg-dark pb-5" id="contact">
      <Container>
        <h2 className="py-5 text-center h1 text-gold text-uppercase">
          Contact me
        </h2>
        <Form className="col-md-10 mx-auto">
          <Form.Row className="pb-4">
            <Col md={6} className="my-2">
              <Form.Label className="text-gold h4 pb-2">Name</Form.Label>
              <Form.Control
                placeholder="Name"
                size="lg"
                className="bg-dark border-gold text-white rounded-0"
              />
            </Col>
            <Col md={6} className="my-2 pt-2 pt-md-0">
              <Form.Label className="text-gold h4 pb-2">Email</Form.Label>
              <Form.Control
                placeholder="Email"
                size="lg"
                className="bg-dark border-gold text-white rounded-0"
              />
            </Col>
          </Form.Row>
          <Form.Group className="">
            <Form.Label className="text-gold h4 pb-2">Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Text"
              size="lg"
              rows="5"
              className="bg-dark border-gold text-white rounded-0"
            />
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
