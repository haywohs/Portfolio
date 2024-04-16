import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Project1 from "../pictures/project1.png";
import "./homeCard.scss";
import { BiSolidRightArrowAlt } from "react-icons/bi";

const HomeCard = () => {
  return (
    <>
      <div className="homeCard">
        <div className="container">
          <Row>
            <Col md={4}>
              <Card className="card">
                <Card.Img variant="top" src={Project1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example</Card.Text>
                  <Button variant="link">
                    <BiSolidRightArrowAlt
                      style={{ color: "#3C3431" }}
                      size={25}
                    />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card">
                <Card.Img variant="top" src={Project1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example</Card.Text>
                  <Button variant="link">
                    <BiSolidRightArrowAlt
                      style={{ color: "#3C3431" }}
                      size={25}
                    />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card">
                <Card.Img variant="top" src={Project1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example</Card.Text>
                  <Button variant="link">
                    <BiSolidRightArrowAlt
                      style={{ color: "#3C3431" }}
                      size={25}
                    />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
