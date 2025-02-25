
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
    } else {
      navigate("/");
      toast.success("Successfully logged out!");
    }
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Preview", path: "/preview" },
    { label: "Pricing", path: "/pricing" },
    { label: "Feedback", path: "/feedback" },
    { label: "About", path: "/about" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-purple-400">
            Deadwick
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 transition-colors duration-200 ${
                  location.pathname === item.path 
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.label}
              </Link>
            ))}
            {session ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/auth"
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                <User className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-purple-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-purple-400 bg-white/5"
                      : "text-gray-300 hover:text-purple-400 hover:bg-white/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {session ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 rounded-md text-gray-300 hover:text-purple-400 hover:bg-white/5 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </div>
                </button>
              ) : (
                <Link
                  to="/auth"
                  className="block px-3 py-2 rounded-md text-gray-300 hover:text-purple-400 hover:bg-white/5 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Login</span>
                  </div>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
