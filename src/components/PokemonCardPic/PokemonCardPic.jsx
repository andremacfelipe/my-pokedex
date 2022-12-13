import './style.css'

const PokemonCardPic = ({pokemonCardPicSrc,PokemonCardTypesBackgroundColor,pokemonType1}) => {
    return (
        <div className="pokemonCardPic" style={{
            outline:`3px solid ${PokemonCardTypesBackgroundColor[pokemonType1]}`
        }}>
            <img src={pokemonCardPicSrc} alt="pokemonPic" />
        </div>
    )
}


export default PokemonCardPic