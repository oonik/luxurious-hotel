import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import OurRoom from '../../OurRoom/OurRoom';
import LuxuryLiving from '../LuxuryLiving/LuxuryLiving';
import OurServices from '../OurServices/OurServices';
import ClientSay from '../ClientSay/ClientSay';
import OurTeam from '../OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <OurRoom></OurRoom>
            <LuxuryLiving></LuxuryLiving>
            <OurServices></OurServices>
            <ClientSay></ClientSay>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;