import React from 'react'
import Movies from './Movies'
import Addmovie from './Addmovie'

function Movieslist({ movie , setmovie , text , rate }) {
  return (
    <>
    <div className='add'>
      <Addmovie movie={movie} setmovie={setmovie} />
    </div>
    <div className='container'>
        {movie.filter((el)=>el.name.includes(text) && el.rating>=rate).map((el)=> <Movies el={el}/>).reverse()}
    </div>
    </>
  )
}

export default Movieslist