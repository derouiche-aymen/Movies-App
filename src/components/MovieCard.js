import React, {useState} from 'react'
import '../App.css';

const MovieCard = ({el}) => {
    return (
        <div className="movie-card">
            <h2>{el.title}</h2>
            <h3 style={{textDecoration:"underline"  }}>{el.rate} stars</h3>
            <img src={el.posterUrl} />
            <h3>Description :</h3>
            <p>{el.description}</p>
        </div>
    )
}

export default MovieCard
