import { useQuery } from '@tanstack/react-query';
import RoomCard from './RoomCard/RoomCard';

const OurRoom = () => {

    const { data: rooms = [], isLoading } = useQuery({
        queryKey: ['rooms'],
        queryFn: async () => {
            const res = await fetch('room.json')
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='m-10'>
            <h4 className='text-2xl text-amber-400 font-bold text-center'>Our Room</h4>
            <h1 className='text-5xl font-bold text-center'>Explore Our <span className='text-amber-500'>ROOMS</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16'>
                {
                    rooms?.map(room => <RoomCard
                        key={room._id}
                        room={room}
                    ></RoomCard>)
                }
            </div>
        </div>
    );
};

export default OurRoom;