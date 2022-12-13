import './style.css'
import usePokemonEvolutions from '../../services/Hooks/usePokemonEvolutions/usePokemonEvolutions'
import { useContext, useEffect, useState } from 'react'
import AllPokemonsContext from '../../contexts/AllPokemonsContext'
import PokemonCard from '../PokemonCard/PokemonCard'



const PokemonEvolutionsBox = ({pokemonName}) => {

    const {pokemonEvolutions} = usePokemonEvolutions(pokemonName)
    const {slicedPokemonData} = useContext(AllPokemonsContext)
    const evolutionPokes = pokemonEvolutions.length > 0 && slicedPokemonData.length > 0 
        ? slicedPokemonData.filter((pokemon) => pokemon.pokemonName === pokemonEvolutions[0] || 
        pokemon.pokemonName ===pokemonEvolutions[1])
        
        :[]
        


    useEffect(() => {
        console.log(evolutionPokes)
    },[pokemonEvolutions])


    return (
        <>
            {   
                evolutionPokes.length > 0 
                ? evolutionPokes.map((pokemon) => <PokemonCard pokemon={pokemon} key={pokemon.pokemonId}/>)
                : <p>Loading...</p> 
            
            }
        </>
    )

}


export default PokemonEvolutionsBox