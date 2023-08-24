import React from 'react';
import Star from '../../../Shared/Star/Star';
import { FaBath, FaBed } from 'react-icons/fa';
import { AiOutlineWifi } from "react-icons/ai";

const RoomCard = ({ room }) => {
    const { title, picture, about, bad, bath, wifi, rating, price } = room;
    return (
        <div>
            <div className="card rounded-none bg-base-100 shadow-xl">
                <div className='relative'>
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <p className='bg-amber-500 w-24 text-center text-white rounded absolute lg:top-52 left-3'>{price}</p>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold justify-between">
                        {title}
                        <Star rating={rating}></Star>
                    </h2>
                    <div className='grid grid-cols-3 items-start divide-x '>
                        <p className='flex items-center justify-evenly text-center'>
                            <span className='text-amber-500'><FaBed></FaBed></span>{bad}</p>

                        <p className='flex items-center justify-evenly text-center'>
                            <span className='text-amber-500'><FaBath></FaBath></span>{bath}</p>

                        <p className='flex items-center justify-evenly text-center'>
                            <span className='text-amber-500'><AiOutlineWifi></AiOutlineWifi></span>{wifi}</p>
                    </div>
                    <p>{about.length > 100 ? about.slice(0, 100) + '...' : about}</p>
                    <div className="card-actions justify-around">
                        <button className="btn bg-amber-500 text-white btn-sm rounded-none ">VIEW DETAIL</button>
                        <button className="btn bg-black text-white btn-sm rounded-none">BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;