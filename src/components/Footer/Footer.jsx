import React from 'react';

const Footer = () => {
    return (
        <div>

            <div className="bg-[#FFFFFF] py-16 text-center space-y-4">
                <h3 className='text-2xl text-[#003EA4] font-semibold'>Auction<span className='text-[#FFD337] font-extrabold'>Gallery</span></h3> 

                <div className=" flex items-center justify-center gap-4 ">
                    <h4 className='font-semibold text-xl'>Bid.</h4>
                    <h4 className='font-semibold text-xl'>Win.</h4>
                    <h4 className='font-semibold text-xl'>Own.</h4>
                </div>

                <div className=' flex items-center justify-center gap-8'>
                     <a href="" className=' font-semibold'>Home</a>
                     <a href="" className=' font-semibold'>Auctions</a>
                     <a href="" className='font-semibold'>Categories</a>
                     <a href="" className='font-semibold'>How to works</a>
                </div>

                <p className='font-semibold'>© 2025 AuctionHub. All rights reserved.</p>

            </div>
            
        </div>
    );
};

export default Footer;