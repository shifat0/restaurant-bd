import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const NavigationComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Restaurent BD</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/menu" className="nav-link">
                Menu
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavigationComponent;
