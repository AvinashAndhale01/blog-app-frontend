import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              Blog App
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>

            {!isAuthenticated ? (
              <>
                <Link to="/login" className="hover:text-blue-400">
                  Login
                </Link>

                <Link to="/signup" className="hover:text-blue-400">
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile" className="hover:text-blue-400">
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
