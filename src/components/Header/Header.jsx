import './style.css'
import logo from '../../assets/appLogo2.png'

import HeaderSearchBar from '../HeaderSearchBar/HeaderSearchBar'


const Header = () => {
    return(
        <header className="Header">
            
            
            <nav>
                <img src={logo} alt="" className='Logo'/>
                <HeaderSearchBar />
                <h1>TEMP CONTENT</h1>
            </nav>
        </header>
    )
}

export default Header