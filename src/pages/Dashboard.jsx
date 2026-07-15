import React from 'react'
import LiveClient from '../components/card/LiveClient'
import OfflineClient from '../components/card/OfflineClient'
import MonthlyCollection from '../components/card/MonthlyCollection'
import MonthlyRecevied from '../components/card/MonthlyRecevied'
import MonthlyDue from '../components/card/MonthlyDue'
import TodayCollection from '../components/card/TodayCollection'
import AllMonthChart from '../components/card/AllMonthChart'
import DueChart from '../components/card/DueChart'
import TotalClient from '../components/card/TotalClient'

const Dashboard = () => {
  return (
    <div className='bg-gray-600 h-full px-5 w-full'>
     <div className=' rounded-md  pl-15 sm:px-20 sm:py-15  gap-2 sm:gap-5 w-full  h-full sm:h-[100vh]    grid grid-rows-2 '>
        
      {/* fonter section */}
      <div className='grid  w-full grid-cols-1 sm:grid-cols-5 sm:gap-2 gap-5 pb-15   '>
          <div className='bg-gray-500/30 rounded-xl shadow-2xl '> 
          <div className='grid grid-cols-2'>
          <LiveClient/>
          <TotalClient/>
          </div>
          <div className='mx-1'> 
               <OfflineClient/>
          </div>
        </div>

        <div className='bg-gray-500/50 p-5 sm:p-1 rounded-xl h-full bg-green-400/30 shadow-2xl'>
          <MonthlyCollection/>
        </div>

        <div className='bg-gray-500/50 p-5 sm:p-1 rounded-xl h-full  bg-green-900/30 shadow-2xl'>
          <MonthlyRecevied/>
        </div>

        <div className='bg-gray-500/50 p-5 sm:p-1 rounded-xl h-full  bg-red-400/30 shadow-2xl' >
          <MonthlyDue/>
        </div>

        <div className='bg-gray-500/50  p-5 sm:p-1 rounded-xl h-full  bg-yellow-400/30 shadow-2xl'>
          <TodayCollection/>
        </div>
      </div>
      
      
      {/* chart section */}
       <div className='grid w-full grid-cols-1  sm:grid-cols-2 gap-5'>

         <div className='text-white '>
          <AllMonthChart/>
        </div>

        <div className=' text-white'>
          <DueChart/>
        </div>

       </div>

     </div>
    </div>
  )
}

export default Dashboard
