import './Title.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Decoration from '../../assets/Decoration.svg';

const Title = ({ children, className = '' }) => {
    return (
        <div className={`title-container flex flex-col items-center ${className}`}>
            <p className="text-4xl text-center title-text">
                {children}
            </p>
            <img src={Decoration} alt="Decoration" className="mt-4" />
        </div>
    );
};

Title.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Title;