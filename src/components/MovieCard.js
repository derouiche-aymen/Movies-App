import React, {useState} from 'react'
import '../App.css';
import Edite from './Edite';

const MovieCard = ({el,handleDelete,setMovie,movie}) => {
    const Delete=()=>{
        
        handleDelete(el.Id)
    }
  
    return (
        <div className="movie-card">
            <h2>{el.title}</h2>
            <h3 style={{textDecoration:"underline"  }}>{el.rate} stars</h3>
            <img src={el.posterUrl} />
            
            <div className='btn'>
            <Edite el={el} setMovie={setMovie} movie={movie}/>
            <button onClick={Delete}>Delete</button>
            </div>
            <h3>Description :</h3>
            <p>{el.description}</p>
           
        </div>
    )
}

export default MovieCard
