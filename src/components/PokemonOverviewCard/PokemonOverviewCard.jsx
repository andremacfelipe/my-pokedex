import './style.css'

import PokemonCard from '../PokemonCard/PokemonCard'
import PokemonEvolutionsBox from '../PokemonEvolutionsBox/PokemonEvolutionsBox'


import PokemonCardIconImage from '../PokemonCard/PokemonCardTypesIcons'
import PokemonCardTypesColors, {PokemonCardTypesBackgroundColor} from '../PokemonCard/PokemonCardTypesColors'

import { FootEmoji,HeartEmoji,ShieldEmoji,SwordEmoji } from '../Emojis/Emojis' 


const PokemonOverviewCard = ({pokemon}) => {
    

    const {
            pokemonName, pokemonHeight, 
            pokemonWeight, pokemonType1,
            pokemonType2,pokemonCardPicSrc,
            pokemonBaseHp,
            pokemonBaseAttack,
            pokemonBaseDefense,
            pokemonBaseSpeed,
            pokemonId
        } = pokemon



    return (
        
        <article className='PokemonOverviewCard'>
            <div className="pokemonIdBox">
                <h2 className='pokemonId'>{`#${pokemonId}`}</h2>
            </div>
            <section className="pokemonPicAndNameBox">
                <div className="pokemonPicBox" style={{
                outline:`5px solid ${PokemonCardTypesBackgroundColor[pokemonType1]}`
            }}>
                    <img src={pokemonCardPicSrc} alt="pokemonCardPic" />
                </div>
                <div className="PokemonNameBox">
                    <h1>{pokemonName}</h1>
                </div>
                

            </section>

            <div className="pokemonOverviewCardInfo">
                
                <div className="pokemonCombatStats">
                    <h2 className='pokemonCombatStatsTitle'>Stats</h2>
                    <p className='pokemonBaseHp'>HP<HeartEmoji />: {pokemonBaseHp}</p>
                    <p className='pokemonBaseAttack'>ATTACK<SwordEmoji/>: {pokemonBaseAttack}</p>
                    <p className='pokemonBaseDefense'>DEFENSE<ShieldEmoji/>: {pokemonBaseDefense}</p>
                    <p className="pokemonBaseSpeed">SPEED<FootEmoji/>: {pokemonBaseSpeed}</p>
                </div>
                <div className='pokemonOtherStats' >
                    <p className='pokemonHeight'>HEIGHT: {pokemonHeight}</p>
                    <p className='pokemonWeight'>WEIGHT: {pokemonWeight}</p>
                    <p className='pokemonType'>TYPES: {pokemonType2 ? <>
                        <PokemonCardIconImage pokemonType={pokemonType1}/>
                        <PokemonCardIconImage pokemonType={pokemonType2}/>
                    </> : <>
                    <PokemonCardIconImage pokemonType={pokemonType1}/>
                    </>}
                    </p>
                    
                    
                </div>
                <PokemonEvolutionsBox pokemonName={pokemonName} />


            </div>

            
            
        </article>
    )

}



export default PokemonOverviewCard