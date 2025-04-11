
import './App.css'
import Auctions from './components/Auctions/Auctions'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <div className=' bg-gray-300'>

        <div className='w-11/12 m-auto py-20'>
            <div>
                <h1 className='text-3xl font-bold text-[#0E2954]'>Active Auctions</h1>
                <p className='font-normal my-3'>Discover and bid on extraordinary items</p>
            </div>

<div className=' flex justify-between  gap-6 my-8'>

     <div className='w-[70%] bg-[#FFFFFF] rounded-3xl shadow-xs p-2'>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Items</th>
        <th>Current Bid</th>
        <th>Time Left</th>
        <th>Bid Now</th>
      </tr>
    </thead>
 
    <tbody> 
              <Auctions></Auctions>
    </tbody>


  </table>
</div>


      </div>

    <div className='w-[30%] bg-[#FFFFFF] rounded-3xl shadow-xs p-6'>
                    <h1>sdfahjkd</h1>

    </div>
            
</div>

         </div>

      </div>
     <Footer></Footer>

    </>
  )
}

export default App
