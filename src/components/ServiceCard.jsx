import React from 'react';

const ServiceCard = ({ image, title, description }) => {
    return (
        <div className="service-card">
            <img src={image} alt={title} />
            <div className="service-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
