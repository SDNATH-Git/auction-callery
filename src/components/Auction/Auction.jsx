// import React from 'react';
// import { FaRegHeart } from "react-icons/fa";

// const Auction = ({auction}) => {
//     console.log(auction);
//     return (
//         <>


        
//       {/* row 1 */}
//       <tr>
//         <td>
//           <div className="flex items-center gap-3">
//             <div className="avatar">
//               <div className="mask  h-12 w-12">
//                 <img
//                   src={auction.image}
//                   alt="Avatar Tailwind CSS Component" />
//               </div>
//             </div>
//             <div>
//               <div className="font-bold">{auction.title}</div> 
//             </div>
//           </div>
//         </td>
//         <td className='text-center'>
//           ${auction.currentBidPrice}
//         </td>
//         <td className='text-center'>{auction.timeLeft}</td>
//         <th className='text-center'>
//           <button className=" text-center "> <FaRegHeart size={18} /> </button>
//         </th>
//       </tr>


            
//         </>
//     );
// };

// export default Auction;



import React from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Auction = ({ auction, addToFavorites, isFavorited }) => {
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
      <th className='text-center'>
        <button
          className="text-center"
          onClick={() => addToFavorites(auction)}
          disabled={isFavorited}
        >
          {isFavorited ? <FaHeart className="text-red-500" size={18} /> : <FaRegHeart size={18} />}
        </button>
      </th>
    </tr>
  );
};

export default Auction;
