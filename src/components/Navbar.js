import React from 'react';
import logo from '../assets/logos/logo.png';

export default function Navbar() {
    return (
        <header>
            <a href=""><img src={logo} alt="" className="logo" /></a>
            <button className="menu-btn"></button>
            <nav>
                <ul>
                    <li><a href="">home</a></li>
                    <li><a href="">shop</a></li>
                    <li><a href="">contact</a></li>
                </ul>
            </nav>
        </header>
    )
}