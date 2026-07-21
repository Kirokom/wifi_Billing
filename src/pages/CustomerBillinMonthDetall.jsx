import React, { useState } from 'react'

const CustomerBillinMonthDetall = () => {
  const months = [
    'jan' , 'feb' , 'mar ' 
    ,'april' ,'may' , 'june' , 
    'july', 'aug' , "sep" ,
    'oct' , "nov" , "dec"
  ]
  const demoBils = [
    400, 400, 400, 500, 400 , 500 , 
    400 , 400 , 400 , 500 , 400 ,400
  ]
    const demoPaymantBils = [
    400, 400, 400, 400, 400 , 400 , 
    400 , 400 , 400 , 400 , 400 ,400
  ]

   const demoRecBils = [
    400, 400, 400, 400, 400 , 400 , 
    400 , 400 , 400 , 400 , 400 ,400
  ]


let recBIll = 0
demoRecBils.forEach((RecBills)=>{
  recBIll = recBIll + RecBills 
})
let bill = 0
  // let [bill, setBill] = useState(0)
  demoBils.forEach((bills)=>{
    bill = bill  + bills
  })
  return (
    <div>
      <div className='w-full mt-15   px-[100px]'>
       <table className=' border mx-auto
       [&_th]:p-2  [&_th]:border-2 [&_th]:bg-gray-600  [&_th]:text-white  [&_th]:border-white [&_th]:text-center capitalize  [&_th]:text-md
        [&_td]:border [&_td]:p-1  [&_td]:text-center  [&_td]:text-md [&_td]:border-gray-800/30
       '>
        <thead>
        <tr className=''>
          {months.map((item)=>{
       return <th>{item}</th>
        })}
        </tr>
        </thead>
        <tbody>

         <tr>
           {demoBils.map((item)=>{
            return <td>{item}</td>
          })}
          </tr>

          <tr>
            {demoPaymantBils.map((item)=>{
            return <td>{item}</td>
          })}
          </tr>

           <tr>
            <td className='text-sm '>Recevied </td>
            <td colSpan={11}>
              {recBIll}
            </td>
          </tr>

          <tr>
            <td className='text-sm'>Total Bill</td>
            <td colSpan={11}>
              {bill}
            </td>
          </tr>
        </tbody>
       </table>
      </div>
    </div>
  )
}

export default CustomerBillinMonthDetall
