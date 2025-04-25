import React from 'react';
import './Header.css'
import Logo from './img/Group 1317.svg'
import Home from './img/Union.svg'
import Email from './img/mail.svg'
import Exit from './img/shuffle.svg'

const Header = () => {
    return (
       <div id="header">
         <div className='container'>
            <div className='header'>
                <img src={Logo} className='logo' alt="" />
                <nav>
                    <a href="#">Services</a>
                    <a href="#">Product</a>
                    <a href="#">Technology</a>
                    <a href="#">About</a>
                    <a href="#">Client</a>
                    <a href="#">Partner</a>
                </nav>
                <div className="email">
                    <img src={Home} alt="" />
                    <img src={Email} alt="" />
                    <img src={Exit} alt="" />
                </div>
            </div>
        </div>
       </div>
    );
};

export default Header;