import { useEffect, useState } from "react";
import { ArrowDownLeft, ArrowDownRight } from "lucide-react";
import { projectData } from "../assets/assets";
import { motion } from "framer-motion";


function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevProject.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="container flex flex-col items-center mx-auto py-4 pt-20 px-6 w-full overflow-hidden  md:px-20 lg:px-3"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Projects
          <span className="underline underline-offset-4 decoration-1 under font-light">|</span>
          Completed
        </h1>

        <p className="text-center text-gray-500 mb-8 max-w-80">
          Crafting pace, Building Legacies{" "}
        </p>

        <div className="items-center mb-8">
          <button
            onClick={prevProject}
            className="p-3 bg-gray-200  r  ounded mr-2"
            aria-label="Previous Projects"
          >
            <ArrowDownRight alt="Previous" />
          </button>

          <button
            onClick={nextProject}
            className="p-3 bg-gray-200 rounded mr-2"
            aria-label="Next Label"
          >
            <ArrowDownLeft alt="Next" />
          </button>
        </div>

        {/* Projects Slider Container */}

        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out "
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            }}
          >
            {projectData.map((project, index) => (
              <div
                className="relative flex-shrink-0 w-full  sm:w-1/4"
                key={index}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto mb-14"
                />
                <div className="">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">{project.price}</p>{" "}
                    <span>|</span> {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Projects;
