import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const BookingModal = ({ room }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const bookingRoom = data => {
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Booking successfully complete',{
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="booking_modal" className="modal-toggle" />
            <div className="modal justify-center">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center mb-4">Book Room</h3>
                    <form onSubmit={handleSubmit(bookingRoom)}>
                        <div className='flex gap-2'>
                            <div>
                                <input type='text' placeholder='Your name' {...register("name", { required: "Name is required" })} className="input input-bordered w-full mb-2" />
                                {errors.name && <p role="alert" className='text-red-400'>{errors.name?.message}</p>}
                            </div>

                            <div>
                                <input type='email' placeholder='Your email' {...register("email", { required: "Email is required" })} className="input input-bordered w-full mb-2" />
                                {errors.email && <p role="alert" className='text-red-400'>{errors.email?.message}</p>}
                            </div>
                        </div>

                        <section className='lg:flex gap-2'>
                            <div>
                                <span className='ml-2'>Check in date</span>
                                <input type='date'  {...register("dateIn", { required: "check in date is required" })} className="input input-bordered w-full mb-2" />
                                {errors.dateIn && <p role="alert" className='text-red-400'>{errors.dateIn?.message}</p>}
                            </div>

                            <div>
                                <span className='ml-2'>Check Out date</span>
                                <input type='date'  {...register("dateOut", { required: "check out date is required" })} className="input input-bordered w-full mb-2" />
                                {errors.dateOut && <p role="alert" className='text-red-400'>{errors.dateOut?.message}</p>}
                            </div>
                        </section>

                        <div className='flex gap-2 mb-2'>
                            <select {...register("adult")} className="input input-bordered w-full">
                                <option value="adult-1">Adult-1</option>
                                <option value="adult-2">Adult-2</option>
                                <option value="adult-3">Adult-3</option>
                            </select>
                            <select {...register("child")} className="input input-bordered w-full">
                                <option value="child-0">Child-0</option>
                                <option value="child-1">Child-1</option>
                                <option value="child-2">Child-2</option>
                                <option value="child-3">Child-3</option>
                            </select>
                        </div>

                        <section className='flex gap-2'>
                            <select {...register("room")} className="input input-bordered w-full">
                                <option value="room-1">room-1</option>
                                <option value="room-2">room-2</option>
                                <option value="room-3">room-3</option>
                            </select>
                            <input type='text' disabled value={room.price} className="input input-bordered w-full mb-2" />
                        </section>
                        <textarea {...register("request")} className="textarea textarea-bordered w-full mt-2" placeholder="Special request"></textarea>

                        <div className='flex justify-center mt-4 mb-0'>
                            <button type="submit" className='btn bg-amber-500 text-white btn-sm w-full rounded-none'>submit</button>
                        </div>
                    </form>
                    <div className="modal-action justify-center mt-1">
                        <label htmlFor="booking_modal" className="btn bg-black w-full text-white btn-sm rounded-none">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;