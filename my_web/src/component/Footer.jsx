import React from "react";
import "./footer.scss";
import { IoIosArrowDropup } from "react-icons/io";
import { Row, Col, Button } from "react-bootstrap";
import Instagram from "../pictures/instagram.png";
import LinkedIn from "../pictures/linkedin.png";
import Medium from "../pictures/medium.png";
import Github from "../pictures/github.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <hr />
        <div className="arrowChange">
          <a href="#top">
            <IoIosArrowDropup
              size={40}
              style={{
                color: "white",
                backgroundColor: "#3C3431",
                borderRadius: "50%",
                padding: "5px",
              }}
            />
          </a>
        </div>
        <div className="initials">
          <Row>
            <Col md={{ span: 2, offset: 1 }}>@Haywo H 2024</Col>
            <Col md={{ span: 3, offset: 6 }}>
              <Button
                variant="outline-light"
                href="https://github.com/haywohs"
                target="_blank"
              >
                <img src={Github} alt="Github" />
              </Button>
              <Button
                variant="outline-light"
                href="https://www.instagram.com/haywo0901/"
                target="_blank"
              >
                <img src={Instagram} alt="Instagram" />
              </Button>
              <Button
                variant="outline-light"
                href="https://medium.com/@haywo"
                target="_blank"
              >
                <img src={Medium} alt="Medium" />
              </Button>
              <Button
                variant="outline-light"
                href="https://www.linkedin.com/in/haywohs/"
                target="_blank"
              >
                <img src={LinkedIn} alt="LinkedIn" />
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Footer;
