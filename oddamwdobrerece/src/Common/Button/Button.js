// src/Common/Button/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, className = '', disabled = false }) => {
    const baseClasses = 'py-2 px-4 transition duration-300';
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-yellow-300';

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${className} ${disabledClasses}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;
