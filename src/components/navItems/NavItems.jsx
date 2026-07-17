import React from 'react'

const NavItems = ({icon , name , isActive}) => {
    const icons = icon || <i class="fa-regular fa-font-awesome"></i> 
    const isActives = isActive || ''
    const names = name || "Customer List"
  return (
    <div className={`group  UnderShadow bg-white text-gray-600   hover:bg-gray-500/80 hover:text-white  transition-all duration-300  hover:font-semibold w-full h-full  py-2 flex ${isActives ? 'flex-row-reverse px-4' : 'flex px-10' }  gap-3 border-t-gray rounded-md border-y border-gray-500`}>
        <div className="icon group-hover:font-semibold">
            {icons}
        </div>
        <div>
            {names}
        </div>
    </div>
  )
}

export default NavItems
