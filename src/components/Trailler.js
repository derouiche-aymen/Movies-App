import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'

const Trailer =({match,movie})=>{

    const item =  movie.find(el=>el.Id == match.params.movieId)
    

    return(
        <div className='tra'>
            <h1>{item.title}</h1>
            
                <Link to='/'>
                <Button color="success">Home</Button>
                </Link>
                <p>{item.trailler}</p>
                <p style={{width:'30%'}}>{item.description}</p>
        </div>
    )

}

export default Trailer