import './style.css'

import searchIcon from "../../assets/icons/searchIcon.png"

const HeaderSearchBar = () => {

    return(
        <div className="HeaderSearchBar">
            <input type="text" name="search" id="search" placeholder='Search a pokemon' />
            <div className="searchIconBox">
                <img src={searchIcon} alt="searchIcon" className="searchIcon" />
            </div>
        </div>
    )

}

export default HeaderSearchBar