import { HomeIcon, MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    if (setOpenMenu) {
      document.body.overflow = "hidden";
    } else {
      document.body.overflow = "auto";
    }
    return () => {
      document.body.overflow = "auto";
    };
  }, [setOpenMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <h2 className="text-white flex">
          {" "}
          <HomeIcon className="text-blue-600" />
          revHomes
        </h2>
        <ul className=" hidden md:flex gap-7 text-white">
          <Link to="/">
            <p className="hover:text-gray-400 cursor-pointer">Home</p>
          </Link>

          <Link>
            <p className="hover:text-gray-400 cursor-pointer">About</p>
          </Link>

          <Link>
            <p className="hover:text-gray-400 cursor-pointer">Properties</p>
          </Link>

          <Link>
            <p className="hover:text-gray-400 cursor-pointer">Testimonials</p>
          </Link>

          <Link>
            <p className="hover:text-gray-400 cursor-pointer">Contact</p>
          </Link>
        </ul>

        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>

        <MenuIcon
          className="md:hidden w-8 text-white"
          onClick={() => setOpenMenu(true)}
        />
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          openMenu ? "fixed w-full" : "h-0 w-0"
        }   right-0 top-0 bottom-0 overflow-hidden bg-white transition-all `}
      >
        <div className="justify-end flex cursor-pointer p-6">
          <XIcon className="w-8  " onClick={() => setOpenMenu(false)} />
        </div>

        <ul className="flex flex-col  items-center gap-2 mt-5 px-5 text-lg font-medium  ">
          <Link to="" onClick={() => setOpenMenu(false)}>
            <p className="px-4 py-2 rounded-full inline-block ">Home</p>
          </Link>

          <Link onClick={() => setOpenMenu(false)}>
            <p className="px-4 py-2 rounded-full inline-block ">About</p>
          </Link>

          <Link onClick={() => setOpenMenu(false)}>
            <p className="px-4 py-2 rounded-full inline-block ">Properties</p>
          </Link>

          <Link onClick={() => setOpenMenu(false)}>
            <p className="px-4 py-2 rounded-full inline-block ">Testimonials</p>
          </Link>

          <Link onClick={() => setOpenMenu(false)}>
            <p className="px-4 py-2 rounded-full inline-block ">Contact</p>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
