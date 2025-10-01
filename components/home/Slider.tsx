"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from "next/link";
import Image from "next/image";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Deep Cleaning Services",
      subtitle: "Every Corner Matters",
      description:
        "Comprehensive deep cleaning for move-ins, post-renovation, and seasonal needs.",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1920&h=1080&fit=crop&q=80",
      alt: "Deep cleaning supplies professionally arranged",
    },
    {
      id: 2,
      title: "Regular Maintenance",
      subtitle: "Keep It Perfect Weekly",
      description:
        "Consistent cleaning service with flexible scheduling that fits your lifestyle.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=80",
      alt: "Clean modern kitchen with cleaning tools",
    },
    {
      id: 3,
      title: "Professional Home Cleaning",
      subtitle: "Transform Your Space Today",
      description:
        "Expert residential cleaning with eco-friendly products and proven techniques.",
      image: "/hero-slider2.jpg",
      alt: "Professional cleaner in modern living room",
    },
  ];
  return (
    <div className="relative w-full h-screen">
      <Swiper
        // Import required modules
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        // Basic settings
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        // Navigation arrows
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // Pagination dots
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        // Autoplay
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // Fade effect
        effect="slide"
        fadeEffect={{
          crossFade: true,
        }}
        // Accessibility
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
        // Events
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                priority
                fetchPriority="high"
                loading="eager"
                src={slide.image}
                alt={slide.alt}
                fill
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
              <div className="max-w-4xl px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl mb-6 text-gray-200">
                  {slide.subtitle}
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="#contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Free Quote
                  </Link>
                  <Link
                    href="#contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Call Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev !text-white !left-4 !w-10 !h-10 !mt-0 !top-1/2 !-translate-y-1/2 !bg-white/20 !rounded-full hover:!bg-white/30 !backdrop-blur-sm !transition-all !duration-300"></div>
      <div className="swiper-button-next !text-white !right-4 !w-10 !h-10 !mt-0 !top-1/2 !-translate-y-1/2 !bg-white/20 !rounded-full hover:!bg-white/30 !backdrop-blur-sm !transition-all !duration-300"></div>

      {/* Custom Pagination */}
      <div className="swiper-pagination !bottom-8"></div>

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          width: 12px !important;
          height: 12px !important;
        }

        .swiper-pagination-bullet-active {
          background: white !important;
          transform: scale(1.2);
        }

        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 20px !important;
        }
      `}</style>
    </div>
  );
};

export default Slider;
