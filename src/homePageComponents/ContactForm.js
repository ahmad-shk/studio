import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // For showing loading state
  const [error, setError] = useState(null); // For capturing errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    // EmailJS send call
    emailjs
      .send(
        "service_47k6mtn", // Replace with your EmailJS service ID
        "template_8z22y88", // Replace with your EmailJS template ID
        formData, // Form data to send
        "PiJ9WI8neGkJjFyRX" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Success:", response);
          alert("Form submitted successfully!");
        },
        (error) => {
          console.log("Error:", error);
          setError("Error sending form, please try again.");
        }
      )
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  };

  return (
    <div className="min-h-screen w-full max-w-2xl bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        {/* Form Heading */}
        <h2 className="text-center text-3xl font-bold text-white mb-8">
          Ready To Discuss?
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-transparent px-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-white">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-black shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-black shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Phone/Mobile */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Phone/Mobile
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-black shadow-sm focus:ring-orange-500 focus:border-orange-500"
            />
          </div>

          {/* Services */}
          <div>
            <label htmlFor="services" className="block text-sm font-medium text-white">
              Services
            </label>
            <select
              id="services"
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm text-gray-600 focus:ring-orange-500 focus:border-orange-500"
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
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-black shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            ></textarea>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-center">
              <p>{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm font-medium"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Form"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
