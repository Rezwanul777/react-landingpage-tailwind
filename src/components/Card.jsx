import React from 'react';
import blogImg1 from '../assets/blog-1.png'
import StarRating from './StarRating';

const Card = () => {
   return (
      <div className='bg-white drop-shadow-md rounded-2xl overflow-hidden'>
         <img src={blogImg1} alt="blog"  className="h-40 w-full object-cover"/>
         <div className='p-5 border border-b'>
            <h1 className='py-2 truncate'>Javascript</h1>
            <StarRating />
        </div>
      </div>
   );
};

export default Card;