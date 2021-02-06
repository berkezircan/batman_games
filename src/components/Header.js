import React from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap';

import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">Batman Games</Navbar.Brand>
          </Link>
          {location.pathname.includes('/game/') && (
            <Link to="/">
              <Nav>
                <Nav.Link>Check Other Games</Nav.Link>
              </Nav>
            </Link>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
