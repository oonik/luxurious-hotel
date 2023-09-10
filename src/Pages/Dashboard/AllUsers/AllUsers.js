import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';

const AllUsers = () => {

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
            })
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    };
    return (
        <div>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                        <tr>
                            <th scope="col" className='px-6 py-3'></th>
                            <th scope="col" className='px-6 py-3'>Name</th>
                            <th scope="col" className='px-6 py-3'>ID</th>
                            <th scope="col" className='px-6 py-3'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr
                                key={user._id}
                                className='bg-white border-bF'
                            >
                                <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                    {i + 1}
                                </th>
                                <td className='px-6 py-4'>{user.name}</td>
                                <td className='px-6 py-4'>{user._id}</td>
                                <td className='px-6 py-4'>{user.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;