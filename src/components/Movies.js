import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function Movies({el}) {
  return (
    <Link to={`/trailer/${el.id}`} style={{textDecoration:"none" , color:"white"}}>
    <Card style={{ width: '18rem', marginTop:'20px' }}>
    <Card.Img variant="top" src={el.posterurl} />
    <Card.Body>
      <Card.Title>{el.name}</Card.Title>
      <Card.Text>
        {el.description}
      </Card.Text>
      <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    edit={false}
    value={el.rating}
  />
      <Button variant="primary">Trailer</Button>
    </Card.Body>
  </Card>
  </Link>
  )
}

export default Movies