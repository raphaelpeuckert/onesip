import React from 'react';
import waterBottleImg from '../assets/images/water-bottle.png'

export default function Home() {
    return (
        <div>
            <section className='home--hero'>
                <h1 className='home--hero-title'>THE ELIXIR OF LIFE</h1>
                <img className='home--hero-img' src={waterBottleImg} alt="" />
                <a href='/shop' className='home--hero-cta'>shop now</a>
            </section>
        </div>
    )
}