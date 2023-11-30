import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Addmovie({ movie , setmovie }) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({
    name:"",
    posterurl:"",
    description:"",
    rating:"",
  })
  const add=()=>setmovie([...movie,newmovie])
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setnewmovie({...newmovie, name:e.target.value}) } />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie posterurl</Form.Label>
        <Form.Control type="text" placeholder="Enter URL" onChange={(e)=>setnewmovie({...newmovie, posterurl:e.target.value}) } />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text" placeholder="Enter Discription" onChange={(e)=>setnewmovie({...newmovie, description:e.target.value}) }/>
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie rating</Form.Label>
        <Form.Control type="text" placeholder="Enter Rating" onChange={(e)=>setnewmovie({...newmovie, rating:e.target.value}) } />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {add();handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addmovie