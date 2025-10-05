import {Routes, Route } from "react-router-dom";
import HomePage from "./LandingPage/HomePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="">
    <HomePage />
    <Toaster position="top-center" />
    </div>
  );
}

export default App;
