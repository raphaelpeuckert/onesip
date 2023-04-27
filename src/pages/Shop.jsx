import React from 'react';
import sliderImg1 from '../assets/images/slider-img-1.png'
import sliderImg2 from '../assets/images/slider-img-2.png'
import sliderImg3 from '../assets/images/slider-img-3.png'
import plusIcon from '../assets/icons/add.svg'
import minusIcon from '../assets/icons/remove.svg'

export default function Shop() {
    return (
        <div>
            <section className="shop--hero">
                <div className="product-slider">
                    <button className="previous slider-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_17_18048)">
                            <path d="M16.6201 2.99006C16.1301 2.50006 15.3401 2.50006 14.8501 2.99006L6.54006 11.3001C6.15006 11.6901 6.15006 12.3201 6.54006 12.7101L14.8501 21.0201C15.3401 21.5101 16.1301 21.5101 16.6201 21.0201C17.1101 20.5301 17.1101 19.7401 16.6201 19.2501L9.38006 12.0001L16.6301 4.75006C17.1101 4.27006 17.1101 3.47006 16.6201 2.99006Z" fill="#323232"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_17_18048">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <div className="product-img-container">
                        <img src={sliderImg1} alt="" />
                        <img src={sliderImg2} alt="" />
                        <img src={sliderImg3} alt="" />
                    </div>
                    <button className="next slider-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_17_18091)">
                            <path d="M7.36876 21.3975C7.85876 21.8875 8.64876 21.8875 9.13876 21.3975L17.4488 13.0875C17.8388 12.6975 17.8388 12.0675 17.4488 11.6775L9.13876 3.3675C8.64876 2.8775 7.85876 2.8775 7.36876 3.3675C6.87876 3.8575 6.87876 4.6475 7.36876 5.1375L14.6088 12.3875L7.35876 19.6375C6.87876 20.1175 6.87876 20.9175 7.36876 21.3975Z" fill="#323232"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_17_18091">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>         
                </div>
                <div className="product-info">
                    <h3>ØNESIP®- Premium Water Experience</h3>
                    <h3>$12.99</h3>
                    <div className="product-quantity">
                        <button><img src={minusIcon} alt="" /></button>
                        <input type="number" name="" value={1} />
                        <button><img src={plusIcon} alt="" /></button>
                    </div>
                    <a href="">buy now</a>
                </div>
            </section>
        </div>
    )
}