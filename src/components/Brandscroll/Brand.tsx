// import Image from 'next/image';
// import { useEffect, useRef } from 'react';

// const Infinite = () => {
//   const images = [
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
//     '/keroblack.png',
//     '/cbaz.png',
//     '/png.jpg',
//     '/belizon.png',
//     '/hijab black.png',
    
//   ];

//   const scrollContainerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;

//     if (!scrollContainer) return;

//     const scroll = () => {
//       if (scrollContainer) {
//         scrollContainer.scrollLeft += 1;

//         if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
//           scrollContainer.scrollLeft = 0;
//         }
//       }
//     };

//     const intervalId = setInterval(scroll, 20);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <section className="bg-black py-16 px-4">
//       <h2 className="text-center md:text-3xl text-3xl lg:text-4xl font-bold mb-2 text-white">
//         Trusted by category leading brands
//       </h2>
//       <p className="text-center text-white mb-8">
//         With Flash, our customers are growing their revenues and scaling globally
//       </p>

//       {/* Scrolling Container */}
//       <div className="overflow-hidden max-w-full mx-auto" ref={scrollContainerRef}>
//         <div className="flex items-center space-x-8 animate-scroll-horizontal" style={{ width: 'max-content' }}>
//           {/* Duplicate the images twice for seamless scroll */}
//           {images.concat(images).concat(images).map((src, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-8 rounded-lg flex justify-center items-center h-48 w-[24%]" // Adjusted width to show 4 cards
//             >
//               <Image
//                 className="w-full h-full object-contain rounded-lg"
//                 src={src}
//                 alt={`Image ${index + 1}`}
//                 width={400}
//                 height={300}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Infinite;
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Infinite = () => {
  const images = [
    '/keroblack.png',
    '/cbaz.png',
    '/png.jpg',
    '/belizon.png',
    '/hijab black.png',
    '/png.jpg',
    '/keroblack.png',
    '/cbaz.png',
    '/png.jpg',
    '/belizon.png',
    '/hijab black.png',
    '/png.jpg',
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer) {
        // Reduced scroll speed
        scrollContainer.scrollLeft += 0.2;

        // Make sure it loops smoothly
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    // Slowed down the scroll for a smoother effect
    const intervalId = setInterval(scroll, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-black py-16 px-4">
      <h2 className="text-center md:text-3xl text-3xl lg:text-4xl font-bold mb-2 text-white">
        Trusted by category leading brands
      </h2>
      <p className="text-center text-white mb-8">
        With Flash, our customers are growing their revenues and scaling globally
      </p>

      {/* Scrolling Container */}
      <div className="overflow-hidden max-w-full mx-auto" ref={scrollContainerRef}>
        <div className="flex items-center space-x-8" style={{ width: 'max-content' }}>
          {/* Duplicate the images for seamless scroll */}
          {images.concat(images).concat(images).map((src, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg flex justify-center items-center h-48 w-[24%]" // Adjusted width to show 4 cards
            >
              <Image
                className="w-full h-full object-contain rounded-lg"
                src={src}
                alt={`Image ${index + 1}`}
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infinite;
