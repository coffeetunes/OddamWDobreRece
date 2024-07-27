import React from 'react';
import Menu from "../../Components/Menu/Menu";
import HeroSection from "./HeroSection/HeroSection";
import ExplanationSection from "./ExplanationSection/ExplanationSection";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import WhoWeHelpSection from "./WhoWeHelpSection/WhoWeHelpSection";
import ContactSection from "./ContactSection/ContactSection";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <ExplanationSection />
            <AboutUsSection />
            <WhoWeHelpSection />
            <ContactSection />
        </div>
    );
};

export default Home;