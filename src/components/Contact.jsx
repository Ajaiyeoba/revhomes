import React from "react";
import { toast } from "react-toastify";
function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5fe1981f-252d-4243-b651-e24364f6d814");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
     setResult("")
    
      //   setResult(data.message);
    }
  };

  return (
    <div className="container flex flex-col items-center mx-auto py-10 lg:px-32 w-full overflow-hidden ">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Contact{" "}
        <span className="underline underline-offset-4  decoration-1 under font-light  ">
          {" "}
          Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Contact Us to make a real move
      </p>

      <fieldset>
        <form
          onSubmit={onSubmit}
          action=""
          className="max-w-2xl mx-auto text-gray-600 pt-8"
        >
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left">
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 "
                placeholder="Your Name"
                name="Name"
                required
              />
            </div>

            <div className="w-full md:w-1/2 text-left md:pl-4">
              <label htmlFor="">Your Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2 "
                placeholder="Your Email"
                name="Email"
                required
              />
            </div>
          </div>

          <div className="my-6 text-left">
            <label htmlFor="" className="text-gray-600">
              Message
            </label>
            <textarea
              name="Message"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <button className="bg-blue-600 text-white py-2 px-12 mb-10  rounded">
            {result ? result : "Send Message"}
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default Contact;
