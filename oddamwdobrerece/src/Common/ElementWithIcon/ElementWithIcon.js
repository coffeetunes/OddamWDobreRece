import React from 'react';
import PropTypes from 'prop-types';
import './ElementWithIcon.scss';

const ElementWithIcon = ({ iconSrc, title, content }) => {
    return (
        <div className="elementWithIcon-container">
            <div className="icon-wrapper">
            <img src={iconSrc} className="element-icon" />
            </div>
            <div className="elementWithIcon-title">{title}</div>
            <p className="elementWithIcon-content">{content}</p>
        </div>
    );
};

ElementWithIcon.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default ElementWithIcon;
