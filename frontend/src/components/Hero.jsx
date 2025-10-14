import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uid } from 'uid';

import axios from 'axios';
import toast from 'react-hot-toast';

const Hero = () => {
    const [form, setForm] = useState({
    productName: '',
    brand: '',
    colour: '',
    quantity: '',
    meter: '',
    costPrice: '',
    sellingPrice: '',
    expensePrice: '',
    customerId: ''
  });

  let customerId=uid();
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target; 
    setForm({
      ...form,
      [name]: value,
      customerId: customerId
    });
    
  };

  

  const calculateProfit = () => {
    const { costPrice, sellingPrice, expensePrice } = form;
    const profit =
      parseFloat(sellingPrice || 0) -
      parseFloat(costPrice || 0) -
      parseFloat(expensePrice || 0);
    return isNaN(profit) ? '' : profit.toFixed(2);
  };

  const PostHandler = async(e) => {
    e.preventDefault();
    try{
      await axios.post('https://zuber-webste.onrender.com/api/product/data/',form,{
        headers:{
          'Content-Type':'application/json',
        }
      });
      toast.success("Data added successfully");
      navigate("/");
    }catch(error){
      console.error("Error posting data:", error);
    }


  }





  return (
    <div className="min-h-[calc(100vh-120px)] bg-gray-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Product Entry Form</h2>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" method='post' onSubmit={PostHandler}>
          {/* Fields */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Product Name</label>
            <input required type="text" name="productName" value={form.productName} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Brand</label>
            <input type="text" name="brand" value={form.brand} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Colour</label>
            <input type="text" name="colour" value={form.colour} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Quantity</label>
            <input type="number" name="quantity" value={form.quantity} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Meter</label>
            <input type="number" name="meter" value={form.meter} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Cost Price</label>
            <input type="number" name="costPrice" value={form.costPrice} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Selling Price</label>
            <input type="number" name="sellingPrice" value={form.sellingPrice} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Expense Price</label>
            <input type="number" name="expensePrice" value={form.expensePrice} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Profit</label>
            <input type="number" value={calculateProfit()} readOnly
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md" />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Customer ID</label>
            <input type="text" name="customerId" value={customerId} onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mt-6  justify-center items-center flex flex-row">
          <input className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer hover:bg-blue-700 transition" type='submit' value='Submit' />

        </div>
          
        </form>

        
      </div>
    </div>
  )
}

export default Hero