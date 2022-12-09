import './style.css'

import { useContext } from "react"

import PokemonCard from "../PokemonCard/PokemonCard"
import Loading from "../Loading/Loading"
import Container from '../Container/Container'
import SideMenu from '../SideMenu/SideMenu'
import Menu from '../Menu/Menu'

import AllPokemonsContext from "../../contexts/AllPokemonsContext"



const Content = () => {

    const {slicedPokemonData} = useContext(AllPokemonsContext)


    return(
        <Container>
            <SideMenu />
            <main>
                <Menu />
                {slicedPokemonData?.map((pokemon) => {
                return (
                    <PokemonCard 
                    pokemon={pokemon}
                    key={pokemon.pokemonId} 
                    
                    />
                )
                })}
            </main>
        </Container>
    )
}


export default Content




