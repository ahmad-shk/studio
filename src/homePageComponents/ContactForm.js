import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="min-h-screen w-full max-w-2xl    bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        {/* Form Heading */}
        <h2 className="text-center text-3xl font-bold text-white mb-8">
          Ready To Discuss?
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-transparent px-4"
        >
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-white"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Phone/Mobile */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white"
            >
              Phone/Mobile
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Mobile Number"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Services */}
          <div>
            <label
              htmlFor="services"
              className="block text-sm font-medium text-white"
            >
              Services
            </label>
            <select
              id="services"
              name="services"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm text-gray-600  focus:ring-orange-500 focus:border-orange-500"
              required
            >
              <option value="">Choose</option>
              <option value="web-development">Web Development</option>
              <option value="app-development">App Development</option>
              <option value="digital-marketing">Digital Marketing</option>
            </select>
          </div>

          {/* Your Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm font-medium"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
