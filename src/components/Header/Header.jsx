import './style.css'
import logo from '../../assets/appLogo2.png'

import { Outlet } from 'react-router-dom'


const Header = () => {
    return(
        <>
        
            <header className="Header">
                
                
                <nav>
                    <img src={logo} alt="" className='Logo'/>
                    
                    <h1>TEMP CONTENT</h1>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Header