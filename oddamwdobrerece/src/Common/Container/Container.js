import React from 'react';

const Container = ({ children, className = '' }) => {
    return (
        <div className={`max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

export default Container;
