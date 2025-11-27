import { useState, useEffect } from "react";

export const Carousel = () => {
  const images = [
    {
      src: "/recipe-finder/updated-mvvm.png",
      caption: "Updated MVVM architecture showing View, ViewModel, and Repository separation."
    },
    {
      src: "/recipe-finder/threaded-design-diagram.png",
      caption: "Threaded design diagram illustrating background processing and UI thread communication."
    }
  ];

  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // close lightbox on esc
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <div className="w-full max-w-4xl mx-auto">

        {/* title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#06402B] mb-4 text-center">
          MVVM and Threaded Design Diagram
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-[#06402B] mb-16 text-center">
            Click on the image for a larger view</p>

        <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-white p-4 sm:p-6">

          {/* image */}
          <div className="relative h-80 sm:h-112 md:h-144 bg-white">
            {images.map((img, index) => (
              <img
                key={img.src}
                src={img.src}
                alt={`carousel ${index + 1}`}
                onClick={() => setLightboxOpen(true)}
                className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 cursor-zoom-in ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
            >
              ›
            </button>
          </div>

          {/* caption */}
          <p className="mt-6 text-center text-sm sm:text-base text-gray-700 max-w-3xl mx-auto">
            {images[current].caption}
          </p>

          {/* dots */}
          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-[#06402B]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* full screen lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center px-4"
          onClick={() => setLightboxOpen(false)}
        >
          {/* close button*/}
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setLightboxOpen(false)}
          >
            ×
          </button>

          {/* fullscreen image */}
          <img
            src={images[current].src}
            alt="Fullscreen preview"
            className="max-w-[95vw] max-h-[80vh] object-contain mb-6"
            onClick={(e) => e.stopPropagation()}
          />

          {/* caption */}
          <p className="text-white text-center text-sm sm:text-base max-w-3xl">
            {images[current].caption}
          </p>
        </div>
      )}
    </>
  );
};
