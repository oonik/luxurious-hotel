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
    const handleDeleteBooking = (id) =>{
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "DELETE",
            headers: {
                authorization : `bearer ${localStorage.getItem('accessToken')}`
            },
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
            };
        });
    };
  
    if (isLoading) {
        return <Loading></Loading>
    };
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table table-auto">
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
                                <label 
                                onClick={()=>setBook(book)} 
                                htmlFor="confirmation_modal"
                                className="btn btn-sm bg-amber-500">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
          {
            book &&  <ConfirmationModal
            title={`Are you sure you want delete ${book.name}?`}
            description={'You can delete it do not undo'}
            handleDelete={()=> handleDeleteBooking(book._id)}
            ></ConfirmationModal>
          }
        </div>
    );
};

export default MyBooking;