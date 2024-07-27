import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavLink from '../../Common/NavLink/NavLink';
import Button from '../../Common/Button/Button';
import Container from "../../Common/Container/Container";

const Menu = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Container>
            <div className="flex justify-end space-x-5 mt-10">
                <Button
                    onClick={() => handleNavigate("/login")}
                    className="bg-yellow-400 text-gray-900"
                >
                    Zaloguj
                </Button>
                <Button
                    onClick={() => handleNavigate("/register")}
                    className="bg-yellow-400 text-gray-900"
                >
                    Załóż konto
                </Button>
            </div>
            <div className="flex justify-end space-x-14 mt-4 text-lg">
                <NavLink to="start">Start</NavLink>
                <NavLink to="about">O co chodzi?</NavLink>
                <NavLink to="us">O nas</NavLink>
                <NavLink to="foundations">Fundacje i organizacje</NavLink>
                <NavLink to="contact">Kontakt</NavLink>
            </div>
        </Container>
    );
};

export default Menu;
