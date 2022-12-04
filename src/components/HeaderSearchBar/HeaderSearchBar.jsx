import './style.css'

// import searchIcon from "../../assets/icons/searchIcon.png"

const HeaderSearchBar = () => {

    return(
        <div className="HeaderSearchBar">
            <input type="text" name="search" id="search" placeholder='Search a pokemon' />
            <div className="searchIconBox">
                <span className="material-symbols-outlined">
                    search
                </span>
            </div>
        </div>
    )

}

export default HeaderSearchBar