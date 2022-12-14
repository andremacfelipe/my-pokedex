import './style.css'
import logo from '../../assets/appLogo2.png'

import { Outlet,Link } from 'react-router-dom'



const Header = () => {
    return(
        <>
        
            <header className="Header">
                
                
                <nav>
                    <Link to="/">
                        <img src={logo} alt="" className='Logo'/>
                    </Link>
                    
                    <h1>TEMP CONTENT</h1>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Header