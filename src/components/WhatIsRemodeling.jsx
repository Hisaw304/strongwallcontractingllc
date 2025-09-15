import React from "react";

const WhatIsRemodeling = () => {
  return (
    <section id="remodeling" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Redefining Exterior Remodeling
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A home without thoughtful exterior design often feels incomplete,
            lacking personality and the welcoming charm every homeowner
            deserves. Exterior remodeling is more than a surface upgrade—it’s
            the key to enhancing curb appeal, increasing durability, and giving
            your space the style and comfort that make it truly feel like home.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            From modern siding and durable roofing to energy-efficient windows
            and custom outdoor living areas, every detail plays a role in
            defining your home’s character. Remodeling is not just about looks;
            it’s about functionality, improving comfort, and ensuring your home
            stands strong for years to come.
          </p>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold">Andrea Construction Inc.</span>,
            we help homeowners across the United States unlock the full
            potential of their properties. Whether you’re planning a complete
            transformation or a simple upgrade, our team is here to guide you
            with expertise, care, and craftsmanship every step of the way.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/remodeling.webp" // 👈 place your image in public folder
            alt="Exterior Remodeling by Andrea Construction Inc."
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsRemodeling;
