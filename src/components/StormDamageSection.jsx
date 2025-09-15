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
          Has Your Home Suffered Storm Damage?
        </h2>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          Storms can leave behind more than just visible damage—they can
          compromise the safety, comfort, and value of your home. At{" "}
          <span className="font-semibold">Andrea Construction Inc.</span>, we
          specialize in restoring and strengthening homes with exterior
          remodeling solutions tailored to your needs.
        </p>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          From roofing and siding repairs to gutters, windows, and structural
          enhancements, our experienced team is equipped to handle every aspect
          of storm recovery with precision and care.
        </p>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          When disaster strikes, you need more than quick fixes—you need a
          trusted partner who will restore your home with unmatched quality and
          lasting protection. Let Andrea Construction Inc. help you rebuild
          stronger than before.
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
