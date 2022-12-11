import './style.css'
import { useContext } from 'react'
import AllPokemonsContext from '../../contexts/AllPokemonsContext'

// import searchIcon from "../../assets/icons/searchIcon.png"

const HeaderSearchBar = () => {

    const {slicedPokemonData,setSearchPokemonByName} = useContext(AllPokemonsContext)





    return(
        <div className="HeaderSearchBar">
            <input type="search" name="search" id="search" placeholder='Search a pokemon' 
            onChange={(e) => {
                setSearchPokemonByName(e.target.value)
            } } />
            <div className="searchIconBox">
                <span className="material-symbols-outlined">
                    search
                </span>
            </div>
        </div>
    )

}

export default HeaderSearchBar