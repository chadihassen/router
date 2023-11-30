import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function Navbarr({settext,setrate}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><Link to='/' style={{textDecoration:"none" , color:"white"}}>Home</Link></Nav.Link>
            <Nav.Link href="#action2"><Link  to='/Signin' style={{textDecoration:"none" , color:"white"}}>Sign in</Link></Nav.Link>
            <Nav.Link href="#action3"><Link to='/Signup' style={{textDecoration:"none" , color:"white"}}>Sign up</Link></Nav.Link>
            
            <Nav.Link href="#" disabled>   
              Link
            </Nav.Link>
          </Nav>
          <div className='najma'>
          <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    onChange={(newRating)=>setrate(newRating)}
  />
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>settext(e.target.value)}
            />
            
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navbarr