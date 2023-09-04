import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Star from '../../../Shared/Star/Star';
import { FaBath, FaBed } from 'react-icons/fa';
import { AiOutlineWifi } from "react-icons/ai";

const RoomCardDetails = () => {
    const room = useLoaderData();
    const { title, picture, about, bad, bath, wifi, rating, price } = room;
    return (
        <div className='m-10'>
            <div className="card rounded-none bg-base-100 shadow-xl lg:shadow-none">
                <div className='flex flex-col items-center'>
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <p className='bg-amber-500 w-24 text-center text-white rounded'>{price}</p>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold justify-center">
                        {title}
                        <Star rating={rating}></Star>
                    </h2>
                    <div className='grid grid-cols-3 items-start divide-x mb-2'>
                        <p className='flex items-center justify-evenly text-center'>
                            <span className='text-amber-500'><FaBed></FaBed></span>{bad}</p>

                        <p className='flex items-center justify-evenly text-center'>
                            <span className='text-amber-500'><FaBath></FaBath></span>{bath}</p>

                        <p className='flex items-center justify-evenly text-center'>
                            <span className='text-amber-500'><AiOutlineWifi></AiOutlineWifi></span>{wifi}</p>
                    </div>
                    <p>{about}</p>
                    <div className="card-actions justify-around mt-4">
                    <Link to='/'>
                        <button className="btn bg-black text-white btn-sm rounded-none">Back Home</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCardDetails;