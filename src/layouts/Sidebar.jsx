import React, { useState } from 'react'
import Tag from '../features/Tag'
import NavItems from '../components/navItems/NavItems'

const Sidebar = () => {
    const [pageState , setPageState] = useState(true)
    const [navBtnState , setNavBtnState] = useState(false)
    const [hoverNav , setHoverNav] = useState(false)


    const handleMenu = () => {
        setPageState(!pageState)
    }

    const handleNavBtn = () =>{
      setNavBtnState(!navBtnState)
    }

    const hoverNavItemColorChange = ()=>{
        setHoverNav(!hoverNav)
    }
    
  
  return (
    <div className={` w-64  h-full bg-gray-600 transition-all duration-400 ${pageState ? '-translate-x-[00px]': '-translate-x-[200px] absolute' }`}>
        <div className="header  flex p-5 items-center border-b border-gray-500 relative ">
            <div className='a font-extrabold text-2xl rounded-2xl shadow-2xl p-1  bg-white'>CL</div>
            <span className='text-white italic text-3xl'>BillingSoft</span>
            <div  onClick={handleMenu}  className='absolute right-[0%] cursor-pointer top-[50%] text-2xl -translate-[50%]  text-white'>
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
        <div className="Nav_links mt-15">
            <li className={` relative bg-gray-600 border-t group hover:bg-gray-500 duration-100 cursor-pointer  border-gray-500 text-white flex ${pageState ? ' ' : 'flex-row-reverse gap-10 mr-2'} gap-3 items-center p-3`}>
              <div className="icon ">
                <i class="fa-regular fa-user"></i>
              </div>
                <span className='font-light group-hover:font-bold'>Dashboard</span>
              <div className="absolute hidden 
              group-hover:inline-block
              -right-12 translate-x-1/2 -translate-y-1/2 top-[50%]">
               <Tag 
                name={'Dashboard'}
              /></div>
            </li>
             <li className={`relative bg-gray-600 border-t cursor-pointer border-b group hover:bg-gray-500  border-gray-500 text-white flex
              gap-3 items-center p-3 ${pageState ? ' ' : 'flex-row-reverse gap-10 mr-2'}`}>
              <div className="icon">
               <i class="fa-solid fa-desktop"></i>
              </div>
                <span className='font-light group-hover:font-bold'>Online Client Monitoring</span>
                <div className="absolute hidden 
              group-hover:inline-block
              -right-12 translate-x-1/2 -translate-y-1/2 top-[50%]">
               <Tag 
                name={'online Client Montioring'}
              /></div>
            </li>

            <li  onClick={handleNavBtn}  className={` relative bg-gray-600 border-t cursor-pointer border-b   border-gray-500 text-white ${pageState ? ' ' : 'flex-row-reverse gap-10 mr-2 absolute'}` }>

                <div className={`flex gap-3  items-center p-3 ${h} `}>
                      {/* icon area  */}
                          <div className="icon">
                        <i class="fa-solid fa-sack-dollar"></i>
                          </div>
                          {/* main  text  */}
                        <span className='font-light group-hover:font-bold'>
                          Customer Billing</span>
                </div>

                        {/* for Tage use */}
                 <div className="absolute hidden 
              group-hover:inline-block
              -right-12 translate-x-1/2 -translate-y-1/2 top-[50%]">
               <Tag 
                name={'Customer Billing'}
              /></div> 
                      {/* mav lInks */}
                <div className={`  transition-all duration-300 ${navBtnState ? "block" : "hidden"}`}>
                  <NavItems/>
                </div>

            </li>
            
        </div>
    </div>
  )
}

export default Sidebar
