import React, {useEffect} from 'react';
import HeroSection from "./HeroSection/HeroSection";
import ExplanationSection from "./ExplanationSection/ExplanationSection";
import AboutUsSection from "./AboutUsSection/AboutUsSection";
import WhoWeHelpSection from "./WhoWeHelpSection/WhoWeHelpSection";
import ContactSection from "./ContactSection/ContactSection";


const Home = () => {
    useEffect(() => {
        document.title = "Oddam w dobre ręce!";
    }, []);
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