import React from 'react';

const DealItem = ({ image, alt }) => {
    return (
        <img className="deal-item" src={image} alt={alt} />
    );
};

export default DealItem;
