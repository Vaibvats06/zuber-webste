import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navbar />
      
          <main className="flex-grow">
            <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
              <div className="absolute inset-0 bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAgm_FiwmlN_oHJm4dp85MPxlkmmfJxU_5u_kuiYbplD3GIvjurr4TmTAlDveaCo9SgmqyLEB4u6GsGTRF2p8aN5T3tXv_VKgkdh71I6TqiKlMs7C4cmgz8B2WXhUdc9OoZAbAoKm5GmYM0vKl9tQ3FNJjcdYYBv_4ZQZt2kUANr0KXC5S499fHReM7bHk6A2RsnAVV-Fg5jAxXcLeD8fzBdVQwDqgnHdYKpZqftHj4jH-lTmac8G9IDfCfdCgKXO9v9_XHDUVPT0Lh')]"></div>
              <div className="absolute inset-0 gradient-overlay"></div>
              <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
                    Streamline Your Business with Our ERP Solution
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-200/90 max-w-2xl mx-auto mb-10">
                    Our Enterprise Resource Planning (ERP) system integrates all core business processes, from finance and HR to supply chain and customer relationship management, into a unified platform. Gain real-time insights, improve efficiency, and drive growth with our comprehensive solution.
                  </p>
                  <Link to="/dashboard" className="inline-flex items-center justify-center h-12 px-6 rounded-lg text-base font-bold bg-primary text-white hover:opacity-90 transition-opacity transform hover:scale-105">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </main>
          


      <Footer />
    </div>
  )
}

export default Home