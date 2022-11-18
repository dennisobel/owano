import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'



class Hero extends Component {
    render() {

        var settings = {
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className={`wpo-hero-slider ${this.props.heroClass}`}>
                <div className="hero-container">
                    <div className="hero-wrapper">
                        <Slider {...settings}>
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>Protecting your Rights, Serving your Needs</h2>
                                            </div>
                                            <div className="slide-text">
                                                <p>We endeavor to provide our clients with a network of innovative legal solutions, excellent legal representation and a dedication to quality client service.</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/about" className="theme-btn">Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>Protecting your Rights, Serving your Needs</h2>
                                            </div>
                                            <div className="slide-text">
                                                <p>We endeavor to provide our clients with a network of innovative legal solutions, excellent legal representation and a dedication to quality client service.</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="slide-btns">
                                                <Link to="/about" className="theme-btn">Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;