import { useQuery } from '@tanstack/react-query';
import RoomCard from './RoomCard/RoomCard';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../../Shared/BookingModal/BookingModal';
import { useState } from 'react';
import PrivateRoute from '../../Routes/PrivateRoute/PrivateRoute';

const OurRoom = () => {
    const [room, setRoom] = useState(null);
    const { data: rooms = [], isLoading } = useQuery({
        queryKey: ['rooms'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/rooms')
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    };

    return (
        <div className='m-10'>
            <h4 className='text-xl lg:text-2xl text-amber-500 font-bold text-center'>OUR ROOM</h4>
            <h1 className='text-3xl lg:text-5xl font-bold text-center'>Explore Our <span className='text-amber-500'>ROOMS</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16'>
                {
                    rooms?.map(room => <RoomCard
                        key={room._id}
                        room={room}
                        setRoom={setRoom}
                    ></RoomCard>)
                }
            </div>
            {
                room && <BookingModal
                room={room}
                ></BookingModal>
            }
        </div>
    );
};

export default OurRoom;