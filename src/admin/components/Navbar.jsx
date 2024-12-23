import { HomeIcon } from "lucide-react";

function Navbar() {


  return (
    <div className=" fixed top-0 left-0 w-full z-10 bg-gray-900 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <h2 className="text-white font-rubik flex">
          {" "}
          <HomeIcon className="text-blue-600" />
          revHomes
        </h2>
        <button
          className='rounded-full px-5 py-2 sm:px-7 sm:py-2 text-gray-900 bg-white '>  Logout</button>


      </div>

    </div>
  );
}

export default Navbar;
