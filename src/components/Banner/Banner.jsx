import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className=' grid grid-cols-2 content-center  w-11/12 m-auto py-36'>
                    <div className=''>
                        <h1 className=' text-4xl font-bold text-white'>Bid on Unique Items from <br /> Around the World</h1>

                    <h1 className='text-xl font-light text-white mt-4'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</h1>

                    <button className='btn text-xl  font-bold p-6 rounded-4xl bg-[#FFFFFF] mt-4'>Explore Auctions</button>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Banner;