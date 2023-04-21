import { useState, useEffect, React } from 'react';
import waterBottleImg from '../assets/images/water-bottle.png';

export default function Home() {

    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {
        function handleScroll() {
        setScrollValue(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const marginTop = scrollValue * -1 + 'px';



    useEffect(() => {
        function handleScroll() {
            const reveals = document.querySelectorAll('.reveal');

            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 130;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('reveal-on');
                } else {
                    reveals[i].classList.remove('reveal-on');
                }
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <section className='home--hero'>
                <h1 className='home--hero-title page--title' style={{ marginTop }}>THE ELIXIR OF LIFE</h1>
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
                    <div className="timeline-component"></div>
                    <div className="timeline-content" id='first-timeline-content'></div>
                    
                    <div className="timeline-component"><div className="timeline-dot-out"><div className="timeline-dot-in"></div></div></div>
                    <div className="timeline-content reveal">
                        <p>We source our water from Puerto Williams, located in the Patagonia region of Chile, where some of the purest water in the world can be found. Our water comes from melted snow and glacier runoff, and is carefully monitored and purified to ensure the highest standards of purity and quality. By sourcing our water from one of the cleanest and purest regions in the world, we're able to deliver a product that you can feel good about drinking.</p>
                        <img src={require('../assets/images/timeline-image-1.png')} alt="" />
                    </div>
                    <div className="timeline-component"><div className="timeline-dot-out"><div className="timeline-dot-in"></div></div></div>
                    <div className="timeline-content reveal">
                        <img src={require('../assets/images/timeline-image-2.png')} alt="" />
                        <p>We choose to receive our water by train, as it is the most environmentally friendly way to transport it. By using trains, we're able to significantly reduce our carbon footprint and minimize our impact on the environment. We're committed to sustainability and taking care of our planet, and that's why we're proud to use a delivery method that is both efficient and eco-friendly.</p>
                    </div>
                    <div className="timeline-component"><div className="timeline-dot-out"><div className="timeline-dot-in"></div></div></div>
                    <div className="timeline-content reveal">
                        <p>We fill our water in eco-friendly bottling plants located in America. Our bottling plants use the latest technology to minimize waste and energy consumption, and are designed to be as environmentally friendly as possible. We're committed to sustainability and taking care of our planet, and that's why we're proud to use a filling process that is both efficient and eco-friendly.</p>
                        <img src={require('../assets/images/timeline-image-3.png')} alt="" />
                    </div>
                    <div className="timeline-component"><div className="timeline-dot-out"><div className="timeline-dot-in"></div></div></div>
                    <div className="timeline-content reveal">
                        <img src={require('../assets/images/timeline-image-4.png')} alt="" />
                        <p>We use electric trucks for eco-friendly shipping. By using electric trucks, we're able to significantly reduce our carbon footprint and minimize our impact on the environment. We're committed to sustainability and taking care of our planet, and that's why we're proud to use a shipping method that is both efficient and eco-friendly.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}