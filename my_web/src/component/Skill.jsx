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
      <Container className="skill" id="skill">
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
                <Card.Text className="d-md-flex flex-column ms-4">
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>Cross-Functional</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>Communication</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163,76)" />
                    <small>Team Belonging</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163,76)" />
                    <small>Flexibility & Adaptability</small>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Body>
                <div className="smallIcon text-center">
                  <AiOutlineApartment size="60" />
                </div>
                <Card.Title className="text-center mt-1">Enthusiasm</Card.Title>
                <Card.Text className="d-md-flex flex-column ms-4">
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>Problem-Solving</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>Accessible</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>Unwavering</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgba(240, 163, 76,.0)" />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Body>
                <div className="smallIcon text-center">
                  <MdOutlineEnhancedEncryption size="60" />
                </div>
                <Card.Title className="text-center">Self-Enrichment</Card.Title>
                <Card.Text className="d-md-flex flex-column ms-4">
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>Webinars</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>Workshops</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>TypeScript & AI</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>Tech Hackthon</small>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "16rem" }}>
              <Card.Body>
                <div className="smallIcon text-center">
                  <GiSoapExperiment size="60" />
                </div>
                <Card.Title className="text-center">
                  Create & Experiment
                </Card.Title>
                <Card.Text className="d-md-flex flex-column ms-1">
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>New Technology</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>Never give up to explore</small>
                  </div>
                  <div>
                    <BsLightningFill color="rgb(240, 163, 76)" />
                    <small>Fearlessly venture into inter-discipline</small>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skill;
