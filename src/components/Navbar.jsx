// import { HomeIcon, MenuIcon, XIcon } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// function Navbar() {
//   const [openMenu, setOpenMenu] = useState(false);
//   useEffect(() => {
//     if (setOpenMenu) {
//       document.body.overflow = "hidden";
//     } else {
//       document.body.overflow = "auto";
//     }
//     return () => {
//       document.body.overflow = "auto";
//     };
//   }, [setOpenMenu]);

//   return (
//     <div className="absolute top-0 left-0 w-full z-10 bg-gray-900 ">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
//         <h2 className="text-white font-rubik flex">
//           {" "}
//           <HomeIcon className="text-blue-600" />
//           revHomes
//         </h2>
//         <ul className=" hidden md:flex gap-7 font-poppins text-white">
//           <Link to="/">
//             <p className="hover:text-gray-400 cursor-pointer">Home</p>
//           </Link>

//           <Link to="/about">
//             <p className="hover:text-gray-400 cursor-pointer">About</p>
//           </Link>

//           <Link to='/property'>
//             <p className="hover:text-gray-400 cursor-pointer">Properties</p>
//           </Link>

//           <Link>
//             <p className="hover:text-gray-400 cursor-pointer">Testimonials</p>
//           </Link>

//           <Link>
//             <p className="hover:text-gray-400 cursor-pointer">Contact</p>
//           </Link>
//         </ul>

//         <button className="hidden md:block font-poppins bg-white px-8 py-2 rounded-full">
//           Sign Up
//         </button>

//         <MenuIcon
//           className="md:hidden w-8 text-white"
//           onClick={() => setOpenMenu(true)}
//         />
//       </div>
//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden ${
//           openMenu ? "fixed w-full" : "h-0 w-0"
//         }   right-0 top-0 bottom-0 overflow-hidden bg-white transition-all `}
//       >
//         <div className="justify-end flex cursor-pointer p-6">
//           <XIcon className="w-8  " onClick={() => setOpenMenu(false)} />
//         </div>

//         <ul className="flex flex-col  items-center gap-2 mt-5 px-5 text-lg font-medium  ">
//           <Link to="/" onClick={() => setOpenMenu(false)}>
//             <p className="px-4 py-2 rounded-full inline-block ">Home</p>
//           </Link>

//           <Link to='/about' onClick={() => setOpenMenu(false)}>
//             <p className="px-4 py-2 rounded-full inline-block ">About</p>
//           </Link>

//           <Link to='/property' onClick={() => setOpenMenu(false)}>
//             <p className="px-4 py-2 rounded-full inline-block ">Properties</p>
//           </Link>

//           <Link onClick={() => setOpenMenu(false)}>
//             <p className="px-4 py-2 rounded-full inline-block ">Testimonials</p>
//           </Link>

//           <Link onClick={() => setOpenMenu(false)}>
//             <p className="px-4 py-2 rounded-full inline-block ">Contact</p>
//           </Link>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
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
