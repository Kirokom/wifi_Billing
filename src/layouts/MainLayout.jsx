import { Outlet } from 'react-router-dom'
import Navber from './Navber'
import Sidebar from './Sidebar'

const MainLayout = () => {
  return (
  <div className='flex'> 
    <div className=''>
      <Sidebar/>
    </div>
    <div className='w-200 sm:w-full'>
        <div className='w-200 sm:w-full '>
          <Navber/>
        </div>
        
        <div className=' w-200 sm:w-full'>
            <Outlet/> 
        </div>
    </div>
  </div>
  )
}

export default MainLayout
