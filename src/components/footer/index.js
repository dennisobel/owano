import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo-bottom.png'
import Services from '../../api/service';

import ins1 from '../../images/ft-icon/1.png'
import ins2 from '../../images/ft-icon/2.png'
import ins3 from '../../images/ft-icon/3.png'
import ins4 from '../../images/ft-icon/4.png'
import ins5 from '../../images/ft-icon/5.png'


const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <img src={Logo} alt="logo"/>
                            </div>
                            {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> */}
                            
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Our Services </h3>
                            </div>
                            <ul>
                                {Services.slice(1, 5).map((service, Sitem) => (
                                    <li key={Sitem}><Link onClick={ClickHandler} to={`/practice-single/${service.Id}`}>{service.sTitle}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget tag-widget">
                            <div className="widget-title">
                                <h3>Browse by Tag </h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} to="/practice-single/1">Litigation</Link></li>
                                <li><Link onClick={ClickHandler} to="/practice-single/2">Contracts</Link></li>
                                <li><Link onClick={ClickHandler} to="/practice-single/3">Real Estate</Link></li>
                                <li><Link onClick={ClickHandler} to="/practice-single/4">Labour</Link></li>
                                <li><Link onClick={ClickHandler} to="/practice-single/5">Corporate</Link></li>
                                <li><Link onClick={ClickHandler} to="/practice-single/6">Family</Link></li>
                                <li><Link onClick={ClickHandler} to="/practice-single/7">Probate</Link></li>
                                <li><Link onClick={ClickHandler} to="/practice-single/8">I.P</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                        <div className="widget social-widget">
                            <div className="widget-title">
                                <h3>Social Media</h3>
                            </div>
                            <ul>
                                {/* <li><Link onClick={ClickHandler} to="/"><i><img src={ins1} alt=""/></i> Linkedin</Link></li>
                                <li><Link onClick={ClickHandler} to="/"><i><img src={ins2} alt=""/></i> Twitter</Link></li>
                                <li><Link onClick={ClickHandler} to="/"><i><img src={ins3} alt=""/></i> Instagram</Link></li> */}
                                {/* <li><Link onClick={ClickHandler} to={{pathname:'https://www.linkedin.com/company/owano-associates-advocates/'}}><i><img src={ins5} alt=""/></i> Linkedin</Link></li> */}
                                <li><Link to={{pathname: "https://www.linkedin.com/company/owano-associates-advocates/"}} target="_blank"><i className="ti-linkedin"></i>Linkedin</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> Copyright &copy; 2022 Owano And Associates. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;