import React from 'react';
import {Link} from 'react-router-dom'
import Services from '../../api/service';
import about from '../../images/blog/about-widget.jpg'
import rp1 from '../../images/recent-posts/img-1.jpg'
import rp2 from '../../images/recent-posts/img-2.jpg'
import rp3 from '../../images/recent-posts/img-3.jpg'


const BlogSidebar = (props) => {
    const {author, authorImg, social} = props;

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={authorImg} alt=""/>
                    </div>
                    <h4>{author}</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} to={{pathname: social}} target="_blank"><i className="ti-linkedin"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                    </div>
                </div>
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        {Services.map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} to={`/practice-single/${service.Id}`}>{service.sTitle} <span>{service.Id}</span></Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src={rp1} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single/1">Why Choose Management Law?</Link></h4>
                                <span className="date">19 Jun 2021 </span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={rp2} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single/2">Researching the Law Career Path</Link></h4>
                                <span className="date">22 May 2021 </span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={rp3} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single/3">Joining the Law Club During Your MBA</Link></h4>
                                <span className="date">12 Apr 2021 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Practice</h3>
                    </div>
                    <ul className="d-flex">
                        {Services.map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} to={`/practice-single/${service.Id}`}><img src={service.sinst} alt=""/></Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Fraud</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/2">Car</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Law</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/2">Attorney</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Lawyer</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/2">Accident</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/2">Criminal</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Business</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/2">Corporate</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/2">Consultation</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-single/1">Immigration</Link></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                        <h2>How Can We <br/> Help You!</h2>
                        
                        <Link onClick={ClickHandler} to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
     )
        
}

export default BlogSidebar;
