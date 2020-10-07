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
          <Nav.Link onClick={()=> setPage('resume')}>Resume</Nav.Link>
          <Nav.Link href='https://www.github.com/andacrew' target='_blank' rel="noopener noreferrer" variant={ btnColor }>
            <i className="fab fa-github"></i>
          </Nav.Link>
          <Nav.Link href='https://www.linkedin.com/in/andrew-copas/' target='_blank' rel="noopener noreferrer" variant={ btnColor }>
            <i className="fab fa-linkedin-in"></i>
          </Nav.Link>
          <Nav.Link href={`mailto:andrew.t.copas@gmail.com`} variant={ btnColor }>
            <i className="far fa-envelope"></i>
          </Nav.Link>
        </Nav>
        <Button variant={btnColor} onClick={ themeToggler } className='ml-auto'>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}