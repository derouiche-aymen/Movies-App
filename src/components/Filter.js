import React, { useState } from 'react'
import Rate from './Rate'
import {Button} from 'reactstrap'

const Filter = ({ setInputSearch, setInputSearchRate}) => {
 const Reset=()=>{
     setInputSearch('')
     setInputSearchRate(0)
 }

    return (
        <div className='rate'>
            <label>Search </label>
            <input type="text" placeholder="Movie name" onChange={(e)=>setInputSearch(e.target.value)} />
            <Rate setInputSearchRate={setInputSearchRate} />
            <Button color="secondary" onClick={Reset}>Reset</Button>
        </div>
    )
}

export default Filter
