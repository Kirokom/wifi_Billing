import React, { useState } from 'react'
import Tag from '../features/Tag'
import NavItems from '../components/navItems/NavItems'
import {NavLink} from "react-router-dom"

const Sidebar = () => {
    const [pageState , setPageState] = useState(false)
    const [navBtnState , setNavBtnState] = useState(false)
    const [hoverNav , setHoverNav] = useState(false)
    const [isActive , setIsActive] = useState(false)


    const handleMenu = () => {
        setPageState(!pageState)
        setIsActive(!isActive) //useing this for changing the navitems bar  button 
    }

    const handleNavBtn = () =>{
      setNavBtnState(!navBtnState)
      setIsActive(!isActive)
    }

    const hoverNavItemColorChange = (e)=>{
      console.log(e.target)
    }
    
  
  return (
    <div className={` w-64 border-r-2  border-gray-500 h-full bg-gray-600 transition-all duration-400 ${pageState ? '-translate-x-[0px]': '-translate-x-[200px] absolute' }`}>
        <div className="header  flex p-5 items-center border-b border-gray-500 relative ">
            <div className='a font-extrabold text-2xl rounded-2xl shadow-2xl p-1  bg-white'>CL</div>
            <span className='text-white italic text-3xl'>BillingSoft</span>
            <div  onClick={handleMenu}  className='absolute right-[0%] cursor-pointer top-[50%] text-2xl -translate-[50%]  text-white'>
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
        <div className="Nav_links mt-15">

            <li className={` UnderShadow relative bg-gray-600 border-t group hover:bg-gray-700 duration-100 cursor-pointer  border-gray-500 text-white flex ${pageState ? ' ' : 'flex-row-reverse gap-10 mr-2'} gap-3 items-center p-3`}>
              <div className="icon hover:font-semibold">
                <i class="fa-regular fa-house"></i>
              </div>
                <span className='font-light group-hover:font-semibold'>Dashboard</span>
              <div className="absolute hidden 
              group-hover:inline-block
              -right-12 translate-x-1/2 -translate-y-1/2 top-[50%]">
               <Tag 
                name={'Dashboard'}
              /></div>
            </li>

             <li className={ `UnderShadow relative transition-all duration-300 bg-gray-600 border-t cursor-pointer border-b group hover:bg-gray-700  border-gray-500 text-white flex
              gap-3 items-center p-3 ${pageState ? ' ' : 'flex-row-reverse gap-10 mr-2'}`}>
              <div className="icon hover:font-semibold">
               <i class="fa-solid fa-desktop"></i>
              </div>
                <span className='font-light group-hover:font-semibold'>Online Client Monitoring</span>
                <div className="absolute hidden 
              group-hover:inline-block
              -right-12 translate-x-1/2 -translate-y-1/2 top-[50%]">
               <Tag 
                name={'online Client Montioring'}
              /></div>
            </li>

            <li  onClick={handleNavBtn}  className={` UnderShadow relative  transition-all duration-300 bg-gray-600 border-t cursor-pointer border-b   border-gray-500 text-white ${pageState ? ' ' : 'flex-row-reverse gap-10 mr-2 absolute'}` }>

               <NavLink to="/CustomerBilling">
                   <div className={`flex gap-3 relative items-center p-3 hover:bg-gray-700 group   `}>
                      {/* icon area  */}
                          <div className="icon hover:font-semibold">
                        <i class="fa-solid fa-sack-dollar"></i>
                          </div>
                          {/* main  text  */}
                        <span className='font-light group-hover:font-semibold'>
                          Customer Billing</span>

                        <div className='top-1/2 -translate-y-1/2 right-4  hover:font-semibold absolute'>
                            {navBtnState ? <i class="fa-solid fa-angle-down"></i> : <i class="fa-solid fa-angle-right"></i>}
                        </div>
                </div>
               </NavLink>

                        {/* for Tage use */}
                 <div className="absolute hidden 
              group-hover:inline-block
              -right-12 translate-x-1/2 -translate-y-1/2 top-[50%]">
               <Tag 
                name={'Customer Billing'}
              /></div> 
                  {/* SIddebar Arrow */}
                    
                      {/* mav lInks */}
                <div className={`  transition-all duration-300 ${navBtnState ? "block" : "hidden"}`}>
                  <NavItems
                  name = {"Biling List"}
                  icon = {<i class="fa-regular fa-money-bill-1"></i>}
                  isActive = {isActive}
                
                  />
                    <NavItems
                  name = {"Customer List"}
                  icon = {<i class="fa-regular fa-user"></i>}
                  isActive = {isActive}
                  />
                </div>

            </li>
            
              <li className={ `UnderShadow relative transition-all duration-300 bg-gray-600 border-t cursor-pointer border-b group hover:bg-gray-700  border-gray-500 text-white flex
              gap-3 items-center p-3 ${pageState ? ' ' : 'flex-row-reverse gap-10 mr-2'}`}>
              <div className="icon hover:font-semibold">
               <i class="fa-regular fa-user"></i>
              </div>
                <span className='font-light group-hover:font-semibold'>Profile </span>
                <div className="absolute hidden 
              group-hover:inline-block
              -right-12 translate-x-1/2 -translate-y-1/2 top-[50%]">
               <Tag 
                name={'Profile'}
              /></div>
            </li>

              <li className={ `UnderShadow relative transition-all duration-300 bg-gray-600 border-t cursor-pointer border-b group hover:bg-gray-700  border-gray-500 text-white flex
              gap-3 items-center p-3 ${pageState ? ' ' : 'flex-row-reverse gap-10 mr-2'}`}>
              <div className="icon hover:font-semibold">
              <i class="fa-regular fa-message"></i>
              </div>
                <span className='font-light group-hover:font-semibold'>Support</span>
                <div className="absolute hidden 
              group-hover:inline-block
              -right-12 translate-x-1/2 -translate-y-1/2 top-[50%]">
               <Tag 
                name={'Support'}
              /></div>
            </li>
            
            
        </div>
    </div>
  )
}

export default Sidebar
