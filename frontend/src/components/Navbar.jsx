import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    console.log(isLoggedIn);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    
    //     
    <header className="flex items-center justify-between border-b border-gray-200/50 dark:border-gray-800/50 px-6 py-4">
<div className="flex items-center gap-3">
<svg className="h-6 w-6 text-[#13a4ec]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10.5 16.5L6 12L7.41 10.59L10.5 13.67L16.59 7.59L18 9L10.5 16.5Z" ></path>
</svg>
<h2 className="text-xl font-bold">VATSOL</h2>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
<Link className="hover:text-primary transition-colors" to="/">Home</Link>
<Link className="hover:text-primary transition-colors" to="/add/product">Make Bill</Link>
<Link className="hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
<Link className="hover:text-primary transition-colors" to="/about">About</Link>
<Link className="hover:text-primary transition-colors" to="/contact">Contact</Link>
</nav>
{!isLoggedIn ? (<div className="flex items-center gap-4">
<Link to={'/login'} className="hidden md:inline-flex items-center justify-center rounded-lg bg-[#13a4ec] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#13a4ec]/90">
          Login
        </Link>
<Link to={'/register'} className="hidden md:inline-flex items-center justify-center rounded-lg bg-[#13a4ec] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#13a4ec]/90">
          Sign Up
        </Link>
        </div>): (<div className="flex items-center gap-4">
<button onClick={handleLogout} className="hidden md:inline-flex items-center justify-center rounded-lg bg-[#13a4ec] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#13a4ec]/90">
          Logout
        </button>
        </div>)}

</header>
  );
};

export default Navbar;