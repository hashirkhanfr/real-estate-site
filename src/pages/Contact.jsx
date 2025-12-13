import React from 'react';
import '../styles/contact.css';

const Contact = () => {
    return (
        <>
            <section className="socials-section">
                <div className="socials-content">
                    <h1 className="socials-title">SOCIALS</h1>
                    <p className="socials-desc">
                        Stay connected with Al Rafay Associates for the latest property listings and investment updates in Islamabad. We are active across all major platforms to provide you with real-time market insights and instant support for your housing needs.
                    </p>
                </div>

                <div className="socials-links">
                    <div className="social-item">
                        <div className="social-icon whatsapp-bg">
                            <img src="https://placehold.co/40x40/25D366/white?text=W" alt="WhatsApp" />
                        </div>
                        <div className="social-text">
                            <span>+92 333 9555482</span>
                            <span>+92 333 9112382</span>
                        </div>
                    </div>

                    <div className="social-item">
                        <div className="social-icon facebook-bg">
                            <img src="https://placehold.co/40x40/3b5998/white?text=f" alt="Facebook" />
                        </div>
                        <div className="social-text">
                            <span>@alrafayassociates</span>
                        </div>
                    </div>

                    <div className="social-item">
                        <div className="social-icon youtube-bg">
                            <img src="https://placehold.co/40x40/FF0000/white?text=Y" alt="YouTube" />
                        </div>
                        <div className="social-text">
                            <span>@alrafayassociates</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-form-section">
                <div className="form-header">
                    <h2>Get in touch</h2>
                    <p>Let us know how we can help you find your dream property</p>
                </div>

                <form className="main-contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your full name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="+92 333 9999999" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Your message..."></textarea>
                    </div>

                    <button type="submit" className="btn-primary full-width-btn">Send message</button>
                </form>
            </section>
        </>
    );
};

export default Contact;
