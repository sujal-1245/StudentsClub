import { useState, useEffect, useRef } from "react";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const n = images.length;
  const timeoutRef = useRef(null);

  // Auto Slide Function
  const resetAutoSlide = () => {
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % n);
    }, 4000);
  };

  useEffect(() => {
    resetAutoSlide();
    return () => clearInterval(timeoutRef.current);
  }, [n]);

  const goTo = (index) => {
    setCurrent(index);
    resetAutoSlide();
  };

  return (
    <div
      className="relative w-full rounded-b-3xl overflow-hidden group"
      onMouseEnter={() => clearInterval(timeoutRef.current)}
      onMouseLeave={resetAutoSlide}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out rounded-3xl"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-[300px] sm:h-[400px] md:h-[250px]"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={() => goTo((current - 1 + n) % n)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition opacity-0 group-hover:opacity-100"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={() => goTo((current + 1) % n)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition opacity-0 group-hover:opacity-100"
        aria-label="Next Slide"
      >
        ›
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Slide ${index + 1}`}
            className={`h-2 w-2 rounded-full ${
              current === index ? "bg-white w-3" : "bg-white/50"
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
}
