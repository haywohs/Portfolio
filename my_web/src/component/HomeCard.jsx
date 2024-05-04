import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Project1 from "../pictures/project1.png";
import Project2 from "../pictures/project2.jpg";
import Project3 from "../pictures/project3.jpg";
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
                  href="https://github.com/haywohs/SmallLibrary"
                  alt="SmallLibrary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Card.Img
                    variant="top"
                    src={Project2}
                    style={{ height: "12rem" }}
                  />
                </a>
                <Card.Body>
                  <a
                    href="https://github.com/haywohs/SmallLibrary"
                    alt="SmallLibrary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card.Title>Small Library</Card.Title>
                  </a>
                  <Card.Text>
                    A library program Developed by Java and MariaDB
                  </Card.Text>
                  <Button
                    variant="link"
                    href="https://github.com/haywohs/SmallLibrary"
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
                  href="https://github.com/haywohs/Movie-System"
                  alt="MovieSystem"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Card.Img
                    variant="top"
                    src={Project3}
                    style={{ height: "12rem" }}
                  />
                </a>
                <Card.Body>
                  <a
                    href="https://github.com/haywohs/Movie-System"
                    alt="MovieSystem"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Card.Title>Movie System</Card.Title>
                  </a>
                  <Card.Text>
                    A program imitate movie system Developed by Java
                  </Card.Text>
                  <Button
                    variant="link"
                    href="https://github.com/haywohs/Movie-System"
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
