import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
// import { tr } from "framer-motion/m";
function Header() {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden "
      style={{ backgroundImage: "url('/hero.jpg')" }}
      id="Header"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white   "
      >
        <h2 className="text-5xl font-rubik sm:text-6xl md:text-[82px] inline-block max-w-3xl font-normal pt-20 ">
          {" "}
          Discover Your Next Home, Right Around the Corner
        </h2>
        <p className='font-poppins'> 
          Your go-to platform for finding the latest homes, rentals and
          properties in your area. Explore detailed listings, compare prices and
          make informed decisions all in one place.{" "}
        </p>


        <div className="space-x-6 mt-16 flex justify-center">
          <NavLink to="">
            <p className="border border-white px-8 py-3 font-rubik rounded"> Projects</p>
          </NavLink>
          <NavLink>
            <p className="bg-blue-500 border-white px-8 py-3 rounded">
              {" "}
              Contact Us
            </p>
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
}

// +6476465460

export default Header;
