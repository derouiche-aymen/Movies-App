import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movie, inputSearch, inputSearchRate}) => {
    return (
        <div className="movie-list">
            {(inputSearchRate) ? (
            movie
            .filter( (el)=> (el.title.toUpperCase().startsWith(inputSearch.toUpperCase())  ))
            .filter((el)=>  ((el.rate) == inputSearchRate))
            .map((el,i) => <MovieCard el={el} key={i}/>) ) 
            : (movie
                .filter( (el)=> (el.title.toUpperCase().startsWith(inputSearch.toUpperCase())  ))
                .map((el,i) => <MovieCard el={el} key={i}/>))
        }
        </div>
    )
}

export default MovieList

