import React, { useEffect, useState } from 'react';
import Auction from '../Auction/Auction';

const Auctions = () => {

    const [auctions,setAuctions] =useState([])

    useEffect(()=>{
        fetch("auction.json")
        .then(res=>res.json())
        .then((data)=>setAuctions(data))
    },[])
    // console.log(auctions);


    return (
        <>

            
            {
               auctions.map(auction=> <Auction key={auction.id} auction={auction}></Auction>)
            }
        
        </>
    );
};

export default Auctions;