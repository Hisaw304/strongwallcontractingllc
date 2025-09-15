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
          Start Your Dream Home Transformation Today
        </h2>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Ready to bring your vision to life? Partner with{" "}
          <span className="font-semibold">Andrea Construction Inc.</span> and
          experience remodeling done with precision, reliability, and care. From
          planning to the final touches, our expert team is here to make your
          project seamless and stress-free.
        </p>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Don’t wait—secure your spot today and take the first step toward a
          home that’s as strong, beautiful, and welcoming as you’ve always
          imagined.
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
