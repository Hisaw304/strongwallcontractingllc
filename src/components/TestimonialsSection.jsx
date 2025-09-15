import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react"; // 👈 star icon

const testimonials = [
  {
    name: "Christopher West",
    role: "CEO, Fair Spares New England",
    feedback:
      "Amazing service! Andrea Construction Inc. made the remodeling process simple and stress-free. Their team guided me at every step and delivered exactly what I needed.",
  },
  {
    name: "Sarah Johnson",
    role: "Homeowner, North Myrtle Beach",
    feedback:
      "Our kitchen renovation exceeded every expectation. The craftsmanship, clear communication, and attention to detail from Andrea Construction Inc. were truly outstanding.",
  },
  {
    name: "David Martinez",
    role: "Property Investor",
    feedback:
      "Professional, transparent, and reliable—Andrea Construction added real value to my property with their exceptional work. I’ll definitely partner with them again.",
  },
  {
    name: "Emily Carter",
    role: "Business Owner",
    feedback:
      "They remodeled my storefront, and the transformation has been incredible. My customers notice the difference immediately. Andrea Construction Inc. is the real deal.",
  },
  {
    name: "Michael Thompson",
    role: "Homeowner",
    feedback:
      "Our deck and porch remodel was handled with honesty and care. The Andrea Construction team went above and beyond to deliver amazing results at a fair price.",
  },
];

// Helper → get initials
const getInitials = (name) => {
  const parts = name.split(" ");
  const first = parts[0][0] || "";
  const last = parts[parts.length - 1][0] || "";
  return (first + last).toUpperCase();
};

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center h-full">
                {/* Initials Circle */}
                <div className="w-16 h-16 flex items-center justify-center bg-green-600 text-white font-bold text-xl rounded-full mb-6">
                  {getInitials(testimonial.name)}
                </div>

                {/* Feedback */}
                <p className="text-gray-700 italic mb-6">
                  “{testimonial.feedback}”
                </p>

                {/* Stars */}
                <div className="flex mb-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500" />
                  ))}
                </div>

                {/* Name + Role */}
                <h4 className="font-bold text-lg">{testimonial.name}</h4>
                <p className="text-green-600 text-sm">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
