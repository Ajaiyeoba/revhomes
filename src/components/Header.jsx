import { NavLink } from "react-router-dom";


function Header() {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden "
      style={{ backgroundImage: "url('/hero.jpg')" }}
      id="Header"
    >
     

      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white   ">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-normal pt-20 ">
          {" "}
          Discover Your Next Home, Right Around the Corner
        </h2>
        <p>
          Your go-to platform for finding the latest homes, rentals and
          properties in your area. Explore detailed listings, compare prices and
          make informed decisions all in one place.{" "}
        </p>

        <div className="space-x-6 mt-16 flex justify-center">
          <NavLink to="">
            <p className="border border-white px-8 py-3 rounded"> Projects</p>
          </NavLink>
          <NavLink>
            <p className="bg-blue-500 border-white px-8 py-3 rounded">
              {" "}
              Contact Us
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
