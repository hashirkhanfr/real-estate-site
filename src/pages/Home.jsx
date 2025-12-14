import React from 'react';
import heroImage from '../assets/images/hero-image.webp';
import logoBahria from '../assets/images/logo_Bahria.png';
import logoDHA from '../assets/images/logo_DHA.png';
import logoFaisalHills from '../assets/images/logo_FaisalHills.png';
import logoFaisalTown from '../assets/images/logo_FaisalTown.png';
import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import DealItem from '../components/DealItem';
import OpportunityCard from '../components/OpportunityCard';

const Home = () => {
    return (
        <>
            <SEO title="Al Rafay Associates" />
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Invest In Your Future</h1>
                    <p>Unlocking Value, Maximizing Investments: Al Rafay Associates Your Trusted Partner in Real Estate Excellence</p>
                    <button className="btn-primary">Get Started</button>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="Real Estate" />
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Our Services</h2>
                <div className="services-grid">
                    <ServiceCard
                        image="https://placehold.co/60x60"
                        title="SELL"
                        description="without any hassle"
                    />
                    <ServiceCard
                        image="https://placehold.co/60x60"
                        title="BUY"
                        description="without any fear"
                    />
                    <ServiceCard
                        image="https://placehold.co/60x60"
                        title="RENT"
                        description="at your ease"
                    />
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">We Deal In</h2>
                <div className="deal-grid">
                    <DealItem image={logoFaisalTown} alt="Faisal Town" />
                    <DealItem image={logoBahria} alt="Bahria Town" />
                    <DealItem image={logoDHA} alt="DHA" />
                    <DealItem image={logoFaisalHills} alt="Faisal Hills" />
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Hot Investment Opportunities</h2>
                <div className="opportunities-grid">
                    <OpportunityCard
                        image="https://placehold.co/100x100"
                        alt="Opportunity 1"
                        size="6 Marla"
                        bookingText={<>BOOKING<br />FOR JUST<br />PKR 699,999</>}
                    />
                    <OpportunityCard
                        image="https://placehold.co/100x100"
                        alt="Opportunity 2"
                        size="10 Marla"
                        bookingText={<>BOOKING<br />FOR JUST<br />PKR 999,999</>}
                    />
                    <OpportunityCard
                        image="https://placehold.co/100x100"
                        alt="Opportunity 3"
                        size="8 Marla"
                        bookingText={<>BOOKING<br />FOR JUST<br />PKR 899,999</>}
                    />
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Get In Touch</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="me@company.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Your message..."></textarea>
                    </div>
                    <button type="submit" className="btn-send">Send message</button>
                </form>
            </section>
        </>
    );
};

export default Home;
