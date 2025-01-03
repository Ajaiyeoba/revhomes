import brand from "../assets/hero.jpg";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
    initial={{ opacity: 0, x: 200 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
      className="container flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden "
      id="about"
    >
      <h1 className="text-2xl sm:text-4xl font-poppins mb-2 text-gray-900 ">
        About                   
        <span className="underline underline-offset-4 decoration-1 under font-light ">
          Our Brand
        </span>{" "}
      </h1>

      <p className="text-gray-500 max-w-80 text-center mb-8 ">
        Passionate About Properties{" "}
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 ">
        <img src={brand} alt="" className="w-full sm:w-1/2 max-w-lg" />

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600 ">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium' text-gray-800 ">10+ </p>
              <p>Years of Experience</p>
            </div>

            <div>
              <p className="text-4xl font-medium' text-gray-800 ">12+ </p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium' text-gray-800 ">1+ </p>
              <p>Min Ft Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium' text-gray-800 ">25+ </p>
              <p>25+ On going Projects</p>
            </div>
          </div>

          <p  className="my-10 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            sapiente nesciunt placeat vitae molestias quisquam inventore veniam
            ratione voluptatem id, soluta alias odit eveniet in. Libero eos
            eligendi asperiores officia?
          </p>

          <button className="bg-blue-600 text-white px-8 py-2 rounded">Learn More</button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
