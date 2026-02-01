import React from 'react'
import './Pokemon.css'

function Pokemon({name,image, key}) {
  return (
    <div className='pokemon'>
        <div>
        <img className="pokemon-image" src={image}/>
        </div>
        <div>{name}</div>
    </div>
  )
}

export default Pokemon
