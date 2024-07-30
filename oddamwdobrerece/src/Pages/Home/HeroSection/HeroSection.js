import React from 'react';
import './HeroSection.scss';
import Title from "../../../Common/Title/Title";

import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div id={`start`} className="flex h-[960px]">
                <div className="bg-home-hero bg-cover bg-right flex items-center justify-center">
                </div>
                <div className="w-1/2 flex flex-col items-center justify-left pt-[21rem]">
                    <Title>
                        Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce
                    </Title>
                    <div className="mt-8 flex space-x-11">
                        <button className="custom-button" onClick={() => handleNavigate('/login')}>
                            ODDAJ RZECZY
                        </button>
                        <button className="custom-button" onClick={() => handleNavigate('/login')}>
                            ZORGANIZUJ ZBIÓRKĘ
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default HeroSection;