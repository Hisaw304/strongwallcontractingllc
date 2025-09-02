// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative bg-gray-900 text-white h-[90vh] flex items-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')", // 👈 your image in public/
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Building Strong Walls, <br /> Building Stronger Trust
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Strong Wall Construction LLC provides professional remodeling and
          construction services across the United States. We bring strength,
          precision, and reliability to every project.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Request Free Estimate
          </a>
          <a
            href="#services"
            className="bg-transparent border border-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
