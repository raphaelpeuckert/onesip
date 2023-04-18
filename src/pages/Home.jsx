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
            <section className="home--about">
                <h4>What is ØNESIP®?</h4>
                <p><span className='text--brand-name'>ØNESIP®</span> provides premium water for a healthy lifestyle. Our goal is to offer you the cleanest and most refreshing water possible. We're dedicated to sourcing the highest quality water and using advanced filtration and purification methods to ensure it's free of harmful contaminants. Our water is perfect for athletes, health enthusiasts, and anyone who wants a delicious and healthy way to stay hydrated. Choose <span className='text--brand-name'>ØNESIP®</span> for the best water available and to help you lead an active and healthy lifestyle.</p>
            </section>
        </div>
    )
}