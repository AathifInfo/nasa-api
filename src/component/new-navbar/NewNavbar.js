// NewNavbar.js
import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewNavbar.css';

function NewNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" expanded={expanded} onToggle={() => setExpanded(!expanded)} className="new-navbar">
      <Container>
        <Navbar.Brand>
          <Link to="/home" className="navbar-brand d-flex align-items-center">
            <div className="satellite" />
            <span className="brand-text">SpaceOne</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav">
          <span className={`navbar-toggler-icon ${expanded ? 'open' : ''}`} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/home-nasa" className="nav-link hover-effect">Home</Nav.Link>
            <Nav.Link as={Link} to="/apod" className="nav-link hover-effect">Astronomy Picture Of Day</Nav.Link>
            <Nav.Link as={Link} to="/display-rover" className="nav-link hover-effect">Mars Rover</Nav.Link>
            <Nav.Link as={Link} to="/display-nasa-image" className="nav-link hover-effect">NASA Photos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NewNavbar;
