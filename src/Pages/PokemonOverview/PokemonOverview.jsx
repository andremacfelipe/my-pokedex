import './style.css'

import { useContext } from 'react'
import { useParams } from "react-router-dom"
import AllPokemonsContext from '../../contexts/AllPokemonsContext'
import { Link } from 'react-router-dom'


import PokemonOverviewCard from '../../components/PokemonOverviewCard/PokemonOverviewCard'
import NextButton from '../../components/NextButton/NextButton'
import PreviousButton from '../../components/PreviousButton/PreviousButton'
import Loading from '../../components/Loading/Loading'






const PokemonOverview = () => {

    const {slicedPokemonData} = useContext(AllPokemonsContext)
    const {pokemonName} = useParams()

    const thisPoke = slicedPokemonData?.filter((pokemon) => pokemon.pokemonName === pokemonName)

    const nextPoke = slicedPokemonData?.filter((pokemon) => {
        return (Number(pokemon?.pokemonId) === (Number(thisPoke[0]?.pokemonId) + 1)) 
        
        
    })
    const previousPoke = slicedPokemonData?.filter((pokemon) => {
        return (Number(pokemon?.pokemonId) === (Number(thisPoke[0]?.pokemonId) - 1))
    })

    

    

    return (
        <main className="PokemonOverview">
            {
                !!nextPoke[0] ? 
                <Link to={`/pokemon/${nextPoke[0]?.pokemonName}`} className="nextPokemonLink">
                    <NextButton />
                </Link>
                : 
                <div></div>
            }
            {
                !!previousPoke[0] ? 
                <Link to={`/pokemon/${previousPoke[0]?.pokemonName}`} className="previousPokemonLink">
                    <PreviousButton />
                </Link>
                :
                <div></div>
            }
            {
                thisPoke.length > 0 
                ?
                 <PokemonOverviewCard
                    pokemon={thisPoke[0]}
                    />
                :
                <Loading />
            }
        </main>
    )
}



export default PokemonOverview