import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import OurRoom from '../../OurRoom/OurRoom';
import LuxuryLiving from '../LuxuryLiving/LuxuryLiving';
import OurServices from '../OurServices/OurServices';
import ClientSay from '../ClientSay/ClientSay';
import OurTeam from '../OurTeam/OurTeam';
import OurPartner from '../OurPartner/OurPartner';
import Map from '../../../Shared/Map/Map';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <OurRoom></OurRoom>
            <LuxuryLiving></LuxuryLiving>
            <OurServices></OurServices>
            <OurPartner></OurPartner>
            <ClientSay></ClientSay>
            <OurTeam></OurTeam>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;