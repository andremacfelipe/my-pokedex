import './style.css'



import { useContext } from 'react'
import AllPokemonsContext from '../../contexts/AllPokemonsContext'

import PokemonCardIconImage from "../PokemonCard/PokemonCardTypesIcons"
import { PokemonCardTypesBackgroundColor } from '../PokemonCard/PokemonCardTypesColors'

const QueryTypes = ({Type}) => {

    const {searchPokemonsByType,setSearchPokemonsByType} = useContext(AllPokemonsContext)

    const handleSearchPokemonsByType = (e) => {

        if (e.target.title === searchPokemonsByType){
            setSearchPokemonsByType('')
        }else if (e.target.title !== searchPokemonsByType) {
            setSearchPokemonsByType(e.target.title)
            
        }

    }





    return (
        
            <PokemonCardIconImage pokemonType={Type} 
                customStyle={{width:"49px",
                    height:"49px",
                    border:`2px solid ${PokemonCardTypesBackgroundColor[Type]}`,
                    borderRadius:"50%",
                    padding:"7px",
                    cursor:"pointer",
                    backgroundColor:`${searchPokemonsByType === Type ? PokemonCardTypesBackgroundColor[Type] : ""}`
                }}
                onClick={handleSearchPokemonsByType}
            
            />
        
    )
}



export default QueryTypes

