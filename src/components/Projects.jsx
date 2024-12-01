import { useEffect, useState } from "react";
import { ArrowDownLeft, ArrowDownRight } from "lucide-react";
import { projectData } from "../assets/assets";

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
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200  rounded mr-2"
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
          className="flex hap-8 transition-transform duration-500 ease-in-out "
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectData.map((project, index) => (
            <div
              className="relatuve flex-shrink-0 w-full  sm:w-1/4"
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
    </>
  );
}

export default Projects;
