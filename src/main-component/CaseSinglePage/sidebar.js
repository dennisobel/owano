import React, {useState} from 'react'
import axios from "axios";
import {Link} from  'react-router-dom'
import ins1 from '../../images/instragram/7.jpg'
import ins2 from '../../images/instragram/8.jpg'
import ins3 from '../../images/instragram/9.jpg'
import ins4 from '../../images/instragram/10.jpg'
import ins5 from '../../images/instragram/11.jpg'
import ins6 from '../../images/instragram/12.jpg'

const CasesSidebar = (props) => {
    const [email, setEmail] = useState("");

    const SubmitHandler = async (e) => {
        e.preventDefault()
        const data = {
            email,
          };
      
          const response = await axios.post(
            "https://owano.herokuapp.com/api/newsletter",
            data
          );
          console.log(response.data);
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="service-sidebar wpo-single-sidebar">
            <div className="widget case-info-widget">
                    <h3>Case Information</h3>
                    <ul>
                        <li><span>Case Title: </span> Family Issue</li>
                        <li><span>Client: </span> Robert Symon</li>
                        <li><span>Date: </span> 20 January 2021</li>
                        <li><span>Service Value:</span> $5500</li>
                        <li><span>Category: </span>Family Law </li>
                        <li><span>Status : </span> Completed </li>
                        <li><span>live link : </span> <Link onClick={ClickHandler} to="/">http://demo.com</Link> </li>
                    </ul>
                </div>
                <div className="wpo-newsletter-widget widget">
                    <h2>Newsletter</h2>
                    <p>Join 20,000 Sabscribers!</p>
                    <form className="form" onSubmit={SubmitHandler}>
                        <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required/>
                        <button type="submit">Sign Up</button>
                    </form>
                    <span>By signing up you agree to our <Link to="#">Privecy Policy</Link></span>
                </div>
                <div className="wpo-instagram-widget widget">
                    <h2>Instagram Shot</h2>
                    <ul>
                    <li><img src={ins1} alt=""/></li>
                    <li><img src={ins2} alt=""/></li>
                    <li><img src={ins3} alt=""/></li>
                    <li><img src={ins4} alt=""/></li>
                    <li><img src={ins5} alt=""/></li>
                    <li><img src={ins6} alt=""/></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>How Can We <br/> Help You!</h2>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>

    )
}

export default CasesSidebar;