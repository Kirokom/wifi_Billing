import React from 'react'

const NavItems = ({icon , name}) => {
    const icons = icon || <i class="fa-regular fa-font-awesome"></i> 

    const names = name || "Customer List"
  return (
    <div className=' bg-white text-gray-600   hover:bg-gray-700/80 hover:text-white  transition-all duration-300  hover:font-semibold w-full h-full px-10 py-1 flex gap-3 border-t-gray rounded-md border-y border-gray-500'>
        <div className="icon">
            {icons}
        </div>
        <div>
            {names}
        </div>
    </div>
  )
}

export default NavItems
