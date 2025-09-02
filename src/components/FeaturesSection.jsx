import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Proximity & Convenience",
      img: "/images/proximity.webp", // 👈 put your image in public folder
      text: `Looking for "exterior remodeling near me"? You've found the right place! 
      Strong Wall Construction LLC is more than just local—we're an integral part of your community. 
      Our strong presence ensures we're readily available and well-versed in the unique requirements of residents nationwide.`,
    },
    {
      title: "Local Insight",
      img: "/images/local.webp",
      text: `As a company with deep roots, we understand the unique character and style preferences 
      of our clients. This regional insight enables us to design remodeling projects that are precisely 
      suited for your home and lifestyle.`,
    },
    {
      title: "Superior Craftsmanship",
      img: "/images/craftsmanship.webp",
      text: `Craftsmanship isn't just about skill—it's fueled by passion. 
      Our team is overflowing with enthusiasm and dedication to excellence in every remodeling project, 
      no matter the size. Every detail is carried out with precision and care.`,
    },
    {
      title: "Prempricingium-Quality Materials",
      img: "/images/materials.webp",
      text: `Crafting exceptional work demands the highest quality materials. 
      We've established partnerships with leading suppliers, guaranteeing that every remodeling 
      project uses only the best resources to bring your vision to life.`,
    },
    {
      title: "Transparent Pricing Model",
      img: "/images/pricing.webp",
      text: `Trust is foundational in our industry. Our transparent pricing model ensures 
      no hidden costs or surprises—just honesty and integrity in every estimate.`,
    },
    {
      title: "Post-Service Support",
      img: "/images/support.webp",
      text: `We don’t just remodel homes—we build lasting relationships. 
      Through dedicated post-project support and routine follow-ups, we ensure your satisfaction long after completion.`,
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Professional Exterior Remodeling Near You
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover why Strong Wall Construction LLC is the trusted choice for
          remodeling services across the USA. Our values, craftsmanship, and
          commitment to quality set us apart.
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
