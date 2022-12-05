import {useState,createContext, useEffect} from 'react'
import { getSimplifyedPokemonData } from '../services/fetchPokemon/fetchPokemonClient'


const ShowContext = createContext({})


export const ShowContextProvider = ({children}) => {

    const [loading,setLoading] = useState(true) 

    const [allPokemons,setAllPokemons] = useState(null)


    useEffect(() => {
        const loadAllPokemons = async () => {
            try {
                const tempAllPokemons = await getSimplifyedPokemonData()
                setAllPokemons(tempAllPokemons)
            } catch (error) {
                console.log("An error ocurred")
            }finally{
                setLoading(false)
            }
            
        }
        loadAllPokemons()
         //debug

    },[])
    


    return (
        <ShowContext.Provider value={{
            allPokemons,
            loading,
            setLoading
        }} >
            {children}
        </ShowContext.Provider>
    )


} 

//I NEED TO FIX THAT FUCKING BUG


export default ShowContext