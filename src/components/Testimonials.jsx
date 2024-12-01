import { testimonials } from "../assets/assets";

function Testimonials() {
  return (
    <div className="container flex flex-col items-center mx-auto py-10 lg:px-32 w-full overflow-hidden ">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Customer{" "}
        <span className="underline underline-offset-4  decoration-1 under font-light  ">
          {" "}
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories drom those who Found Home with us
      </p>

      <div className="flex flex-wrap justify-center gap-8 ">
        {testimonials.map((testimonial, index) => (
          <div
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
            key={index}
          >
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-20 h-20 rounded-full mx-auto mb-4 "
            />
            <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img src={testimonial.rating} alt="" key={index} />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
