import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ rating }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, i) => {
        const number = i + 0.5;
        return (
            <span key={i}>
              {
                rating >= i + 1 ? <FaStar></FaStar> : rating >= number ? <FaStarHalfAlt></FaStarHalfAlt>: <AiOutlineStar></AiOutlineStar>
              }
            </span>
        )
    });
    return (
        <div className='flex justify-center items-center my-2 text-amber-500'>
            {ratingStar}
        </div>
    );
};

export default Star;