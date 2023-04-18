import React from 'react';
import { BrowserRouter, Route, Link, useLocation } from "react-router-dom";
import logo from '../assets/logos/logo.png';

export default function Navbar() {

    const location = useLocation();

    return (
        <header>
            <Link to="/"><img src={logo} alt="" className="logo" /></Link>
            <button className="menu-btn"></button>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>shop</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}