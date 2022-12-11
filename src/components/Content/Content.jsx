import './style.css'

import { useContext } from "react"

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
            <main>
                <Menu />
                {
                    searchPokemonByName.length > 0
                    ?
                    filteredPokemonsByName?.map((pokemon) => {
                        return (
                            <PokemonCard 
                            pokemon={pokemon}
                            key={pokemon.pokemonId} 
                            
                            />
                        )
                    })
                    : 

                    slicedPokemonData?.map((pokemon) => {
                        return (
                            <PokemonCard 
                            pokemon={pokemon}
                            key={pokemon.pokemonId} 
                            
                            />
                        )
                        })

                }
            </main>
        </Container>
    )
}


export default Content




