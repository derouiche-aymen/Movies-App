import React, { useState } from 'react'

const Filter = ({ setInputSearch, setInputSearchRate}) => {


    return (
        <div>
            <label>Search </label>
            <input type="text" placeholder="Movie name" onChange={(e)=>setInputSearch(e.target.value)} />
            <input type="number" min="1" max="5" placeholder="type rating" onChange={(e)=>setInputSearchRate(e.target.value)}/>
        </div>
    )
}

export default Filter
