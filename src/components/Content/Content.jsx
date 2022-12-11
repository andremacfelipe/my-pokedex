import './style.css'

import { useContext } from "react"
import { Link } from 'react-router-dom'

import PokemonCard from "../PokemonCard/PokemonCard"
import Loading from "../Loading/Loading"
import Container from '../Container/Container'
import SideMenu from '../SideMenu/SideMenu'
import Menu from '../Menu/Menu'

import AllPokemonsContext from "../../contexts/AllPokemonsContext"


/////////////////////////////////

const Content = () => {

    const {slicedPokemonData,filteredPokemonsByName,searchPokemonByName} = useContext(AllPokemonsContext)


    return(
        <Container>
            <SideMenu />
            <main className='HomeContent'>
                <Menu />
                {
                    searchPokemonByName.length > 0
                    ?
                    filteredPokemonsByName?.map((pokemon) => {
                        return (
                            <Link to={`/pokemon/${pokemon.pokemonName}`} key={pokemon.pokemonId} className="pokemonLink">
                                <PokemonCard 
                                pokemon={pokemon}
                                key={pokemon.pokemonId} 
                                
                                />
                            </Link>
                        )
                    })
                    : 

                    slicedPokemonData?.map((pokemon) => {
                        return (
                            <Link to={`/pokemon/${pokemon.pokemonName}`} key={pokemon.pokemonId} className="pokemonLink">
                                <PokemonCard 
                                pokemon={pokemon}
                                key={pokemon.pokemonId} 
                                
                                />
                            </Link>
                        )
                        })

                }
            </main>
        </Container>
    )
}


export default Content




