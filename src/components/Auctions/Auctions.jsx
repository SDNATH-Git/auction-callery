

import React, { useEffect, useState } from 'react';
import Auction from '../Auction/Auction';

const Auctions = ({ addToFavorites, favorites }) => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch("auction.json")
      .then(res => res.json())
      .then((data) => setAuctions(data));
  }, []);
  console.log(auctions);

  return (
    <>
      {
        auctions.map(auction => (
          <Auction
            key={auction.id}
            auction={auction}
            addToFavorites={addToFavorites}
            isFavorite={favorites.some(fav => fav.id === auction.id)}
          />
        ))
      }
    </>
  );
};

export default Auctions;
