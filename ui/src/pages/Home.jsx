import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className="bg-green-100 m-auto lg:w-fit">
      <div className="py-2 shadow-green-300 shadow-2xl lg:w-[75rem] m-auto ">
        <Navbar/>
      </div>
      <div className='flex justify-center'>
        <div className='w-[35rem] m-auto mt-15 flex '>
            <h2 className='text-5xl mt-30 py-5 font-bold text-green-600'>Trust us and save your <h3 className='py-5 text-right'> money with us. </h3></h2>
        </div>
      </div>
      <div className='w-[10rem] flex justify-end flex-col m-auto'>
            <h5>PayNest Mobile</h5>
        </div>
    </div>
  )
}

export default Home
