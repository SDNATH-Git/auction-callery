

import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Auction = ({ auction, addToFavorites, isFavorite }) => {
  const handleClick = () => {
    if (!isFavorite) {
      addToFavorites(auction);
    }
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask h-12 w-12">
              <img src={auction.image} alt={auction.title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{auction.title}</div>
          </div>
        </div>
      </td>
      <td className='text-center'>${auction.currentBidPrice}</td>
      <td className='text-center'>{auction.timeLeft}</td>
      <td className='text-center'>
        <button
  onClick={handleClick}
  disabled={isFavorite}
  className={`text-xl transition duration-300 ${
    isFavorite
      ? 'text-red-500  cursor-not-allowed '
      : 'text-gray-400 cursor-pointer'
  }`}
>
  {isFavorite ? <FaHeart /> : <FaRegHeart />}
</button>
      </td>
    </tr>
  );
};

export default Auction;
