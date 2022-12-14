import './style.css'

import { useContext, } from 'react'
import { useParams } from "react-router-dom"
import AllPokemonsContext from '../../contexts/AllPokemonsContext'



import PokemonOverviewCard from '../../components/PokemonOverviewCard/PokemonOverviewCard'
import NextButton from '../../components/NextButton/NextButton'
import PreviousButton from '../../components/PreviousButton/PreviousButton'






const PokemonOverview = () => {

    const {slicedPokemonData} = useContext(AllPokemonsContext)
    const {pokemonName} = useParams()

    const thisPoke = slicedPokemonData?.filter((pokemon) => pokemon.pokemonName === pokemonName)


    

    

    return (
        <main className="PokemonOverview">
            <NextButton />
            <PreviousButton />
            {
                thisPoke.length > 0 
                ?
                 <PokemonOverviewCard
                    pokemon={thisPoke[0]}
                    />
                :
                <p>Loading...</p>
            }
        </main>
    )
}



export default PokemonOverview