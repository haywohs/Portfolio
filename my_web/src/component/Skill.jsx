import React, { useState } from "react";
import NavBar from "./NavBar.jsx";
import RadarChart from "../pictures/radar.png";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./skill.scss";
import Problem from "../pictures/problemSolving.png";
import Collaboration from "../pictures/collaboration.png";
import Multitasking from "../pictures/multitasking.jpg";
import Time from "../pictures/timeManagement.jpg";
import Footer from "./Footer.jsx";

const Skill = () => {
  const [pop, setPop] = useState(false);
  const togglePopup = () => {
    setPop(!pop);
  };

  return (
    <>
      <div className="skill">
        <NavBar />
        <div className="hardSkills">
          <h4>Hard Skills</h4>
          <Row>
            {pop && (
              <Col md={3} className="popup">
                <div className="popleft">
                  <ul>
                    <li>
                      Java<span>7.5</span>
                    </li>
                    <p>
                      Proficient in Java for robust, scalable applications.
                      Skilled in Spring, Hibernate, and enterprise development.
                    </p>
                    <li className="shinytext">
                      NodeJs<span style={{ color: " blue" }}>8</span>
                    </li>
                    <p>
                      Experienced in NodeJS for server-side Javascript
                      development in MERN stack
                    </p>
                    <li>
                      SQL, MySQL<span>7.5</span>
                    </li>
                    <p>
                      Writing complex SQL queries for data management. Designing
                      and implementing database schemas to ensure the
                      performance and protect sensitive information.
                    </p>
                  </ul>
                </div>
              </Col>
            )}
            <Col md={6} className="radar">
              <img src={RadarChart} alt="radarChart" />
              <Button
                className="radarButton"
                variant="none"
                onClick={togglePopup}
              >
                Detail
              </Button>
            </Col>
            {pop && (
              <Col md={3} className="popup">
                <div className="popright">
                  <ul>
                    <li>
                      TypeScript<span>4</span>
                    </li>
                    <li className="shinytext">
                      MongoDB<span style={{ color: "blue" }}>8</span>
                    </li>
                    <p>
                      Utilizing MongoDB for NoSQL database solutions.
                      Experienced in designing schemas and performing CRUD
                      operations into a full-stack application.
                    </p>
                    <li className="shinytext">
                      React<span style={{ color: "red" }}>9.5</span>
                    </li>
                    <p>
                      Proficient in React for building interactive user
                      interfaces and Ecommerce websites
                    </p>
                    <li>
                      UI/UX<span>7.5</span>
                    </li>
                    <p>
                      Experienced in UI/UX design principles for creating
                      intuitive user experiences.
                    </p>
                  </ul>
                </div>
              </Col>
            )}
          </Row>
        </div>
        <div className="softSkills">
          <h4>Soft Skills</h4>
          <Row className="softrow">
            <Col md={3}>
              <div className="flipy">
                <Card className="flipper">
                  <div className="face front">
                    <Card.Img src={Problem} alt="problem-solving" />
                  </div>
                  <Card.Body className="face back">
                    <Card.Title>Problem-Solving</Card.Title>
                    <Card.Text className="cardText">
                      Exceptional problem-solving abilities drive success in
                      both professional and personal realms, fostering
                      innovation, efficiency, and continual growth.
                      {/* Exemplary problem-solving skills enrich both company
                      endeavours and personal pursuits, consistently overcoming
                      challenges with creativity, resilience, and strategic
                      thinking for optimal outcomes and growth. */}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="flipy">
                <Card className="flipper">
                  <div className="face front">
                    <Card.Img src={Collaboration} alt="collaboration" />
                  </div>
                  <Card.Body className="face back">
                    <Card.Title>Collaboration</Card.Title>
                    <Card.Text className="cardText">
                      My exceptional collaboration skills foster synergy,
                      effective teamwork, and mutual success, enhancing
                      productivity and relationships in the workplace.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="flipy">
                <Card className="flipper">
                  <div className="face front">
                    <Card.Img
                      src={Multitasking}
                      alt="multi-tasking"
                      id="higher"
                    />
                  </div>
                  <Card.Body className="face back">
                    <Card.Title>Multi-tasking</Card.Title>
                    <Card.Text className="cardText">
                      Masterful multitasking abilities optimize productivity,
                      efficiently managing diverse tasks, deadlines, and
                      responsibilities to excel in both professional endeavors
                      and personal pursuits.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className="flipy">
                <Card className="flipper">
                  <div className="face front">
                    <Card.Img src={Time} alt="time management" id="higher" />
                  </div>
                  <Card.Body className="face back">
                    <Card.Title>Time Management</Card.Title>
                    <Card.Text className="cardText">
                      My adept time management ensures efficient allocation of
                      resources, meeting deadlines, and maintaining work-life
                      balance for optimal productivity and fulfillment.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
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

export default Skill;
