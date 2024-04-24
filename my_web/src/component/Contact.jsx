import React from "react";
import NavBar from "./NavBar.jsx";
import { Row, Col, Button, Image, Form } from "react-bootstrap";
import "./contact.scss";
import Instagram from "../pictures/instagram.png";
import LinkedIn from "../pictures/linkedin.png";
import Medium from "../pictures/medium.png";
import Github from "../pictures/github.png";
import Footer from "./Footer.jsx";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <NavBar />
        <div className="contact-bar">
          <Row>
            <h2>Let's Get In Touch</h2>
            <h3>Contact Me Via Social Media or Email</h3>
          </Row>
          <Row className="contactrow">
            <Col md={6} className="contactcol">
              <Button
                href="https://www.instagram.com/haywo0901/"
                target="_blank"
                type="button"
                className="contact-button"
              >
                <Image src={Instagram} alt="Instagram" />
              </Button>
              <Button
                href="https://www.linkedin.com/in/haywohs/"
                target="_blank"
                type="button"
                className="contact-button"
              >
                <Image src={LinkedIn} alt="LinkedIn" />
              </Button>
            </Col>
            <Col md={6} className="contactcol">
              <Button
                href="https://github.com/haywohs"
                target="_blank"
                type="button"
                className="contact-button"
              >
                <Image src={Github} alt="Github" />
              </Button>
              <Button
                href="https://medium.com/@haywo"
                target="_blank"
                type="button"
                className="contact-button"
              >
                <Image src={Medium} alt="Medium" />
              </Button>
            </Col>
          </Row>
        </div>
        <div className="contactform">
          <Form className="row inputform">
            <Form.Group className="col-md-6">
              <Form.Label className="label">Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
              <Form.Label className="label">Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group className="col-md-6">
              <Form.Label className="label">Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Talk to me..."
                rows={4}
              />
            </Form.Group>
            <Button type="submit" className="submitbtn">
              Touch
            </Button>
          </Form>
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

export default Contact;
