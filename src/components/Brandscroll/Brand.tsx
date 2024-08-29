
import Image from 'next/image';
import { useRef } from 'react';

const Infinite = () => {
  const images = [
    '/kk.jpg',
    '/Cbaz.png',
    '/ss.jpg',
    '/belizon.png',
    '/hijab black.png',
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="bg-black py-16 px-4">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
        Trusted by category leading brands
      </h2>
      <p className="text-center text-white mb-8">
        With Flash, our customers are growing their revenues and scaling globally
      </p>

      {/* Static Container */}
      <div
        className="overflow-hidden max-w-full mx-auto flex flex-wrap justify-center gap-4"
        ref={scrollContainerRef}
      >
        {/* Adjust card size and image fit */}
        {images.map((src, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg flex justify-center items-center h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64"
          >
            <Image
              className="w-full h-full object-fit rounded-lg"
              src={src}
              alt={`Image ${index + 1}`}
              width={256}
              height={256}

            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Infinite;
