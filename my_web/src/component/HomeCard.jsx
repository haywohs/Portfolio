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
                <a
                  href="https://github.com/haywohs/DrinkWebApp"
                  alt="drinkGithub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Card.Img variant="top" src={Project1} />
                </a>
                <Card.Body>
                  <a
                    href="https://github.com/haywohs/DrinkWebApp"
                    alt="drinkGithub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card.Title>Drink Store</Card.Title>
                  </a>
                  <Card.Text>
                    Ecommerce website Developed by MERN stack
                  </Card.Text>
                  <Button
                    variant="link"
                    href="https://github.com/haywohs/DrinkWebApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiSolidRightArrowAlt
                      style={{ color: "#FDF4E3" }}
                      size={25}
                    />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card">
                <a
                  href="https://github.com/haywohs/DrinkWebApp"
                  alt="drinkGithub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Card.Img variant="top" src={Project1} />
                </a>
                <Card.Body>
                  <a
                    href="https://github.com/haywohs/DrinkWebApp"
                    alt="drinkGithub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card.Title>Drink Store</Card.Title>
                  </a>
                  <Card.Text>
                    Ecommerce website Developed by MERN stack
                  </Card.Text>
                  <Button
                    variant="link"
                    href="https://github.com/haywohs/DrinkWebApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiSolidRightArrowAlt
                      style={{ color: "#FDF4E3" }}
                      size={25}
                    />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card">
                <a
                  href="https://github.com/haywohs/DrinkWebApp"
                  alt="drinkGithub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Card.Img variant="top" src={Project1} />
                </a>
                <Card.Body>
                  <a
                    href="https://github.com/haywohs/DrinkWebApp"
                    alt="drinkGithub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card.Title>Drink Store</Card.Title>
                  </a>
                  <Card.Text>
                    Ecommerce website Developed by MERN stack
                  </Card.Text>
                  <Button
                    variant="link"
                    href="https://github.com/haywohs/DrinkWebApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiSolidRightArrowAlt
                      style={{ color: "#FDF4E3" }}
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
