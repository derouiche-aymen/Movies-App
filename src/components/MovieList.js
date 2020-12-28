import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movie, inputSearch, inputSearchRate,handleDelete,handleEdit}) => {
  
    return (
        <div className="movie-list">
            {(inputSearchRate) ? (
            movie
            .filter( (el)=> (el.title.toUpperCase().startsWith(inputSearch.toUpperCase())  ))
            .filter((el)=>  ((el.rate) == inputSearchRate))
            .map((el,i) => <MovieCard handleDelete={handleDelete} el={el} key={i} handleEdit={handleEdit} />) ) 
            : (movie
                .filter( (el)=> (el.title.toUpperCase().startsWith(inputSearch.toUpperCase())  ))
                .map((el,i) => <MovieCard handleEdit={handleEdit}  el={el} key={i} handleDelete={handleDelete}  />))
        }
        </div>
    )
}

export default MovieList

