import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';

export const Header = (props) => {

  const theme = props.theme;
  const themeToggler = props.themeToggler;
  const btnColor = props.btnColor;
  const setPage = props.setPage;

  return(
    <Navbar fixed="top" bg={theme} variant={theme} expand='md'>
      <Navbar.Brand href="/">andacrew</Navbar.Brand>
      <Navbar.Toggle aria-controls="nav-collapse" />
      <Navbar.Collapse id="nav-collapse">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setPage('home')}>Home</Nav.Link>
          <Nav.Link onClick={()=> setPage('portfolio')}>Portfolio</Nav.Link>
          <Nav.Link onClick={()=> setPage('contact')}>Contact</Nav.Link>
          <Nav.Link onClick={()=> setPage('resume')}>Resume</Nav.Link>
        </Nav>
        <Button variant={btnColor} onClick={ themeToggler } className='ml-auto'>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}