                    import axios from 'axios';
                    import React, { useEffect, useState } from 'react'
                    import { useParams, Link } from 'react-router-dom'
                    import "./PokemonDetails.css";

                    function PokemonDetails() {
                        const {id} = useParams();
                        const [pokemon, setPokemon] = useState({});
                        console.log(id)
                        async function downloadDetailsOfPokemons() {
                            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                            console.log(response.data)
                            setPokemon({
                                name : response.data.name,
                                height: response.data.height,
                                weight: response.data.weight,
                                image : response.data.sprites.other.dream_world.front_default,
                                type : response.data.types.map((d) => d.type.name)

                            })
                            

                        }

                        useEffect(() => {
                            downloadDetailsOfPokemons()
                        },[])

                        

                        return (
                <div className="pokemon-details">
                <div className="pokemon-card">
                    <div className="pokemon-image">
                    <img src={pokemon.image} />
                    </div>
                    <div className="pokemon-name">{pokemon.name?.toUpperCase()}</div>
                    <div className="pokemon-info">Height: {pokemon.height}</div>
                    <div className="pokemon-info">Weight: {pokemon.weight}</div>

                    <div className="pokemon-types">
            {pokemon.type?.map((t) => (
                <span key={t} className="pokemon-type">
                Type : {t}
                </span>
            ))}
            </div>
            <Link className="back-btn" to='/'>
                <div>Go Back</div>
                </Link>
                </div>

                
                </div>
                        );
                    }

                    export default PokemonDetails
