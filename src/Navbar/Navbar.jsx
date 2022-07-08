import React from 'react'
import './Navbar.css'
import Logo from '../img/logo.png'
const Navbar = () => {
    return(
        <div className="n-wrapper">
            <div className="n-left">
            <div className='App'>
                    <img src={require('../img/logo.png')} width={100}
                     height={50}/>
                 </div> 
            </div>
            <div className="n-right">
            <div className="n-list">
               <ul style={{listStyleType: 'none'}}>
                   <li>Home</li>
                   <li>About</li>
                   <li>Service</li>
                   <li>Blogs</li>
                   <li>Contact</li>
                </ul> 
            </div>
            <button className="button">
                Login
            </button>
            </div>
        </div>
    )
}

export default Navbar