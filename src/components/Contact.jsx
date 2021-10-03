import React from 'react';
import './Contact.css';
import contactimage from './img/contact.png'
export default function Contact() {
    return (
        <>
            <div id="contact">
                <div className="s-heading">
                    <h1>Contact Us</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                </div>
                <div className="contact-section">
                    <div className="contact-us">
                        <div className="contact-map">
                            <img src={contactimage} alt="" />
                        </div>
                        <div className="contact-form">
                            <h1>Send Us a Message!</h1>
                            <form action="">
                                <input type="text" placeholder="Enter Name" className="contact-form-text" />
                                <input type="email" placeholder="Enter Email" className="contact-form-text" />
                                <textarea name="textarea" id="textarea" placeholder="Your Message Here..."
                                    className="contact-form-textarea"></textarea></form>

                            <input type="submit" className="btn contact-form-btn" name="Submit" />
                        </div>
                    </div>
                </div>
            </div>
            </>
            )
}
