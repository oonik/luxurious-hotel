import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';

const AllUsers = () => {

    const {data: users=[], isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/users', {
                headers: {
                    authorization : `bearer ${localStorage.getItem('accessToken')}`
                },
            })
           const data = await res.json();
           return data;
        }
    });

    if(isLoading){
       return <Loading></Loading>
    };
    return (
        <div>

        <div className="overflow-x-auto">
            <table className="table table-auto min-w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, i) => <tr key={user._id}>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user._id}</td>
                            <td>{user.email}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    </div>
    );
};

export default AllUsers;