import './style.css'

import { useContext } from 'react'
import { useParams } from "react-router-dom"
import AllPokemonsContext from '../../contexts/AllPokemonsContext'

import PokemonOverviewCard from '../../components/PokemonOverviewCard/PokemonOverviewCard'






const PokemonOverview = () => {

    const {slicedPokemonData} = useContext(AllPokemonsContext)
    const {pokemonName} = useParams()

    const thisPokemonOverview = slicedPokemonData?.filter(pokemon => pokemon.pokemonName === pokemonName)

    

    

    return (
        <main className="PokemonOverview">
            <PokemonOverviewCard  />
        </main>
    )
}



export default PokemonOverview