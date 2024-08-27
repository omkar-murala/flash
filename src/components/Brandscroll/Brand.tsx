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
import { useRef } from 'react';

const Infinite = () => {
  const images = [
    '/kk.jpg',
    '/Cbazzarr.jpg',
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
