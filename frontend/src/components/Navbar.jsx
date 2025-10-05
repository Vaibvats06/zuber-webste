import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-gray-100 border-b-2 border-slate-200">
      <h1 className="text-2xl font-bold">Zoyis</h1>
      <div>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="bg-blue-600 text-white px-4 py-2 rounded">Sign Out</button>
        ) : (
          <button onClick={() => navigate("/login")} className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;