import React from "react";
import { Link } from "react-router-dom";
import blog3 from "../../images/blog-details/comments-author/img-1.jpg";
import blog4 from "../../images/blog-details/comments-author/img-2.jpg";
import blog5 from "../../images/blog-details/comments-author/img-3.jpg";
import blog6 from "../../images/blog-details/michael.jpg";
import gl1 from "../../images/blog/img-3.jpg";
import gl2 from "../../images/blog/img-2.jpg";
import blogs from "../../api/blogs";
import { useParams } from "react-router-dom";
import BlogSidebar from "../../components/BlogSidebar";
import { BookmarkRounded } from "@material-ui/icons";

const BlogSingle = (props) => {
  const { id } = useParams();

  const BlogDetails = blogs.find((item) => item.id === id);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              <div className="post format-standard-image">
                <div className="entry-media">
                  <img src={BlogDetails.screens} alt="" />
                </div>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fi flaticon-user"></i> By{" "}
                      <Link to="/blog-single/1">{BlogDetails.author}</Link>{" "}
                    </li>
                    <li>
                      <i className="fi flaticon-comment-white-oval-bubble"></i>{" "}
                      Comments {BlogDetails.comment}
                    </li>
                    <li>
                      <i className="fi flaticon-calendar"></i>{" "}
                      {BlogDetails.create_at}
                    </li>
                  </ul>
                </div>
                <h2>{BlogDetails.title}</h2>
                <p>{BlogDetails.description}</p>
                <blockquote>{BlogDetails.blockquote}</blockquote>
                <p>
                  Despite Parliament having enacted the Proceeds of Crime and
                  Anti-Money Laundering Act No. 9 of 2009 (POCAMLA) , the same
                  appeared to have had little effect on its intended objectives.
                </p>
                <p>
                  However, in recent times, the courts seem to have injected
                  life into the Act by its decisions in the recovery of property
                  and monies that can be considered proceeds of crime.
                </p>
                <p>
                  <strong>What Constitutes Proceeds of Crime?</strong>
                </p>
                <p>
                  There has been a broad definition of what really constitutes
                  proceeds of crime. However, the Act at section 2 defines
                  proceeds of crime as follows;
                </p>
                <blockquote>
                  “......any property or economic advantage derived or realized,
                  directly or indirectly, as a result of or in connection with
                  an offence irrespective of the identity of the offender and
                  includes, on a proportional basis, property into which any
                  property derived or realized directly from the offence was
                  later successively converted, transformed or intermingled, as
                  well as income, capital or other economic gains or benefits
                  derived or realized from such property from the time the
                  offence was committed. "
                </blockquote>
                <p>
                  <small>
                    Know your Country Limited US State Department Anti-Money
                    Laundering Assessment-Kenya (LATF Assessment 2th June 2014)
                    https://www.knowyourcountry.com/kenya1111 Accessed on 31st
                    July 2021. Proceeds of Crime and Anti-Money Laundering Act
                    No 9 of 2009 Ibid at Section 2
                  </small>
                </p>
                <p>The above definition appears to be very wide; but what exactly does it mean? In a nut shell, the above definition states that any property or economic progress realized in a direct or indirect manner regardless of the identity of the offender including property that was directly linked to the offence or property that was acquired as a result of the offence and even if the same was successfully converted to legitimate business will form part of proceeds of crime.</p>
                <p>For instance, if person A is engaged in criminal activities i.e drug trafficking, racketeering and he uses the monies obtained from the illegal trade to buy houses/ motor vehicle or any other assets and puts them up for rental or start a legitimate business, the entire of the business will form part of proceeds of crime.</p>
                <p>The reason for such a wide definition of what really constitutes proceeds of crimes was as defined in the Schabir Shaik & Others –vs- State Case CCT 86/06(2008) ZACC 7 cited with authority by Hedwig L. Ong’udi L.J in The Assets Recovery Agency v Quorandum Limited & 2 others [2018] eKLR which states that</p>
                <blockquote>…One of the reasons for the wide ambit of the definition of “proceeds of crime” is, as the Supreme Court of Appeal noted, that sophisticated criminals will seek to avoid proceeds being confiscated by creating complex systems of “camouflage</blockquote>
                <p><small>The Supreme Court of Appeal held that a person who has benefited through the enrichment of a company as a result of a crime in which that person has an interest will have indirectly benefited from that crime.<superscript>4</superscript></small></p>
                <p>Our financial legal regime has been evolving from time to time as it seeks to incorporate the several new practices in financial laws aimed at stopping financial crimes and money laundering.</p>

                {/* <div className="gallery">
                  <div>
                    <img src={gl1} alt="" />
                  </div>
                  <div>
                    <img src={gl2} alt="" />
                  </div>
                </div> */}
              </div>

              <div className="tag-share clearfix">
                <div className="tag">
                  {/* <span>Share: </span> */}
                  <ul>
                    <li>
                      <Link to="/blog-single/1">Planning</Link>
                    </li>
                    <li>
                      <Link to="/blog-single/1">Business</Link>
                    </li>
                    <li>
                      <Link to="/blog-single/1">Consulting</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tag-share-s2 clearfix">
                <div className="tag">
                  <span>Share: </span>
                  <ul>
                    <li>
                      <Link to="/blog-single/1">facebook</Link>
                    </li>
                    <li>
                      <Link to="/blog-single/1">twitter</Link>
                    </li>
                    <li>
                      <Link to="/blog-single/1">linkedin</Link>
                    </li>
                    <li>
                      <Link to="/blog-single/1">pinterest</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="author-box">
                <div className="author-avatar">
                  <Link to="/blog-single/1" target="_blank">
                    <img src={blog6} alt="" />
                  </Link>
                </div>
                <div className="author-content">
                  <Link to="/blog-single/1" className="author-name">
                    Author: {BlogDetails.author}
                  </Link>
                  <p>
                    {BlogDetails.authorTitle}
                  </p>
                  <div className="socials">
                    <ul className="social-link">
                      <li>
                        <Link to={{pathname: BlogDetails.social}}>
                          <i className="ti-linkedin"></i>
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/blog-single/1">
                          <i className="ti-twitter-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/1">
                          <i className="ti-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/1">
                          <i className="ti-instagram"></i>
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="more-posts">
                <div className="previous-post">
                  <Link to="/blog">
                    <span className="post-control-link">Previous Post</span>
                    <span className="post-name">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium.
                    </span>
                  </Link>
                </div>
                <div className="next-post">
                  <Link to="/blog-left-sidebar">
                    <span className="post-control-link">Next Post</span>
                    <span className="post-name">
                      Dignissimos ducimus qui blanditiis praesentiu deleniti
                      atque corrupti quos dolores
                    </span>
                  </Link>
                </div>
              </div>

              {/* <div className="comments-area">
                <div className="comments-section">
                  <h3 className="comments-title">Comments</h3>
                  <ol className="comments">
                    <li
                      className="comment even thread-even depth-1"
                      id="comment-1"
                    >
                      <div id="div-comment-1">
                        <div className="comment-theme">
                          <div className="comment-image">
                            <img src={blog3} alt="" />
                          </div>
                        </div>
                        <div className="comment-main-area">
                          <div className="comment-wrapper">
                            <div className="comments-meta">
                              <h4>
                                John Abraham{" "}
                                <span className="comments-date">
                                  January 12,2021 At 9.00am
                                </span>
                              </h4>
                            </div>
                            <div className="comment-area">
                              <p>
                                I will give you a complete account of the
                                system, and expound the actual teachings of the
                                great explorer of the truth,{" "}
                              </p>
                              <div className="comments-reply">
                                <Link
                                  className="comment-reply-link"
                                  to="/blog-single/1"
                                >
                                  <span>Reply</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="children">
                        <li className="comment">
                          <div>
                            <div className="comment-theme">
                              <div className="comment-image">
                                <img src={blog4} alt="" />
                              </div>
                            </div>
                            <div className="comment-main-area">
                              <div className="comment-wrapper">
                                <div className="comments-meta">
                                  <h4>
                                    Lily Watson{" "}
                                    <span className="comments-date">
                                      January 12,2021 At 9.00am
                                    </span>
                                  </h4>
                                </div>
                                <div className="comment-area">
                                  <p>
                                    I will give you a complete account of the
                                    system, and expound the actual teachings of
                                    the great explorer of the truth,{" "}
                                  </p>
                                  <div className="comments-reply">
                                    <Link
                                      className="comment-reply-link"
                                      to="/blog-single/1"
                                    >
                                      <span>Reply</span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul>
                            <li className="comment">
                              <div>
                                <div className="comment-theme">
                                  <div className="comment-image">
                                    <img src={blog5} alt="" />
                                  </div>
                                </div>
                                <div className="comment-main-area">
                                  <div className="comment-wrapper">
                                    <div className="comments-meta">
                                      <h4>
                                        John Abraham{" "}
                                        <span className="comments-date">
                                          January 12,2021 At 9.00am
                                        </span>
                                      </h4>
                                    </div>
                                    <div className="comment-area">
                                      <p>
                                        I will give you a complete account of
                                        the system, and expound the actual
                                        teachings of the great explorer of the
                                        truth,{" "}
                                      </p>
                                      <div className="comments-reply">
                                        <Link
                                          className="comment-reply-link"
                                          to="/blog-single/1"
                                        >
                                          <span>Reply</span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="comment">
                      <div>
                        <div className="comment-theme">
                          <div className="comment-image">
                            <img src={blog3} alt="" />
                          </div>
                        </div>
                        <div className="comment-main-area">
                          <div className="comment-wrapper">
                            <div className="comments-meta">
                              <h4>
                                John Abraham{" "}
                                <span className="comments-date">
                                  January 12,2021 At 9.00am
                                </span>
                              </h4>
                            </div>
                            <div className="comment-area">
                              <p>
                                I will give you a complete account of the
                                system, and expound the actual teachings of the
                                great explorer of the truth,{" "}
                              </p>
                              <div className="comments-reply">
                                <Link
                                  className="comment-reply-link"
                                  to="/blog-single/1"
                                >
                                  <span>Reply</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="comment-respond">
                  <h3 className="comment-reply-title">Post Comments</h3>
                  <form
                    onSubmit={submitHandler}
                    id="commentform"
                    className="comment-form"
                  >
                    <div className="form-textarea">
                      <textarea
                        id="comment"
                        placeholder="Write Your Comments..."
                      ></textarea>
                    </div>
                    <div className="form-inputs">
                      <input placeholder="Website" type="url" />
                      <input placeholder="Name" type="text" />
                      <input placeholder="Email" type="email" />
                    </div>
                    <div className="form-submit">
                      <input id="submit" value="Post Comment" type="submit" />
                    </div>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
          <BlogSidebar blLeft={props.blLeft} author={BlogDetails.author} authorImg={BlogDetails.authorImg} social={BlogDetails.social}/>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
