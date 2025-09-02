import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset(); // <-- clears all input fields
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Get in touch with{" "}
            <span className="text-green-600 font-semibold">
              Strong Wall Construction LLC
            </span>
            . We’d love to hear from you!
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all"
            >
              Send Message
            </button>

            {/* Success Message */}
            {submitted && (
              <p className="mt-4 text-green-600 font-medium text-center">
                ✅ Your message has been sent successfully!
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <h3 className="text-2xl font-bold mb-4">Our Office</h3>
            <p className="text-gray-700">
              Strong Wall Construction LLC
              <br />
              North Myrtle Beach, SC
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Phone:</span> (555) 987-6543
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>{" "}
              info@strongwallconstruction.com
            </p>

            {/* Google Map Embed */}
            <div className="rounded-lg overflow-hidden shadow">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.065152067479!2d-78.678!3d33.815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8900abc123456789%3A0x987654321!2sNorth%20Myrtle%20Beach!5e0!3m2!1sen!2sus!4v1693329349823"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                className="border-0 w-full h-72"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
