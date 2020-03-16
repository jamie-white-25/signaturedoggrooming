import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import Dog1 from "../../../assets/img/home/dog1.jpg";
import Dog2 from "../../../assets/img/home/dog2.jpg";
import Dog3 from "../../../assets/img/home/dog3.jpg";

const LatestWork = () => {
  return (
    <div className="my-5" id="latest">
      <h2 className="py-5 h1 text-center text-uppercase">Latest Work</h2>
      <Container>
        <Row className="py-5">
          <Col md={6} lg={4} className="my-4">
            <Card className="shadow-lg">
              <Card.Img variant="latest" src={Dog1} />
              <Card.Body>
                <Card.Title className="p-2">WTF is this?</Card.Title>
                <Card.Text className="p-2">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="my-4">
            <Card className="shadow-lg">
              <Card.Img variant="latest" src={Dog2} />
              <Card.Body>
                <Card.Title className="p-2">Fur is murder</Card.Title>
                <Card.Text className="p-2">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="my-4">
            <Card className="shadow-lg">
              <Card.Img variant="latest" src={Dog3} />
              <Card.Body>
                <Card.Title className="p-2">Closest Homodog</Card.Title>
                <Card.Text className="p-2">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LatestWork;
