

const fetchAllPokemons = async () => {
    const FETCH_ALL_DEFAULT_ERROR_MESSAGE = "Fetch all pokemons error"

    //Fetch the first 24 pokemons
    const FETCH_POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/?limit=24&offset=0"
    
    const fetchResponse = await fetch(FETCH_POKEMON_URL)
    
    if (!fetchResponse.ok) throw Error(FETCH_ALL_DEFAULT_ERROR_MESSAGE)

    const data = await fetchResponse.json()

    return data
}


const getDataFromPokemons = async () => {

    const {results} = await fetchAllPokemons()

    return results





}


const getSimplifyedPokemonData = async () => {


    const {results} = await fetchAllPokemons()
    const simplifyedPokemonData = {}

    results.forEach(async (element) => {
        const pokemonName = element.name
        const pokemonUrl = element.url

        const thisPokemonData = await fetch(pokemonUrl).then(res => res.json())

        simplifyedPokemonData[pokemonName] = {
            pokemonId:thisPokemonData.id,
            pokemonHeight:thisPokemonData.height,
            pokemonWeight:thisPokemonData.weight,
            pokemonCardPicSrc:thisPokemonData.sprites.front_default,
            pokemonType:thisPokemonData.types[0].type.name,
            pokemonBaseHp:thisPokemonData.stats[0].base_stat,
            pokemonBaseAttack:thisPokemonData.stats[1].base_stat,
            pokemonBaseDefense:thisPokemonData.stats[2].base_stat,
            pokemonBaseSpeed:thisPokemonData.stats[5].base_stat            


        }
    })

    return simplifyedPokemonData

//

}


//////////////////////




export {getDataFromPokemons,getSimplifyedPokemonData}