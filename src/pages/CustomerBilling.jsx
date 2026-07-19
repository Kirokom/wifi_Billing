import React, { useState } from 'react'

const CustomerBilling = () => {

 const  [online , setOnline] = useState(false)

  const Active = ()=>{
      setOnline(!online)
      console.log(online)
  }
  return (
    <div>
      <div className='py-10 px-50  w-full mt-30 overflow-x-auto '>
      <table className='border  shadow
        [&_th]:border-2   [&_th]:text-white [&_th]:bg-gray-700  [&_th]:border-white/40 [&_th]:shadow [&_th]:text-sm [&_th]:p-1.5  [&_th]:capitalize 
        [&_td]:border-2   [&_td]:text-gray-900  [&_td]:border-gray-900/40 [&_td]:text-[13px] [&_td]:shadow-2xl  [&_td]:p-1.5
        _td]:capitalize 
        '>
        <thead>
          <tr>
            <th className='text-center'>name</th>
            <th className='t'>UserName</th>
            <th>number</th>
            <th>area</th>
            <th className='w-[15px]'>mbps</th>
            <th>pack</th>
            <th className='wrap-break-word w-[15px]'>exp date</th>
            <th className='wrap-break-word w-[15px]'>rece.  </th>
            <th className='w-[15px] text-center'>due </th>
            <th>adv. </th>
            <th>status </th>
            <th>Detall</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>emon</td>
            <td>1301@emon</td>
            <td className='text-xs'>01721283081</td>
            <td>Dokhin lalpur</td>
            <td className='center'>5mb</td>
            <td className='center'>pack-2</td>
            <td className='center'>16</td>
            <td className='center'>500</td>
            <td></td>
            <td></td>
            <td  className='text-center '>
              <div onClick={Active} className='text-xl cursor-pointer duration-1000 transition-all'>
              {online ? <i class="fa-solid fa-toggle-on"></i> : <i class="fa-solid fa-toggle-off"></i>}
              </div>
            </td>
             <td className='text-center text-2xl'>
              <div className='text-md cursor-pointer'>
                <i class="fa-regular fa-folder"></i>
              </div>
            </td>
          </tr>
            <tr>
            <td>emon</td>
            <td>1301@emon</td>
            <td className='text-xs'>01721283081</td>
            <td>Dokhin lalpur</td>
            <td className='center'>5mb</td>
            <td className='center'>pack-2</td>
            <td className='center'>16</td>
            <td className='center'>500</td>
            <td></td>
            <td></td>
            <td  className='text-center '>
              <div onClick={Active} className='text-xl cursor-pointer duration-1000 transition-all'>
              {online ? <i class="fa-solid fa-toggle-on"></i> : <i class="fa-solid fa-toggle-off"></i>}
              </div>
            </td>
            <td className='text-center '>
              <div className='text-md cursor-pointer'>
                <i class="fa-regular fa-folder"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default CustomerBilling
