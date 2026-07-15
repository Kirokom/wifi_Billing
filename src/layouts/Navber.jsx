import React, { useState } from 'react'

const Navber = ({}) => {
  const [pageState , setPageState] = useState('')
  
  return (
    <div className='MainCOlor  transition-all duration-400 MainTextCOlor px-8 sm:px-20   shadow-2xl w-full min-h-10 flex items-center justify-between'>
      <div className='flex '>
      </div>
    <div className="btn flex py-5 gap-5">
      <div className=' flex gap-1 font-bold text-xs sm:text-sm hover:bg-white hover:text-gray-600 duration-300 rounded-sm cursor-pointer items-center  px-3'>
        <div className='sm:'>
          <i class="fa-solid fa-ticket"></i>
        </div>
        Open Support Ticket
      </div>
        <div className=' gap-1 text-xs sm:text-sm border font-bold hover:bg-white hover:text-gray-600 duration-300 flex py-2 px-3 items-center  rounded-sm cursor-pointer'>
            <div>
              <i class="fa-solid fa-desktop"></i>
            </div>
          Online Client Monitioring 
          </div>
    </div>
    </div>
  )
}

export default Navber
