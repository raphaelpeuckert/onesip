import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from '../assets/logos/logo.png';

export default function Navbar() {
    return (
        <header>
            <Link to="/"><img src={logo} alt="" className="logo" /></Link>
            <button className="menu-btn"></button>
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/shop">shop</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}