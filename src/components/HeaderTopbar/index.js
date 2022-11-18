import React from 'react'
import {Link}  from 'react-router-dom'


const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md-5 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/faq">FAQ Us</Link></li>
                                <li><Link to={{pathname: "https://www.linkedin.com/company/owano-associates-advocates/"}} target="_blank"><i className="ti-linkedin"></i></Link></li>
                                {/* <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link to="/"><i className="ti-instagram"></i></Link></li>
                                <li><Link to="/"><i className="ti-google"></i></Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-7 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi ti-location-pin"></i>Western Heights, Westlands, Nairobi, Kenya</li>
                                <li><i className="fi flaticon-email"></i> inquiry@owanoandassociates.co.ke</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;