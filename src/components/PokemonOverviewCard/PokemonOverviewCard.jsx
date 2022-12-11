import './style.css'


const PokemonOverviewCard = ({pokemon}) => {
    

    const {
            pokemonName, pokemonHeight, 
            pokemonWeight, pokemonType1,
            pokemonType2,pokemonCardPicSrc,
            pokemonBaseHp,
            pokemonBaseAttack,
            pokemonBaseDefense,
            pokemonBaseSpeed,
        } = pokemon



    return (
        <article className='PokemonOverviewCard' 
        style={{
            boxShadow:`5px 5px 10px ${PokemonCardTypesColors[pokemonType1]}, -2px -2px 10px ${PokemonCardTypesColors[pokemonType1]} `,
            
        }} >
            <div className="pokemonCardPic" style={{
                outline:`3px solid ${PokemonCardTypesBackgroundColor[pokemonType1]}`
            }}>
                <img src={pokemonCardPicSrc} alt="pokemonPic" />
            </div>
            <section className='pokemonCardInfo'>
                <span className='pokemonName'>{pokemonName}</span>
                <div className='pokemonStats' >
                    <p className='pokemonHeight'>Height: {pokemonHeight}</p>
                    <p className='pokemonWeight'>Weight: {pokemonWeight}</p>
                    <p className='pokemonType'>Types: {pokemonType2 ? <>
                        <PokemonCardIconImage pokemonType={pokemonType1}/>
                        <PokemonCardIconImage pokemonType={pokemonType2}/>
                    </> : <>
                    <PokemonCardIconImage pokemonType={pokemonType1}/>
                    </>}
                    </p>
                    <p className='pokemonBaseHp'>Base Hp</p>
                    <p className='pokemonBaseAttack'>Base attack</p>
                    <p className='pokemonBaseDefense'>Base Defense</p>
                    <p className='pokemonBaseSpeed'> Base speed</p>
                    
                    
                </div>
            </section>
        </article>
    )

}



export default PokemonOverviewCard