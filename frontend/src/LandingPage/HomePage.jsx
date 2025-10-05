import React from 'react'
import {Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Login from "../components/Login"; // create this
import PrivateRoute from "../components/PrivateRoute"; // create this too
import Home from "./Home";

const HomePage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Hero />
            </PrivateRoute>
          }
        />
      </Routes>
      </> 
  )
}

export default HomePage