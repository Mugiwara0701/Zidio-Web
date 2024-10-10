import React from "react";

function Contact({ darkMode }) {
  return (
    <section id="contact">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-64"
        style={{
          backgroundImage: "url(/antoine-barres-jay5BqVyf5A-unsplash.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl text-white font-bold">Contact Us</h1>
        </div>
      </div>

<br /><br /><br /><br />
      {/* Contact and Map Section */}
      <div className="container mx-auto mt-10 mb-10 px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <form
            className={`w-full max-w-lg shadow-md rounded px-8 pt-6 pb-8 ${
              darkMode ? "bg-white" : "bg-gray-800"
            }`}
          >
            <div className="mb-4">
              <label
                className={`block text-sm font-bold mb-2 ${
                  darkMode ? "text-gray-700" : "text-white"
                }`}
                htmlFor="name"
              >
                Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                  darkMode ? "text-gray-700" : "text-white"
                }`}
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                className={`block text-sm font-bold mb-2 ${
                  darkMode ? "text-gray-700" : "text-white"
                }`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                  darkMode ? "text-gray-700" : "text-white"
                }`}
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-6">
              <label
                className={`block text-sm font-bold mb-2 ${
                  darkMode ? "text-gray-700" : "text-white"
                }`}
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                  darkMode ? "text-gray-700" : "text-white"
                }`}
                id="message"
                placeholder="Your message"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>



        {/* Google Map */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <iframe
            title="Google Map Location"
            className="w-full h-64 lg:h-96 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.1947615944896!2d77.62624697468922!3d12.765860387530866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84179333b909112d%3A0x99b7aa8200259bb9!2sZidio%20Development%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1728309749806!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
          >
            
          </iframe>
        </div>
      </div>

      <br /><br /><br /><br />
    </section>
  );
}

export default Contact;
