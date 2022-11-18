import React, { Component } from "react";
import axios from "axios";
import cimg from "../../images/signature.jpg";

class Consulting extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    events: "",
    message: "",
    error: {},
  };

  changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = "";

    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  subimtHandler = async (e) => {
    e.preventDefault();

    const { name, email, subject, events, message, error } = this.state;

    if (name === "") {
      error.name = "Please enter your name";
    }
    if (email === "") {
      error.email = "Please enter your email";
    }
    if (subject === "") {
      error.subject = "Please enter your subject";
    }
    if (events === "") {
      error.events = "Select your event list";
    }
    if (message === "") {
      error.message = "Please enter your note";
    }

    if (error) {
      this.setState({
        error,
      });
    }
    if (
      error.name === "" &&
      error.email === "" &&
      error.email === "" &&
      error.subject === "" &&
      error.events === "" &&
      error.message === ""
    ) {
      this.setState({
        name: "",
        email: "",
        subject: "",
        events: "",
        message: "",
        error: {},
      });
    }

    const data = {name, email, subject, events, message}

    const response = await axios.post(
        "https://owano-email-handler.vercel.app/api/freeconsult",data
    )

    console.log(response.data)
  };

  render() {
    const { name, email, subject, error } = this.state;

    return (
      <section className="wpo-contact-section section-padding">
        <div className="container">
          <div className="wpo-contact-section-wrapper">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-contact-form-area">
                  <h2>Free Consulting</h2>
                  <form onSubmit={this.subimtHandler} className="form">
                    <div className="row justify-content-center">
                      <div className="col-lg-12 col-12">
                        <div className="form-field">
                          <input
                            className="form-control"
                            value={name}
                            onChange={this.changeHandler}
                            type="text"
                            name="name"
                            placeholder="Your Name"
                          />
                          <p>{error.name ? error.name : ""}</p>
                        </div>
                      </div>
                      <div className="col-lg-12 col-12">
                        <div className="form-field">
                          <input
                            className="form-control"
                            onChange={this.changeHandler}
                            value={email}
                            type="email"
                            name="email"
                            placeholder="Your Email"
                          />
                          <p>{error.email ? error.email : ""}</p>
                        </div>
                      </div>
                      <div className="col-lg-12 col-12">
                        <div className="form-field">
                          <select
                            className="form-control"
                            onChange={this.changeHandler}
                            value={subject}
                            type="text"
                            name="subject"
                          >
                            <option>Subject</option>
                            <option>Family Law</option>
                            <option>Litigation & Dispute Resolution</option>
                            <option>Law of Contracts</option>
                            <option>Education Law</option>
                            <option>Business Law</option>
                          </select>
                          <p>{error.subject ? error.subject : ""}</p>
                        </div>
                      </div>
                      <div className="fullwidth">
                        <textarea
                          className="form-control"
                          name="note"
                          id="c-note"
                          placeholder="Message..."
                        ></textarea>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-submit">
                          <button type="submit" className="theme-btn">
                            Make An Appointment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="border-style"></div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-contact-content">
                  <h2>
                    We are here to protect your rights and serve your needs with experience
                  </h2>
                  <div className="wpo-contact-content-inner">
                    <p>
                      We are a firm of highly dynamic, creative and talented
                      people, ready to go that extra mile to create premium
                      experience for our clientele. It’s our team that make
                      Owano & Associates a great place to work, and the reason
                      why our clients choose to work with us on their most
                      complex legal challenges. This is the foundation on which
                      our successful and innovative reputation is based.
                    </p>
                    <p>
                      We have created Owano & Associates to reinvent legal
                      practice and industry standards, developing first-class
                      solutions for our clients, partners, employees, and
                      shareholders. Today I am proud to say that we have
                      achieved this challenging goal in so many differentiating
                      and effective ways.
                    </p>
                    <div className="signeture">
                      <h4>Michael Owano</h4>
                      <p>Managing Partner</p>
                      <span>
                        <img src={cimg} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="visible-text">
              <span>C</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Consulting;
