import React from "react";

const StormDamageSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }} // 👈 replace with your image in public
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          HAVE YOU EXPERIENCED STORM DAMAGE?
        </h2>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          Your home is your sanctuary, and every detail counts in creating the
          perfect living space. Let us guide you through the best exterior
          remodeling options to suit your needs. Once you find your ideal
          vision, we'll take care of the entire transformation from start to
          finish.
        </p>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          As your local remodeling experts, we don't just stop at interiors; we
          offer comprehensive solutions from structural changes to aesthetic
          enhancements, including additional services like siding and gutter
          installation.
        </p>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Our dedicated team is here to manage your project seamlessly, ensuring
          that every aspect of your home renovation is handled with precision
          and care. Trust us to elevate your home with unmatched quality and
          style.
        </p>
        <a
          href="#contact"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all"
        >
          Get Help Today
        </a>
      </div>
    </section>
  );
};

export default StormDamageSection;
