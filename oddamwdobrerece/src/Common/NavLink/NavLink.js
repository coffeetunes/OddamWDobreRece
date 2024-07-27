import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import PropTypes from 'prop-types';

const NavLink = ({ to, children }) => {
    return (
        <ScrollLink
            to={to}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-gray-700 transition duration-300"
        >
            {children}
        </ScrollLink>
    );
};

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default NavLink;
