import React, { Component } from 'react'
import axios from "axios";

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        lastname: '',
        events: '',
        message: '',
        error: {}
    }

    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = async (e) => {
        e.preventDefault();

        const { name,
            email,
            subject,
            lastname,
            events,
            message, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (subject === '') {
            error.subject = "Please enter your subject";
        }
        if (lastname === '') {
            error.lastname = "Please enter your Lastname";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (message === '') {
            error.message = "Please enter your note";
        }

        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.lastname === '' && error.subject === '' && error.events === '' && error.message === '') {
            this.setState({
                name: '',
                email: '',
                subject: '',
                events: '',
                message: '',
                error: {}
            })
        }

        const data = {name, email, subject, events, message}

        const response = await axios.post(
            "http://localhost:5000/api/contactus",data
        )

        console.log(response.data)

    }

    render(){
        const { name,
            email,
            subject,
            lastname,
            message,
            error } = this.state;

        return(
            <form onSubmit={this.subimtHandler} className="form">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Name"/>
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input value={lastname} onChange={this.changeHandler} type="text" name="lastname" placeholder="Lastname"/>
                            <p>{error.lastname ? error.lastname : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email"/>
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <select className="form-control" onChange={this.changeHandler} value={subject} type="text" name="subject">
                                <option >Subject</option>
                                <option>Family Law</option>
                                <option>Litigation & Dispute Resolution</option>
                                <option>Law of Contracts</option>
                                <option>Education Law</option>
                                <option>Business Law</option>
                            </select>
                            <p>{error.subject ? error.subject : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea onChange={this.changeHandler} id="message" value={message} name="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
export default  ContactForm;