import React from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

function Trailer({movie}) {
    const params= useParams();
    const onemovie=movie.filter((el)=>el.id==params.id)[0];
  return (
    <div className='one'>
        <img src={onemovie.posterurl}/>
        <h1>{onemovie.name}</h1>
        <p>{onemovie.description}</p>
        <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    edit={false}
    value={onemovie.rating}
  />
    </div>
  )
}

export default Trailer