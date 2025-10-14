import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login"; // create this
import PrivateRoute from "./components/PrivateRoute"; // create this too
import Home from "./pages/Home";
import Hero from "./components/Hero";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/dashboard";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const userData = async() => {
    
  }

  return (
    <div className="">
      <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add/product" element={<PrivateRoute><Hero /></PrivateRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard data={userData} /></PrivateRoute>} />
        <Route path='/password/forgot' element={<ForgotPassword />}  />
      </Routes>
    <Toaster position="top-center" />
    <Footer />
    </div>
  );
}

export default App;
