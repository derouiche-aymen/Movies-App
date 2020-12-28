import React, {useState} from 'react'
import '../App.css';
import Edite from './Edite';
import { Link } from 'react-router-dom'
import { Button} from 'reactstrap'
import Rate from './Rate'

const MovieCard = ({el,handleDelete,handleEdit}) => {
    const Delete=()=>{
        
        handleDelete(el.Id)
    }
  
    return (
        <div className="movie-card">
            <Link to ={`/trailer/${el.Id}`}>
            <h2 >{el.title}</h2>
            <Rate rating={el.rate}/>
            <img src={el.posterUrl} />
            </Link>
            <div className='btn'>
            <Edite el={el} handleEdit={handleEdit} />
            <Button color="primary" onClick={Delete}>Delete</Button>
            </div>
            <h3 style={{color:'#6495ED'}}>Description :</h3>
            <p style={{color:'white'}}>{el.description}</p>
           
        </div>
    )
}

export default MovieCard
