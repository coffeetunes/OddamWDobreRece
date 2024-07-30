import React from 'react';
import ElementWithNumber from "../../../Common/ElementWithNumber/ElementWithNumber";
import Container from "../../../Common/Container/Container";

import "./ExplanationSection.scss"
import Title from "../../../Common/Title/Title";
import ElementWithIcon from "../../../Common/ElementWithIcon/ElementWithIcon";

import Icon1 from "../../../assets/Icon-1.svg"
import Icon2 from "../../../assets/Icon-2.svg"
import Icon3 from "../../../assets/Icon-3.svg"
import Icon4 from "../../../assets/Icon-4.svg"
import {useNavigate} from "react-router-dom";


const ExplanationSection = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };    return (
        <div>
            <div className="threeColumns">
                <Container>
                    <div className="threeColumns-container"  id="explanation">
                        <ElementWithNumber number="10" title="ODDANYCH WORKÓW">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                            elementuma. Aliquam erat volutpat.
                        </ElementWithNumber>
                        <ElementWithNumber number="5" title="WSPARTYCH ORGANIZACJI">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                            elementuma. Aliquam erat volutpat.
                        </ElementWithNumber>
                        <ElementWithNumber number="7" title="ZORGANIZOWANYCH ZBIÓREK">
                            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                            elementuma. Aliquam erat volutpat.
                        </ElementWithNumber>
                    </div>
                </Container>
            </div>
            <Title>Wystarczą 4 proste kroki</Title>
            <div className="fourColumns">
                <ElementWithIcon iconSrc={Icon1} title="Wybierz rzeczy" content="ubrania, zabawki, sprzęt i inne"/>
                <ElementWithIcon iconSrc={Icon2} title="Spakuj je" content="skorzystaj z worków na śmieci"/>
                <ElementWithIcon iconSrc={Icon3} title="Zdecyduj komu chcesz pomóc" content="wybierz zaufane miejsce"/>
                <ElementWithIcon iconSrc={Icon4} title="Zamów kuriera" content="kurier przyjedzie w dogodnym terminie"/>
            </div>
            <div className="flex flex-col justify-center items-center pt-9 pb-20 ">
                <button className="custom-button" onClick={() => handleNavigate('/login')}>
                    ODDAJ RZECZY
                </button>
            </div>
        </div>
    );
};

export default ExplanationSection;