import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavLink from '../../Common/NavLink/NavLink';
import Button from '../../Common/Button/Button';
import Container from "../../Common/Container/Container";

const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Container className="absolute w-full left-1/2 transform -translate-x-1/2">
            <div className="flex justify-end space-x-5 mt-10">
                <Button
                    onClick={() => handleNavigate("/login")}
                    className="text-gray-900 hover:text-gray-700 transition duration-300 text-[14px] border-none bg-transparent"
                >
                    Zaloguj
                </Button>
                <Button
                    onClick={() => handleNavigate("/register")}
                    className="text-gray-900 text-[14px] border border-[#FAD648] bg-transparent"
                >
                    Załóż konto
                </Button>
            </div>
            {location.pathname === '/' ? (
                <div className="flex justify-end space-x-14 mt-4 text-lg">
                    <NavLink to="start">Start</NavLink>
                    <NavLink to="explanation">O co chodzi?</NavLink>
                    <NavLink to="about">O nas</NavLink>
                    <NavLink to="whowehelp">Fundacje i organizacje</NavLink>
                    <NavLink to="contact">Kontakt</NavLink>
                </div>
            ) : (
                <div className="flex justify-end mt-4 text-lg">
                    <button
                        onClick={() => handleNavigate("/")}
                        className="text-gray-900 hover:text-gray-700 transition duration-300"
                    >
                        Strona Główna
                    </button>
                </div>
            )}
        </Container>
    );
};

export default Menu;
