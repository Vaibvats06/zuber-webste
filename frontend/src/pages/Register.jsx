import axios from 'axios';
import React, { useState } from 'react'
import {toast} from 'react-hot-toast'
import emailValidator from 'email-validator'
import { Link } from 'react-router-dom';


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
const registerHandler = async(e) => {
    e.preventDefault();
    console.log(name,email,password);
    try{
      if(!emailValidator.validate(email)){
        return toast.error("Invalid Email")
      }
        await axios.post('https://zuber-webste.onrender.com/api/user/register', { name, email, password })
        toast.success("Registered Successfully")
    }catch(error){
      toast.error("User already exists")
        
    }
}

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-130px)] bg-gray-100">
      <form
      onSubmit={registerHandler}
        
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Create a new account
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="harry potter"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="admin@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="admin123"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Account
        </button>
        <p className='py-2'>if you have an account, please <Link to="/login" className="text-blue-600 hover:underline">login here</Link></p>
      </form>
    </div>
  )
}

export default Register
