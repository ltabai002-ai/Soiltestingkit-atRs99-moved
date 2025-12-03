import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  '/9a083a53-ed34-4538-84de-5f6833861a1f.webp',
  '/17d75adf-68ef-413d-9c2b-b1ace3af9ae6 (1).webp',
  '/13092466-0038-47eb-8a95-ffbd72ace8ff.webp',
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Soil testing ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-deep-green/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 min-h-screen flex items-center">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Things you must do before{' '}
              <span className="text-warm-yellow">Bhumi Poojan</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Ensure your construction project starts on the right foundation with proper soil testing
            </p>
            <button className="bg-warm-yellow text-deep-green font-bold px-8 py-4 rounded-lg text-lg hover:bg-gold transition-colors duration-300 shadow-lg min-h-[48px] min-w-[160px]">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-warm-yellow w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
