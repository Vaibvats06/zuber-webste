import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-hot-toast";
import { Link } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const validation = await axios.post('http://localhost:5000/api/user/login', { email, password });
    console.log(validation); // full response
    if (validation.status === 200) {
      toast.success("Login successful");
      localStorage.setItem("token", validation.data.token);
      // sessionStorage.setItem("token", validation.data.token);
      navigate("/add/product");
    }
  } catch (error) {
    if (error.response?.status === 400) {
      console.error("Error Status:", error.response.status); // e.g. 400
      toast.error(error.response.data.message || "Invalid email or password");
    } else {
      console.error("Error:", error.message);
      toast.error("Login failed. Please try again.");
    }
  }
};

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-130px)] bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Login
        </h2>

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
          Login
        </button>
        <div className="flex  mt-4">
          <Link className="text-sm mx-auto text-blue-600 hover:underline" to="/password/forgot">Forgot Password</Link>
        </div>
      <hr className="my-4" />
      <Link
          to={'/register'}
          className="mx-auto flex w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          <p className="mx-auto">Create New Account</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
