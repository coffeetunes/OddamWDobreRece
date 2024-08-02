import React from 'react';

import "./ContactSection.scss";
import Container from "../../../Common/Container/Container";
import Title from "../../../Common/Title/Title";
import ContactForm from "../../../Components/ContactForm/ContactForm";

const ContactSection = () => {
    return (
        <div className="contactSection" id="contact">
            <Container className="contact-container">
                <div className="flex flex-col gap-4">
                <Title>Skontaktuj się z nami</Title>
                <ContactForm />
                </div>
            </Container>
        </div>
    );
};

export default ContactSection;