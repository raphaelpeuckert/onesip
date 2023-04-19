import React from 'react';
import waterBottleImg from '../assets/images/water-bottle.png';

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
            <section className="home--info">
                <h4>How does our water come to you?</h4>
                <div className="home--info-timeline">
                    <div className="timeline-component"><div className="timeline-dot"></div></div>
                    <div className="timeline-content">
                        <p>We source our water from Puerto Williams, located in the Patagonia region of Chile, where some of the purest water in the world can be found. Our water comes from melted snow and glacier runoff, and is carefully monitored and purified to ensure the highest standards of purity and quality. By sourcing our water from one of the cleanest and purest regions in the world, we're able to deliver a product that you can feel good about drinking.</p>
                        <img src={require('../assets/images/timeline-image-1.png')} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}