import Image from 'next/image';
import { useEffect, useRef } from 'react';

const InfiniteScrollCarousel = () => {
  const images = [
    '/1amazon.png',
    '/download.png',
    '/12etsy.jpg',
    '/walmart.png',
    '/noon-1.jpg',
    '/1WooCommerce.png',
    '/big-1.png',
    '/1amazon.png',
    '/download.png',
    '/12etsy.jpg',
    '/walmart.png',
    '/noon-1.jpg',
    '/1WooCommerce.png',
    '/big-1.png',
    '/1amazon.png',
    '/download.png',
    '/12etsy.jpg',
    '/walmart.png',
    '/noon-1.jpg',
    '/1WooCommerce.png',
    '/big-1.png',
    // Add more images as needed
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return; // Early return if scrollContainer is null

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-12 bg-black">
      <h2 className="text-center text-3xl md:text-3xl lg:text-4xl font-bold mb-2 font-[Inter Tight] text-white">
        Sell across leading marketplaces
      </h2>
      <div className="overflow-hidden py-6" ref={scrollContainerRef}>
        <div className="flex items-center space-x-4 px-4" style={{ width: 'max-content' }}>
          {images.concat(images).map((src, index) => (
            <div key={index} className="flex-shrink-0 mx-2">
              <Image
                src={src}
                alt={`Logo ${index}`}
                width={150}
                height={75}
                className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
              />
            </div>
          ))}
          {images.concat(images).map((src, index) => ( // Second set for seamless loop
            <div key={index + images.length} className="flex-shrink-0 mx-2">
              <Image
                src={src}
                alt={`Logo ${index}`}
                width={150}
                height={75}
                className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteScrollCarousel;
