import {
  HomeIcon,
  FacebookIcon,
  XIcon,
  GithubIcon,
  InstagramIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden">
      <div className=" container mx-auto flex flex-col  md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
          <h2 className=" text-gray-50 text-2xl  font-rubik sm:text-sm flex font-normal">
            <HomeIcon className="text-blue-600" />
            revHomes
          </h2>
          <p className="text-gray-400 mt-4 font-poppins">
            {" "}
            Your go-to platform for finding the latest homes, rentals and
            properties in your area. Explore detailed listings, compare prices
            and make informed decisions all in one place.{" "}
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0 font-poppins" >
          <h3 className="text-white text-lg font-bold mb-4 ">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <Link to='/'>
              <p className="hover:text-white">Home</p>
            </Link>
            <Link to='/about'>
              <p className="hover:text-white">About</p>
            </Link>
            <Link>
              <p className="hover:text-white">Contact Us</p>
            </Link>

            <Link>
              <p className="hover:text-white">Privacy Policy</p>
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-1/3 font-poppins ">
          <h3 className="text-white text-lg font-bold mb-4 ">
            Subscribe to our NewsLetter
          </h3>
          <p className="text-gray-400 mt-4">
            {" "}
            Your go-to platform for finding the latest homes, rentals and
            properties in your area.
          </p>
          <div className="flex gap-2 ">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your Email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0 font-poppins" >
          <h3 className="text-white text-lg font-bold mb-4 ">
            Connect On Socials
          </h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="www.github.com">
              {" "}
              <GithubIcon />
            </a>

            <a href="">
              {" "}
              <FacebookIcon />{" "}
            </a>

            <a href="">
              {" "}
              <InstagramIcon />
            </a>

            <a href="">
              {" "}
              <XIcon />
            </a>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        <p>Copyright 2024 Nubiadev. All right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
