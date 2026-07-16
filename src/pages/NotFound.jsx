import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen w-full flex  items-center border justify-center flex-col gap-9'>
     <div className='text-center text-4xl'>
       <h1 className='text-8xl'>404</h1>
      <p className='text-2xl'>Opps! The page your are looking for that does not exist . 
      </p>
     </div>
    <div>
     <NavLink to="/">
       <button className='border border-b-2 hover:scale-[.97] hover:bg-black/80 hover:text-white duration-300  transition-all cursor-pointer text-white bg-gray-600/90  shadow px-19 py-3 font-bold rounded-sm '>Back to home </button>
     </NavLink>
    </div>
    </div>
  )
}

export default NotFound
