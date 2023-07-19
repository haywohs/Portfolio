import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { CgDesignmodo } from "react-icons/cg";
import { BsLightningFill } from "react-icons/bs";
import { GiSoapExperiment } from "react-icons/gi";
import { AiOutlineApartment } from "react-icons/ai";
import { MdOutlineEnhancedEncryption } from "react-icons/md";
import "./skill.scss";

const Skill = () => {
  return (
    <>
      <hr />
      <Container className="skill">
        <h3>WHAT I HAVE !</h3>
        <Row className="row-col-1 row-col-lg-3 g-4 ">
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Body>
                <div className="smallIcon text-center">
                  <CgDesignmodo size="60" />
                </div>
                <Card.Title className="text-center mt-1">
                  Collaborate
                </Card.Title>
                <Card.Text className="d-md-flex flex-column ms-2">
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>User-Centric</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>Wireframing & Prototyping</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163,76)" />
                    <small>Information Architecture</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163,76)" />
                    <small>Design: Visual & Interaction</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163,76)" />
                    <small>Usability Testing</small>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Body className="text-center">
                <div className="smallIcon">
                  <AiOutlineApartment size="60" />
                </div>
                <Card.Title>Dedication</Card.Title>
                <Card.Text>Be a professional designer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Body className="text-center">
                <div className="smallIcon">
                  <MdOutlineEnhancedEncryption size="60" />
                </div>
                <Card.Title>Self-Enrichment</Card.Title>
                <Card.Text>Be a professional designer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Body>
                <div className="smallIcon">
                  <GiSoapExperiment size="60" />
                </div>
                <Card.Title>Create & Experiment</Card.Title>
                <Card.Text>Be a professional designer</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skill;
