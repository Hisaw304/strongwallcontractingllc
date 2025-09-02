import React from "react";

const WhatIsRemodeling = () => {
  return (
    <section id="remodeling" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Is Exterior Remodeling?
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Imagine a home without thoughtful exterior remodeling—it feels
            incomplete, lacking character, and missing the essence of comfort
            and style. Exterior remodeling is the unsung hero of home
            transformation, enhancing curb appeal while giving your living space
            the strength and beauty it deserves. It’s not just a project—it’s a
            journey of creativity, craftsmanship, and personal taste.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            The right remodeling approach can turn an ordinary home into a
            masterpiece. Whether it’s fresh siding, durable roofing, modern
            windows, or custom outdoor spaces, every detail defines your home’s
            character. Beyond looks, remodeling also means
            functionality—adapting to your evolving needs, improving comfort,
            and ensuring your home stands the test of time.
          </p>
          <p className="text-gray-600 leading-relaxed">
            At{" "}
            <span className="font-semibold">Strong Wall Construction LLC</span>,
            we help homeowners across the USA discover the true potential of
            their properties. Whether you’re dreaming of a complete
            transformation or a small upgrade, we’re here to guide you every
            step of the way.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/remodeling.webp" // 👈 place your image in public folder
            alt="Exterior Remodeling"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsRemodeling;
