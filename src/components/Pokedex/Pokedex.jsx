import React from 'react'
import PokemonSearch from '../PokemonSearch/PokemonSearch'
import './Pokedex.css'
import PokemonList from '../PokemonList/PokemonList'

function PokeDex() {
  return (
    <div className='Pokedex'>
         <h1>Pokedex</h1>
        <PokemonSearch/>
        <PokemonList/>

    </div>
  )
}

export default PokeDex
