import React from 'react';
import PropTypes from 'prop-types';
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

ElementWithNumber.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default ElementWithNumber;
