import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MyBooking = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${user?.email}`, {
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
    }
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-auto min-w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Check In Date</th>
                            <th>Check Out Date</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((book, i) => <tr key={book._id}>
                                <th>{i + 1}</th>
                                <td>{book.name}</td>
                                <td>{book.dateIn}</td>
                                <td>{book.dateOut}</td>
                                <td>{book.email}</td>
                                <td>
                                    <button className='btn btn-sm bg-amber-500'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyBooking;