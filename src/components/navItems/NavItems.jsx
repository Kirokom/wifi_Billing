import React from 'react'

const NavItems = ({icon , name}) => {
    const icons = <i class="fa-regular fa-font-awesome"></i> 

    const names = name || "Customer List"
  return (
    <div className=' bg-gray-800/40 w-full h-full px-10 py-2 flex gap-3'>
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
