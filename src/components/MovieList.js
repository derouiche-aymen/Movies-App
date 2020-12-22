import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movie, inputSearch, inputSearchRate,handleDelete,setMovie}) => {
  
    return (
        <div className="movie-list">
            {(inputSearchRate) ? (
            movie
            .filter( (el)=> (el.title.toUpperCase().startsWith(inputSearch.toUpperCase())  ))
            .filter((el)=>  ((el.rate) == inputSearchRate))
            .map((el,i) => <MovieCard el={el} key={i} setMovie={setMovie} />) ) 
            : (movie
                .filter( (el)=> (el.title.toUpperCase().startsWith(inputSearch.toUpperCase())  ))
                .map((el,i) => <MovieCard el={el} key={i} handleDelete={handleDelete} movie={movie} />))
        }
        </div>
    )
}

export default MovieList

