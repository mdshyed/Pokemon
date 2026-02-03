                    import axios from 'axios';
                    import React, { useEffect, useState } from 'react'
                    import Pokemon from '../Pokemon/Pokemon';
                    import './PokemonList.css'

                    function PokemonList() {
                        const [pokemon, setPokemon] = useState([]);
                        const [loading, setLoading] = useState(true);
                        const [pokemonUrl, setPokemonUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
                        const [nextUrl, setNextUrl] = useState("");
                        const [prevUrl, setPrevUrl] = useState("");
                        async function downloadPokemonData(){
                            setLoading(true)
                            const response =  await axios.get(pokemonUrl)
                            const responseData = response.data.results
                            console.log(response.data)
                            setNextUrl(response.data.next)
                            setPrevUrl(response.data.previous)
                            const pokeResponseData = responseData.map((data) => axios.get(data.url))
                            const allPokeResponseData = await axios.all(pokeResponseData)
                            const res = allPokeResponseData.map( (d) => {
                                const response = d.data
                                return  { 
                                            name : response.name,
                                            image : response.sprites.other.dream_world.front_default,
                                            id: response.id
                                        }

                            })
                            console.log(res)
                            setPokemon(res)
                            setLoading(false)

                        }
                            useEffect(() => {
                            downloadPokemonData()
                            
                        },[pokemonUrl])
                    return (
                        <div className='pokemon-list'>
                            <h2 className='pokemon-list-title'>PokemonList</h2>
                            <div className='pokemon-list-wrapper'>
                            {(loading) && <div>Loading...</div>} 
                            {pokemon.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)}
                            </div>
                                <div className='pokemon-list-pagination'>
                                    <button disabled={prevUrl==null} onClick={() => setPokemonUrl(prevUrl)}>Previous</button>
                                    <button disabled={nextUrl==null} onClick={() => setPokemonUrl(nextUrl)}>Next</button>
                                </div>
                            
                        </div>
                    )
                    }

                    export default PokemonList
