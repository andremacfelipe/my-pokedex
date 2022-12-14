import './style.css'

import PokemonCardIconImage from "../PokemonCard/PokemonCardTypesIcons"
import { PokemonCardTypesBackgroundColor } from '../PokemonCard/PokemonCardTypesColors'

const QueryTypes = ({Type,style}) => {
    return (
        
            <PokemonCardIconImage pokemonType={Type} 
                customStyle={{width:"49px",
                    height:"49px",
                    border:`2px solid ${PokemonCardTypesBackgroundColor[Type]}`,
                    borderRadius:"50%",
                    padding:"7px",
                    cursor:"pointer",
                }}
            
            />
        
    )
}



export default QueryTypes