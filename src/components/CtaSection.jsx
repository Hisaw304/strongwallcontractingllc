import React from "react";

const CtaSection = () => {
  return (
    <section
      id="cta"
      className="relative bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }} // 👈 put your image in public folder
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Secure Your Dream Transformation Today
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Ready to transform your space? Book now with{" "}
          <span className="font-semibold">Strong Wall Construction LLC</span>{" "}
          and start your journey toward a beautifully remodeled home. Our expert
          team is eager to work with you, ensuring every detail of your project
          is handled with precision and care.
        </p>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Don’t wait to make your dream home a reality—secure your slot today
          and let us bring your vision to life!
        </p>
        <a
          href="#contact"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
