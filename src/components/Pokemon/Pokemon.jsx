import React from 'react'
import './Pokemon.css'
import { Link } from 'react-router-dom'

function Pokemon({name,image, id}) {
  return (
    <div className='pokemon'>
        
        <div>
        <img className="pokemon-image" src={image}/>
        </div>
        <div>{name}</div>
        <Link className='pokemon-link' to={`/Pokemon/${id}`}><div>Details</div>
        </Link>
    </div>
  )
}

export default Pokemon
