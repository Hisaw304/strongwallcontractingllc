import React from "react";
import { Home, PhoneCall, Hammer } from "lucide-react"; // 👈 icons

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Identify Problem Areas",
      text: "Take a look at your home and note the areas that need attention. Whether it’s your siding, roofing, or outdoor living space, identifying the issues is the first step toward transformation.",
      icon: <Home className="w-10 h-10 text-green-600" />,
    },
    {
      number: "02",
      title: "Contact Rock Solid Construction",
      text: "Reach out to our expert team to discuss your remodeling needs. We’ll listen carefully, provide recommendations, and create a plan tailored to your home and lifestyle.",
      icon: <PhoneCall className="w-10 h-10 text-green-600" />,
    },
    {
      number: "03",
      title: "We'll Be On Our Way",
      text: "Once you’re ready, we’ll get to work. Our skilled team will arrive promptly and ensure your remodeling project is handled with care, precision, and professionalism from start to finish.",
      icon: <Hammer className="w-10 h-10 text-green-600" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="mb-4">{step.icon}</div>

              {/* Number Circle */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-600 text-white text-lg font-bold mb-4 shadow-md">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
