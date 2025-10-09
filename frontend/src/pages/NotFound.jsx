import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
<div className="flex min-h-[calc(100vh-130px)] flex-col">
<main className="flex flex-1 flex-col items-center justify-center bg-background-light dark:bg-background-dark text-center px-4">
<div className="max-w-lg w-full">
<div className="mb-8">
<img alt="Broken Robot Illustration" className="mx-auto h-48 w-48" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-qbUOclS-ILGmdElgQsk1PSv_BMoMbcIdCCZEld8DJJf8APOfsgxHYtKGh_-2l3u4em9OHzymPMz7AEklz3dj8vMhXgjCBANM__CBWmJPThxHNMLOxP7VpBgaEPc57yIhj_8m9jucp3GDqFm9Fo-ZmWRhsKZlLEwxs7rUIY13kNwOmLMsNnkfmNZ6GxE5NIFWtV-_XjzQ1fItuEs2AwfBV2oKvF5kMa_1taljgI2k1ALGqvbfpUMDksDTDvD7ADONIsToKuhyAkmJ"/>
</div>
<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Oops! Page not found.</h1>
<p className="mt-4 text-lg text-gray-600 dark:text-gray-400">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<Link className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-[#13a4ec] px-6 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#13a4ec]/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" to="/">
              Return to Home
            </Link>
<div className="relative w-full sm:w-64">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<svg aria-hidden="true" className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" ></path>
</svg>
</div>
<input className="block w-full rounded-lg border-0 bg-background-light dark:bg-background-dark py-3 pl-10 pr-3 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm" id="search" name="search" placeholder="Search" type="search"/>
</div>
</div>
</div>
</main>

</div>


  )
}

export default NotFound