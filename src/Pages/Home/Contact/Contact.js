import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-form-area" id="contacts">
            <div className="text-center container contact-form py-3">
                <h1 className="text-white pb-md-2 py-md-1 contact-heading">Ask Anything !!</h1>

                <form className="pb-4 pt-2">
                    <div className="mb-md-3 mb-1">
                        <input className="form-control p-md-3 p-1" type="text" placeholder="Your Name" required />
                    </div>
                    <div className="mb-md-3 mb-1">
                        <input className="form-control p-md-3 p-1" type="email" placeholder="Your Email" required />
                    </div>
                    <div className="mb-md-3 mb-1">
                        <input className="form-control p-md-3 p-1" type="text" placeholder="Your Subject" required />
                    </div>
                    <div className="mb-md-3 mb-1">
                        <textarea placeholder="Your Message" className="form-control p-md-2 p-1 ms-0" rows="4"></textarea>
                    </div>
                    <button className="btn btn-gradient mt-2 py-2 px-lg-5 border-0" type="submit">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;