import React, { useState, Fragment } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import PageTitle from "../../components/pagetitle";
import Scrollbar from "../../components/scrollbar";
import { useParams } from "react-router-dom";
import Attorneys from "../../api/attorneys";
import Footer from "../../components/footer";
import Logo from "../../images/logo-top.png";

const AttorneySinglePage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState();
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});
  const { id } = useParams();

  const AttorneysDetails = Attorneys.find((item) => item.Id === id);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (name === "") {
      setError({ name: "Please enter your name" });
    }
    if (email === "") {
      setError({ email: "Please enter your email" });
    }
    if (phone === "") {
      setError({ phone: "Please enter your phone" });
    }
    if (subject === "") {
      setError({ subject: "Please enter your subject" });
    }
    if (message === "") {
      setError({ message: "Please enter your message" });
    }

    if (
      error.name === "" &&
      error.email === "" &&
      error.email === "" &&
      error.phone === "" &&
      error.subject === "" &&
      error.message === ""
    ) {
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <Fragment>
      <Navbar Logo={Logo} />
      <PageTitle
        pageTitle={AttorneysDetails.name}
        pagesub={AttorneysDetails.title}
      />
      <div className="attorney-pg-area section-padding">
        <div className="container">
          <div className="attorney-info-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="attorney-info-img">
                  <img src={AttorneysDetails.AtImg} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="attorney-info-text">
                  <h2>{AttorneysDetails.name}</h2>
                  <ul>
                    {/* <li>Position: <span>Seniour Lawyer</span></li> */}
                    <li>
                      Position:<span>{AttorneysDetails.title}</span>
                    </li>
                    <li>
                      Experience:
                      <span>{AttorneysDetails.experience} Years</span>
                    </li>
                    {/* <li>Address:<span>Millington, Ave, TN 38053</span></li>
                                        <li>Phone:<span>+00 568 746 987</span></li>
                                        <li>Email:<span>youremail@gmail.com</span></li>
                                        <li>Fax:<span>568 746 987</span></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="exprience-area">
            <div className="row">
              <div className="col-lg-12">
                <div className="exprience-wrap">
                  <h2>Professional Experience</h2>
                  <p>{AttorneysDetails.experienceDesc}</p>
                </div>
                <div className="wpo-contact-area ex-wiget">
                  {/* <h2>Contact Me</h2> */}
                  <div className="quote-form">
                    <h2>Get In Touch</h2>
                    <form onSubmit={submitHandler}>
                      <div className="form-group half-col">
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="form-control"
                        />
                        <p>{error.name ? error.name : ""}</p>
                      </div>
                      <div className="form-group half-col">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                        />
                        <p>{error.email ? error.email : ""}</p>
                      </div>
                      <div className="form-group half-col">
                        <input
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                          type="text"
                          name="phone"
                          placeholder="phone"
                          className="form-control"
                        />
                        <p>{error.phone ? error.phone : ""}</p>
                      </div>
                      <div className="form-group half-col">
                        <input
                          onChange={(e) => setSubject(e.target.value)}
                          value={subject}
                          type="text"
                          name="subject"
                          placeholder="subject"
                          className="form-control"
                        />
                        <p>{error.subject ? error.subject : ""}</p>
                      </div>
                      <div>
                        <textarea
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          className="form-control"
                          name="message"
                          id="message"
                          placeholder="Your Question"
                        ></textarea>
                      </div>
                      <div className="submit-btn-wrapper">
                        <button type="submit" className="theme-btn">
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AttorneySinglePage;
