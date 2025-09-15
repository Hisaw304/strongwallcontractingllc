import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Proximity & Convenience",
      img: "/images/proximity.webp", // 👈 put your image in public folder
      text: `Searching for "exterior remodeling near me"? You've found the right team! 
      Andrea Construction Inc. is more than just local—we’re part of the community. 
      With a strong presence nationwide, we’re always ready to serve and adapt to the unique needs of homeowners across the USA.`,
    },
    {
      title: "Local Insight",
      img: "/images/local.webp",
      text: `With years of experience, we understand the character, style, and lifestyle preferences of our clients. 
      This insight allows us to design remodeling solutions that feel tailored and perfectly suited to your home.`,
    },
    {
      title: "Superior Craftsmanship",
      img: "/images/craftsmanship.webp",
      text: `True craftsmanship is more than skill—it’s a commitment to excellence. 
      Our passionate team approaches every project, big or small, with precision, care, and attention to detail.`,
    },
    {
      title: "Premium-Quality Materials",
      img: "/images/materials.webp",
      text: `Exceptional results begin with exceptional materials. 
      At Andrea Construction Inc., we partner with trusted suppliers to ensure every remodel uses only the highest-quality resources.`,
    },
    {
      title: "Transparent Pricing",
      img: "/images/pricing.webp",
      text: `Trust is the foundation of our work. Our clear and honest pricing model means no hidden fees, 
      no surprises—just straightforward estimates you can rely on.`,
    },
    {
      title: "Post-Service Support",
      img: "/images/support.webp",
      text: `Our work doesn’t end when the project is complete. 
      Through ongoing support and follow-ups, we make sure your investment continues to deliver satisfaction for years to come.`,
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose Andrea Construction Inc.?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Homeowners across the United States trust Andrea Construction Inc. for
          professional remodeling services. Our expertise, craftsmanship, and
          commitment to quality make us the partner you can count on.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
