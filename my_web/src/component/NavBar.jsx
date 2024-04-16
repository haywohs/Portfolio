import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Dropdown,
  Image,
} from "react-bootstrap";
import "./navbar.scss";
import Instagram from "../pictures/instagram.png";
import LinkedIn from "../pictures/linkedin.png";
import Medium from "../pictures/medium.png";
import Github from "../pictures/github.png";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container className="navbar__container">
          <Navbar.Brand href="/Portfolio">H</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Portfolio/about">About</Nav.Link>
              <Nav.Link href="/Portfolio/project">Project</Nav.Link>
              <Nav.Link href="/Portfolio/skill">Skill</Nav.Link>
              <Nav.Link href="/Portfolio/contact">Contact</Nav.Link>
              {/* <Nav.Link href={Resume} className="text-light" download>
                Contact
              </Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link href="https://www.instagram.com/haywo0901/">
                <Image src={Instagram} alt="Instagram" className="images" />
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/haywohs/">
                <Image src={LinkedIn} alt="LinkedIn" className="images" />
              </Nav.Link>
              <Nav.Link href="https://github.com/haywohs">
                <Image src={Github} alt="Github" className="images" />
              </Nav.Link>
              <Nav.Link href="https://medium.com/@haywo">
                <Image src={Medium} alt="Medium" className="images" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
