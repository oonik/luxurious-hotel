import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [book, setBook] = useState(null);

    const { data: bookings = [], isLoading, refetch } = useQuery({
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
    // Delete book item
    const handleDeleteBooking = (id) => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                };
            });
    };

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
                            <th scope="col" className='px-6 py-3'>Check In Date</th>
                            <th scope="col" className='px-6 py-3'>Check Out Date</th>
                            <th scope="col" className='px-6 py-3'>Email</th>
                            <th scope="col" className='px-6 py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((book, i) => <tr
                                key={book._id}
                                className='bg-white border-b'
                                >
                                <th scope="row" className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                    {i + 1}
                                </th>
                                <td className='px-6 py-4'>{book.name}</td>
                                <td className='px-6 py-4'>{book.dateIn}</td>
                                <td className='px-6 py-4'>{book.dateOut}</td>
                                <td className='px-6 py-4'>{book.email}</td>
                                <td className='px-6 py-4'>
                                    <label
                                        onClick={() => setBook(book)}
                                        htmlFor="confirmation_modal"
                                        className="btn btn-sm bg-amber-500">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                book && <ConfirmationModal
                    title={`Are you sure you want delete ${book.name}?`}
                    description={'You can delete it do not undo'}
                    handleDelete={() => handleDeleteBooking(book._id)}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyBooking;