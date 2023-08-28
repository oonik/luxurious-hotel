import React from 'react';
import TeamCard from './TeamCard';

const OurTeam = () => {
    const teams = [
        {
            _id: 1,
            name: "Anik Sarkar",
            img: "https://i.postimg.cc/TwPJZrYW/team-1.jpg",
            profession: "HR"
        },
        {
            _id: 2,
            name: "Anik Sarkar",
            img: "https://i.postimg.cc/SKdGTZqh/team-2.jpg",
            profession: "CEO"
        },
        {
            _id: 3,
            name: "Anik Sarkar",
            img: "https://i.postimg.cc/0yd3v0xt/team-3.jpg",
            profession: "Data Management"
        },
        {
            _id: 4,
            name: "Anik Sarkar",
            img: "https://i.postimg.cc/43f0xHxX/team-4.jpg",
            profession: "HR"
        },
    ]
    return (
        <div className='text-center m-10 my-20'>
            <h4 className='text-xl lg:text-2xl font-bold text-amber-500'>OUR TEAM</h4>
            <h1 className='text-3xl lg:text-5xl font-bold mt-2'>Explore Our <span className='text-amber-500'>STAFFS</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10'>
                {
                    teams.map(team => <TeamCard
                    key={team._id}
                    team={team}
                    ></TeamCard>)
                }
            </div>
        </div>
    );
};

export default OurTeam;