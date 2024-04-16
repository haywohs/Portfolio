import React from "react";
import { Container, Button, Image, Stack, Row, Col } from "react-bootstrap";
import "./experience.scss";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <Stack
        direction="horizontal"
        className="justify-content-evenly bg-secondary"
      >
        <Button
          variant="outline-secondary"
          className="github"
          href="https://github.com/haywohs"
        >
          <Image
            width="60"
            height="60"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github"
            roundedCircle
            fluid
          />
          <p>Github</p>
        </Button>
        <Button
          variant="outline-secondary"
          className="linkedin"
          href="https://www.linkedin.com/in/haywohs/"
        >
          <Image
            width="60"
            height="60"
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
            alt="linkedin"
            rounded
            fluid
          />
          <p>LinkedIn</p>
        </Button>
        <Button
          variant="outline-secondary"
          className="medium"
          href="https://medium.com/@haywo"
        >
          <Image
            width="90"
            height="100"
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*jfdwtvU6V6g99q3G7gq7dQ.png"
            alt="medium"
            fluid
            roundedCircle
          />
          <p>Medium</p>
        </Button>
      </Stack>
      <Container>
        <Stack className="ms-4 w-75 mt-3">
          <h3>
            2+ YEARS PF EXPERIENCE IN IT - SOFTWARE & HARDWARE DEVELOPMENT
          </h3>
          <Row>
            <Col lg="8">
              <p>
                <span>
                  <BsFillBookmarkCheckFill color="green" size="25" />
                </span>
                Diploma of Information Technology in Software Development at
                SAIT
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <p>
                <span>
                  <BsFillBookmarkCheckFill color="green" size="25" />
                </span>
                Bachelor of Science in Nutrition at CMU
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <p>
                <span>
                  <BsFillBookmarkCheckFill color="green" size="25" />
                </span>
                Worked with big companies like Google, Wipro Unza, and Wistron
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <p>
                <span>
                  <BsFillBookmarkCheckFill color="green" size="25" />
                </span>
                2022 Calgary Hackathon - The Main Event Project
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <p>
                <span>
                  <BsFillBookmarkCheckFill color="green" size="25" />
                </span>
                10+ Event of information technology in Calgary, includes HackX
                (Full stack), NEO (Algile thinking), Lunch Without Lunch, etc
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <p>
                <span>
                  <BsFillBookmarkCheckFill color="green" size="25" />
                </span>
                SAIT Code Club
              </p>
            </Col>
          </Row>
        </Stack>
      </Container>
    </div>
  );
};

export default Experience;
