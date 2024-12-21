import { HomeIcon, MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        {/* Logo */}
        <h2 className="text-lg font-bold flex items-center gap-2">
          <HomeIcon className="text-blue-600" />
          <span>revHomes</span>
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/property" className="hover:text-gray-400">
              Properties
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-gray-400">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Sign-Up Button (Desktop Only) */}
        <button className="hidden  md:block   bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          Sign Up
        </button>

        {/* Mobile Menu Icon */}
        <MenuIcon
          className="block md:hidden w-8 cursor-pointer"
          onClick={() => setOpenMenu(true)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-gray-900 text-white transform ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-6">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <HomeIcon className="text-blue-600" />
            <span>revHomes</span>
          </h2>
          <XIcon className="w-8 cursor-pointer" onClick={() => setOpenMenu(false)} />
        </div>

        <ul className="flex flex-col items-center gap-6 mt-10 text-lg font-medium">
          <li>
            <Link to="/" onClick={() => setOpenMenu(false)} className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpenMenu(false)} className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/property" onClick={() => setOpenMenu(false)} className="hover:text-gray-400">
              Properties
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => setOpenMenu(false)} className="hover:text-gray-400">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => setOpenMenu(false)} className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>

        <button
          className="mt-10 bg-blue-600 text-white  px-6 py-2 rounded-full hover:bg-blue-700 mx-auto block"
          onClick={() => setOpenMenu(false)}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
