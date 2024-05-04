import React from "react";
import NavBar from "./NavBar.jsx";
import "./project.scss";
import { Row, Col, Button } from "react-bootstrap";
import Project2 from "../pictures/project2.jpg";
import Project1 from "../pictures/project1.png";
import Project3 from "../pictures/project3.jpg";
import Footer from "./Footer.jsx";

const Project = () => {
  return (
    <>
      <div className="projectpage">
        <NavBar />
        <div className="projectcontainer">
          <Row className="layoutrow">
            <Col md={12} xs={12} className="layout">
              <Button className="layoutimg" variant="none">
                <img src={Project2} alt="Library System" />
              </Button>
              <Button className="layouttext" variant="none">
                <h2>Small Library System</h2>
                <p>
                  This library system program offers basic functionality for
                  managing a collection of books, providing users with options
                  to interact with the library's inventory through a simple
                  command-line interface.
                </p>
              </Button>
            </Col>
          </Row>
          <Row className="layoutrow">
            <Col md={12} xs={12} className="layout">
              <Button className="layoutimg" variant="none">
                <img src={Project1} alt="Drink Store Web" />
              </Button>
              <Button className="layouttext" variant="none">
                <h2>Drink Store Website</h2>
                <p>
                  This application provides a complete solution for managing an
                  online store, allowing users to browse products, add them to
                  their shopping cart, and make purchases securely.
                  Additionally, administrators have access to a dedicated admin
                  panel to manage product details and user accounts.
                </p>
              </Button>
            </Col>
          </Row>
          <Row className="layoutrow">
            <Col md={12} xs={12} className="layout">
              <Button className="layoutimg" variant="none">
                <img src={Project3} alt="Library System" />
              </Button>
              <Button className="layouttext" variant="none">
                <h2>Movie Management System</h2>
                <p>
                  The program provides a command-line interface for users to
                  interact with a movie database. It offers functionalities such
                  as adding new movies, printing movies released in a specific
                  year, printing a random list of movies, and deleting movies
                  from the database.
                </p>
              </Button>
            </Col>
          </Row>
        </div>
        <div className="footer">
          <Row>
            <Footer />
          </Row>
        </div>
      </div>
    </>
  );
};

export default Project;
