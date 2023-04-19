import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logos/logo.png';

export default function Footer() {

    return (
        <footer>
            <div className='footer--links-container'>
                <ul className='footer--links-local'>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/shop">shop</Link>
                    </li>
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                    <li>
                        <Link to="/imprint">imprint</Link>
                    </li>
                </ul>
                <ul className='footer--links-global'>
                    <li>
                        <Link to="https://www.facebook.com" target='_blank'>fb</Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com" target='_blank'>in</Link>
                    </li>
                    <li>
                        <Link to="https://www.twitter.com" target='_blank'>tw</Link>
                    </li>
                    <li>
                        <Link to="https://www.youtube.com" target='_blank'>yt</Link>
                    </li>
                </ul>
            </div>
            <Link to="/"><img src={logo} alt="" className="logo" /></Link>
        </footer>
    )
}