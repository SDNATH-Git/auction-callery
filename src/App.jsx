
// import './App.css'
// import Auctions from './components/Auctions/Auctions'
// import Banner from './components/Banner/Banner'
// import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar/Navbar'
// import { FaRegHeart } from "react-icons/fa";

// function App() {


//   return (
//     <>
//      <Navbar></Navbar>
//      <Banner></Banner>
//      <div className=' bg-gray-300'>

//         <div className='w-11/12 m-auto py-20'>
//             <div>
//                 <h1 className='text-3xl font-bold text-[#0E2954]'>Active Auctions</h1>
//                 <p className='font-normal my-3'>Discover and bid on extraordinary items</p>
//             </div>

// <div className=' flex justify-between  gap-6 my-8'>

//      <div className='w-[70%] bg-[#FFFFFF] rounded-3xl shadow-xs py-6'>

// <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
        
//         <th>Items</th>
//         <th>Current Bid</th>
//         <th>Time Left</th>
//         <th>Bid Now</th>
//       </tr>
//     </thead>
 
//     <tbody> 
//               <Auctions></Auctions>
//     </tbody>


//   </table>
// </div>
//       </div>

//     <div className='w-[30%] bg-[#FFFFFF] rounded-3xl shadow-xs py-6'>
//       <div className=' flex justify-center items-center gap-2 py-2'>
//         <FaRegHeart size={20} />
//         <h1 className='text-xl font-bold'>Favorite Items</h1>
//       </div>
//       <p className=' border-b border-solid border-gray-200'></p>


//       <div className='text-center py-8'>
//         <h1 className='text-xl font-semibold mb-2'>No favorites yet</h1>
//         <p>Click the heart icon on any item <br /> to add it to your favorites</p>
//       </div>

//       <p className=' border-b border-solid border-gray-200'></p>

//       <div className=' flex justify-between items-center p-4'>
//         <h1 className='text-xl font-bold'>Total bids Amount</h1>
//         <h2 className='text-xl font-bold '>$0000</h2>
//       </div>
                   

//     </div>
            
// </div>

//          </div>

//       </div>
//      <Footer></Footer>

//     </>
//   )
// }

// export default App





import './App.css';
import Auctions from './components/Auctions/Auctions';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [total, setTotal] = useState(0);

  const addToFavorites = (item) => {
    const already = favorites.find(fav => fav.id === item.id);
    if (!already) {
      setFavorites([...favorites, item]);
      setTotal(prev => prev + item.currentBidPrice);
      toast.success(`${item.title} added to favorites!`);
    }
  };

  const removeFavorite = (id) => {
    const updated = favorites.filter(fav => fav.id !== id);
    const removedItem = favorites.find(fav => fav.id === id);
    setFavorites(updated);
    setTotal(prev => prev - removedItem.currentBidPrice);
  };

  return (
    <>
      <Navbar />
      <Banner />
      <div className='bg-gray-300'>
        <div className='w-11/12 m-auto py-20'>
          <div>
            <h1 className='text-3xl font-bold text-[#0E2954]'>Active Auctions</h1>
            <p className='font-normal my-3'>Discover and bid on extraordinary items</p>
          </div>

          <div className='flex justify-between gap-6 my-8'>

            {/* LEFT SIDE */}
            <div className='w-[70%] bg-[#FFFFFF] rounded-3xl shadow-xs py-6'>
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Items</th>
                      <th>Current Bid</th>
                      <th>Time Left</th>
                      <th>Bid Now</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Auctions addToFavorites={addToFavorites} favorites={favorites} />
                  </tbody>
                </table>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className='w-[30%] bg-[#FFFFFF] rounded-3xl shadow-xs py-6'>
              <div className='flex justify-center items-center gap-2 py-2'>
                <FaRegHeart size={20} />
                <h1 className='text-xl font-bold'>Favorite Items</h1>
              </div>
              <p className='border-b border-solid border-gray-200'></p>

              {
                favorites.length === 0 ? (
                  <div className='text-center py-8'>
                    <h1 className='text-xl font-semibold mb-2'>No favorites yet</h1>
                    <p>Click the heart icon on any item <br /> to add it to your favorites</p>
                  </div>
                ) : (
                  <div className='p-4 space-y-4'>
                    {favorites.map(item => (
                      <div key={item.id} className='flex justify-between items-center bg-gray-100 p-2 rounded-xl'>
                        <div className='flex items-center gap-2'>
                          <img src={item.image} className='w-10 h-10 rounded-md' />
                          <span className='font-medium'>{item.title}</span>
                        </div>
                        <button onClick={() => removeFavorite(item.id)} className='text-red-500 text-lg'>✕</button>
                      </div>
                    ))}
                  </div>
                )
              }

              <p className='border-b border-solid border-gray-200 mt-4'></p>

              <div className='flex justify-between items-center p-4'>
                <h1 className='text-xl font-bold'>Total bids Amount</h1>
                <h2 className='text-xl font-bold '>${total.toFixed(2)}</h2>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer position='top-center' />
    </>
  );
}

export default App;

