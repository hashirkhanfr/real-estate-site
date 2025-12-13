import React from 'react';

const OpportunityCard = ({ image, alt, size, bookingText }) => {
    return (
        <div className="opportunity-card">
            <div className="opportunity-dot"></div>
            <img src={image} alt={alt} />
            <div className="opportunity-text">
                <span className="opportunity-size">{size}</span>
                <span className="opportunity-booking">{bookingText}</span>
            </div>
        </div>
    );
};

export default OpportunityCard;
