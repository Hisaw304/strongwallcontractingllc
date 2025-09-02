import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/about.webp" // 👈 your image in public folder
            alt="Strong Wall Construction"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Strong Walls, Stronger Homes
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At{" "}
            <span className="font-semibold">Strong Wall Construction LLC</span>,
            we specialize in exterior remodeling that brings lasting beauty and
            strength to your home. From siding upgrades to roofing, windows, and
            custom outdoor spaces, our skilled team transforms your vision into
            reality—anywhere in the USA.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Your home is more than just a structure—it’s where life happens.
            That’s why we listen closely, plan carefully, and build with
            precision. Whether you need a fresh new look or a complete remodel,
            we are your trusted partner in creating a home you’ll love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
