import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const AboutMe = () => {
  return (
    <div className="py-5" id="about">
      <Container>
        <Row>
          <Col md={5} className="my-auto p-5">
            <Image
              src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/86487024_140263847462827_6506063305189097472_n.jpg?_nc_cat=105&_nc_sid=110474&_nc_ohc=qK-KtHk1SY0AX8AuYGc&_nc_ht=scontent-lht6-1.xx&oh=1565335ef4d5b9f236337756b1e1e195&oe=5E908E05"
              className="img-fluid border-dark shadow-lg my-5"
              roundedCircle
            />
          </Col>
          <Col md={7} className="my-auto">
            <h1 className="text-uppercase mb-4">
              About Me <span class="text-muted">It’ll blow your mind.</span>
            </h1>
            <p className="lead text-justify pr-md-2">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
