import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  NavbarBrand,
  NavLink,
} from "react-bootstrap";
import "./navbar.scss";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container className="navbar__container">
          <NavbarBrand href="/Portfolio" className="brand fs-1 text-light">
            H
          </NavbarBrand>
          <NavbarToggle aria-controls="navbar-nav" />
          <NavbarCollapse className="navbar-nav">
            <Nav className="ms-auto">
              <NavLink href="#home" className="text-light">
                Home
              </NavLink>
              <NavLink href="#experience" className="text-light">
                Experience
              </NavLink>
              <NavLink href="#Project" className="text-light">
                Porject
              </NavLink>
              <NavLink href="#Contact" className="text-light">
                Contact
              </NavLink>
              <NavDropdown title={<span>EN</span>} id="language-dropdown">
                <NavDropdown.Item href="/Portfolio/CN">CN</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
