import './style.css'

import QueryTypes from '../QueryTypes/QueryTypes'







const SideMenu = () => {
    return (
        <section className='SideMenu'>
            <h1>FILTERS</h1>
            <div className="searchByTypeContainer">
                <h2 className='searchByTypeTitle' >Types</h2>
                <div className="SearchTypes">
                    <QueryTypes Type="bug" />
                    <QueryTypes Type="dark" />
                    <QueryTypes Type="dragon" />
                    <QueryTypes Type="electric" />
                    <QueryTypes Type="fairy" />
                    <QueryTypes Type="fighting" />
                    <QueryTypes Type="fire" />
                    <QueryTypes Type="flying" />
                    <QueryTypes Type="ghost" />
                    <QueryTypes Type="grass" />
                    <QueryTypes Type="ground" />
                    <QueryTypes Type="ice" />
                    <QueryTypes Type="normal" />
                    <QueryTypes Type="poison" />
                    <QueryTypes Type="psychic" />
                    <QueryTypes Type="rock" />
                    <QueryTypes Type="steel" />
                    <QueryTypes Type="water" />

                </div>
            </div>
        </section>
    )
}

export default SideMenu