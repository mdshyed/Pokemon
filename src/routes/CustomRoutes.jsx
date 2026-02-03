import React from 'react'
import {Routes, Route} from 'react-router-dom'
import PokeDex from '../components/Pokedex/Pokedex'
import PokemonDetails from '../components/PokemonDetails/PokemonDetails'

function CustomRoutes() {
  return (
    <>
       <Routes>
        <Route path="/" element={<PokeDex/>} />
        <Route path='pokemon/:id' element={<PokemonDetails/>}/>
       </Routes>
    </>
  )
}

export default CustomRoutes
