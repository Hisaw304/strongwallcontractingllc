import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/about.webp" // 👈 your image in public folder
            alt="Andrea Construction Inc."
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Building Homes, Building Trust
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At <span className="font-semibold">Andrea Construction Inc.</span>,
            we bring craftsmanship, reliability, and innovation to every
            project. From roofing and siding upgrades to windows and custom
            outdoor spaces, our team is dedicated to enhancing the beauty,
            durability, and value of your home—anywhere across the United
            States.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We understand that your home is more than just walls—it’s where your
            life unfolds. That’s why we take the time to listen, plan with care,
            and deliver with precision. Whether you’re looking for a modern
            refresh or a full-scale remodel, Andrea Construction Inc. is your
            trusted partner in creating a home that truly reflects your vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
