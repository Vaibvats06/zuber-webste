import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Sales from '../components/dashboard/Sales'
import { Link } from 'react-router-dom'
import { useState } from 'react'
 

const dashboard = ({data}) => {

  const [activeTab, setActiveTab] = useState('sales');
  const SalesHandler=async(e) => {
    e.preventDefault();
    setActiveTab('sales')
    const products = await data();

  }
  console.log(activeTab);
  return (
    <div className='flex min-h-[calc(100vh-130px)] '>
      <div className='w-[20%]  bg-gray-100 flex flex-col gap-2 pt-5 border-r-2 border-gray-300 '>
        <div className='w-full h-[50px] text-lg bg-slate-200 px-20 pt-2 font-bold cursor-pointer hover:bg-gray-300 hover:text-blue-700 ' onClick={SalesHandler}> Sales </div>
        <div className='w-full cursor-pointer h-[50px] text-lg bg-slate-200 px-20 pt-2 hover:bg-gray-300 hover:text-blue-700 font-bold' onClick={() => setActiveTab('profit')}>Profit</div>
        <div className='w-full cursor-pointer h-[50px] text-lg bg-slate-200 px-20 pt-2 hover:bg-gray-300 hover:text-blue-700 font-bold' onClick={() => setActiveTab('revenue')}>Revenue</div>
        <div className='w-full cursor-pointer h-[50px] text-lg bg-slate-200 px-20 pt-2 hover:bg-gray-300 hover:text-blue-700 font-bold' onClick={() => setActiveTab('customers')}>Customers</div>
        <div className='w-full cursor-pointer h-[50px] text-lg bg-slate-200 px-20 pt-2 hover:bg-gray-300 hover:text-blue-700 font-bold' onClick={() => setActiveTab('inventory')}>Inventory</div>
      </div>
      <div className='w-[80%] bg-[#F5F5F0] p-5'>
      {activeTab === 'sales'?<div> <Sales data={SalesHandler} /> </div> : null}
      {activeTab === 'profit'?<div> Profit Content </div> : null}
      {activeTab === 'revenue'?<div> Revenue Content </div> : null}
      {activeTab === 'customers'?<div> Customers Content </div> : null}
      {activeTab === 'inventory'?<div> Inventory Content </div> : null}
    </div>

    </div>
      
   
  )
}

export default dashboard