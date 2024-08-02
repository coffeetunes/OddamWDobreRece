import React from 'react';
import './ElementWithNumber.scss';

const ElementWithNumber = ({ number, title, children }) => {
    return (
        <div className="element-container">
            <div className="element-number">{number}</div>
            <div className="element-title">{title}</div>
            <p className="element-content">{children}</p>
        </div>
    );
};


export default ElementWithNumber;
