import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login"; // create this
import PrivateRoute from "./components/PrivateRoute"; // create this too

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/product-entry"
          element={
            <PrivateRoute>
              <Hero />
            </PrivateRoute>
          }
        />
      </Routes>
      </> 
  );
}

export default App;
