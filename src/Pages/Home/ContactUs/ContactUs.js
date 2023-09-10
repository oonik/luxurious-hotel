import React from 'react';
import { useForm } from "react-hook-form";
import Map from '../../../Shared/Map/Map';

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleContact = (data) => {
        console.log(data)
    };
    return (
        <div className='lg:flex items-center m-10 bg-amber-500 p-1'>
            <div className='lg:w-1/2'>
                <Map></Map>
            </div>
            <div className='lg:w-1/2'>
                <form className='card-body'>
                    <h4 className='text-3xl font-bold text-center mb-3 text-white'>CONTACT US</h4>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name"
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered" />
                        {errors.name && <p role="alert" className='text-red-500'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"
                            {...register("email", { required: "Email is required" })}
                            className="input input-bordered" />
                        {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Number</span>
                        </label>
                        <input type="number" placeholder="number"
                            {...register("number", { required: "number is required" })}
                            className="input input-bordered" />
                        {errors.number && <p role="alert" className='text-red-500'>{errors.number?.message}</p>}
                    </div>
                    <textarea {...register("request")} className="textarea textarea-bordered w-full mt-2" placeholder="Special request"></textarea>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;