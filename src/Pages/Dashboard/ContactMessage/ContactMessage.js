import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';

const ContactMessage = () => {
    const {data: messages=[], isLoading} = useQuery({
        queryKey: ['contact'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/contact',{
                headers: {
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                        <tr>
                            <th scope="col" className='px-6 py-3'></th>
                            <th scope="col" className='px-6 py-3'>Name</th>
                            <th scope="col" className='px-6 py-3'>Email</th>
                            <th scope="col" className='px-6 py-3'>Number</th>
                            <th scope="col" className='px-6 py-3'>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            messages?.map((message, i) => <tr
                                key={message._id}
                                className='bg-white border-bF'
                            >
                                <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                    {i + 1}
                                </th>
                                <td className='px-6 py-4'>{message.name}</td>
                                <td className='px-6 py-4'>{message.email}</td>
                                <td className='px-6 py-4'>{message.number}</td>
                                <td className='px-6 py-4'>{message.request}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ContactMessage;