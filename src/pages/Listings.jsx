import React from 'react';
import '../styles/listings.css';

const Listings = () => {
    return (
        <section className="listings-section">
            <h1 className="page-title">Housing Projects</h1>

            <div className="listings-grid">
                <div className="listing-card">
                    <div className="card-image">
                        <img src="https://placehold.co/400x300/1a1a1a/white?text=Project+Img" alt="Project Image" />
                    </div>
                    <div className="card-details">
                        <h3>RUDN ENCLAVE</h3>
                        <p className="location">Location: Adiala Road, RWP</p>
                        <p className="description">Experience luxury living with state-of-the-art amenities and prime location access.</p>
                    </div>
                </div>

                <div className="listing-card">
                    <div className="card-image">
                        <img src="https://placehold.co/400x300/1a1a1a/white?text=Project+Img" alt="Project Image" />
                    </div>
                    <div className="card-details">
                        <h3>BLUE WORLD CITY</h3>
                        <p className="location">Location: Chakri Road</p>
                        <p className="description">The world's first purpose-built tourist city offering massive ROI potential.</p>
                    </div>
                </div>

                <div className="listing-card">
                    <div className="card-image">
                        <img src="https://placehold.co/400x300/1a1a1a/white?text=Project+Img" alt="Project Image" />
                    </div>
                    <div className="card-details">
                        <h3>KINGDOM VALLEY</h3>
                        <p className="location">Location: M-2 Motorway</p>
                        <p className="description">Affordable housing scheme under Naya Pakistan Housing Program.</p>
                    </div>
                </div>

                <div className="listing-card">
                    <div className="card-image">
                        <img src="https://placehold.co/400x300/1a1a1a/white?text=Project+Img" alt="Project Image" />
                    </div>
                    <div className="card-details">
                        <h3>DHA ISLAMABAD</h3>
                        <p className="location">Location: GT Road</p>
                        <p className="description">Premium defense housing community with secure environment and top facilities.</p>
                    </div>
                </div>

                <div className="listing-card">
                    <div className="card-image">
                        <img src="https://placehold.co/400x300/1a1a1a/white?text=Project+Img" alt="Project Image" />
                    </div>
                    <div className="card-details">
                        <h3>BAHRIA TOWN</h3>
                        <p className="location">Location: Phase 8, RWP</p>
                        <p className="description">Modern infrastructure and commercial hubs making it ideal for business and living.</p>
                    </div>
                </div>

                <div className="listing-card">
                    <div className="card-image">
                        <img src="https://placehold.co/400x300/1a1a1a/white?text=Project+Img" alt="Project Image" />
                    </div>
                    <div className="card-details">
                        <h3>PARK VIEW CITY</h3>
                        <p className="location">Location: Malot Road</p>
                        <p className="description">Beautiful scenic views with eco-friendly infrastructure and modern housing.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Listings;
