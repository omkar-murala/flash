// import Image from 'next/image';

// const InfiniteScrollCarousel = () => {
//   return (
//     <div className="flex h-screen w-full bg-gray-100 overflow-hidden">
//       <div className="w-full text-center pt-20">
//         <h2 className="text-3xl font-semibold text-gray-800">
//           Infinite Horizontal Scroll and Hover Pause with Pure CSS
//         </h2>
//       </div>
//       <div className="relative h-full flex items-center">
//         <div className="absolute flex animate-scroll-horizontal whitespace-nowrap">
//           <div className="w-1/4 ml-5 rounded-lg overflow-hidden">
//             <Image
//               src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
//               alt="cat1"
//               layout="responsive"
//               width={500}
//               height={500}
//               className="object-cover"
//             />
//           </div>
//           <div className="w-1/4 ml-5 rounded-lg overflow-hidden">
//             <Image
//               src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
//               alt="cat2"
//               layout="responsive"
//               width={500}
//               height={500}
//               className="object-cover"
//             />
//           </div>
//           <div className="w-1/4 ml-5 rounded-lg overflow-hidden">
//             <Image
//               src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4"
//               alt="cat3"
//               layout="responsive"
//               width={500}
//               height={500}
//               className="object-cover"
//             />
//           </div>
//           <div className="w-1/4 ml-5 rounded-lg overflow-hidden">
//             <Image
//               src="https://images.unsplash.com/photo-1517451330947-7809dead78d5"
//               alt="cat4"
//               layout="responsive"
//               width={500}
//               height={500}
//               className="object-cover"
//             />
//           </div>
//           {/* Repeat the images */}
//           <div className="w-1/4 ml-5 rounded-lg overflow-hidden">
//             <Image
//               src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
//               alt="cat5"
//               layout="responsive"
//               width={500}
//               height={500}
//               className="object-cover"
//             />
//           </div>
//           <div className="w-1/4 ml-5 rounded-lg overflow-hidden">
//             <Image
//               src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
//               alt="cat6"
//               layout="responsive"
//               width={500}
//               height={500}
//               className="object-cover"
//             />
//           </div>
//           <div className="w-1/4 ml-5 rounded-lg overflow-hidden">
//             <Image
//               src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4"
//               alt="cat7"
//               layout="responsive"
//               width={500}
//               height={500}
//               className="object-cover"
//             />
//           </div>
//           <div className="w-1/4 ml-5 rounded-lg overflow-hidden">
//             <Image
//               src="https://images.unsplash.com/photo-1517451330947-7809dead78d5"
//               alt="cat8"
//               layout="responsive"
//               width={500}
//               height={500}
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfiniteScrollCarousel;
// import Image from 'next/image';
// import { useRef } from 'react';

// const InfiniteScrollCarousel = () => {
//   const containerRef = useRef(null);

//   return (
//     <section className="py-12 bg-black">
//       <h2 className="text-center text-3xl md:text-3xl lg:text-4xl font-bold mb-2 font-[Inter Tight] text-white">
//         Sell across leading marketplaces
//       </h2>
//       <div className="overflow-hidden py-6">
//         <div
//           ref={containerRef}
//           className="flex items-center space-x-8 px-4"
//           style={{
//             whiteSpace: 'nowrap',
//             width: '100%',
//             overflowX: 'scroll',
//             scrollBehavior: 'smooth',
//             // Hide scrollbar for webkit browsers
//             scrollbarWidth: 'none', // For Firefox
//             msOverflowStyle: 'none', // For Internet Explorer and Edge
//           }}
//         >
//           <div className="flex-shrink-0">
//             <Image
//               src="/1amazon.png"
//               alt="Amazon logo"
//               width={150}
//               height={30}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/download.png"
//               alt="eBay logo"
//               width={150}
//               height={30}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/1etsy.png"
//               alt="Etsy logo"
//               width={60}
//               height={30}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/walmart.png"
//               alt="Walmart logo"
//               width={150}
//               height={30}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/wayfair.png"
//               alt="Wayfair logo"
//               width={150}
//               height={30}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/noon.png"
//               alt="Noon logo"
//               width={150}
//               height={30}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/zalando.png"
//               alt="Zalando logo"
//               width={150}
//               height={30}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/shopify.png"
//               alt="Shopify logo"
//               width={60}
//               height={30}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/1WooCommerce.png"
//               alt="WooCommerce logo"
//               width={150}
//               height={30}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/BigCommerce.png"
//               alt="BigCommerce logo"
//               width={150}
//               height={30}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           {/* Repeat images with different dimensions */}
//           <div className="flex-shrink-0">
//             <Image
//               src="/1amazon.png"
//               alt="Amazon logo"
//               width={150}
//               height={75}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/download.png"
//               alt="eBay logo"
//               width={150}
//               height={75}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/1etsy.png"
//               alt="Etsy logo"
//               width={60}
//               height={75}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/walmart.png"
//               alt="Walmart logo"
//               width={150}
//               height={75}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/Wayfair.png"
//               alt="Wayfair logo"
//               width={150}
//               height={75}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/noon.png"
//               alt="Noon logo"
//               width={150}
//               height={75}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/Zalando.png"
//               alt="Zalando logo"
//               width={150}
//               height={75}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/Shopify.png"
//               alt="Shopify logo"
//               width={60}
//               height={75}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/1WooCommerce.png"
//               alt="WooCommerce logo"
//               width={150}
//               height={75}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//           <div className="flex-shrink-0">
//             <Image
//               src="/BigCommerce.png"
//               alt="BigCommerce logo"
//               width={150}
//               height={75}
//               className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InfiniteScrollCarousel;


// import Image from 'next/image';
// import { useEffect, useRef } from 'react';

// const InfiniteScrollCarousel = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (container) {
//       // Adjust the scroll container width
//       const scrollWidth = container.scrollWidth;
//       container.style.width = `${scrollWidth}px`;
//     }
//   }, []);

//   // List of image paths
//   const imagePaths = [
//     "/1amazon.png",
//     "/download.png",
//     "/1etsy.png",
//     "/walmart.png",
//     "/noon.png",
//     "/1WooCommerce.png",
//     "/BigCommerce.png",
//     "/1amazon.png",
//     "/download.png",
//     "/1etsy.png",
//     "/walmart.png",
//     "/noon.png",
//     "/1WooCommerce.png",
//     "/BigCommerce.png",
//   ];

//   return (
//     <section className="py-12 bg-black">
//       <h2 className="text-center text-3xl md:text-3xl lg:text-4xl font-bold mb-2 font-[Inter Tight] text-white">
//         Sell across leading marketplaces
//       </h2>
//       <div className="overflow-hidden py-6">
//         <div className="animate-scroll-horizontal">
//           <div className="scroll-inner" ref={containerRef}>
//             {imagePaths.map((src, index) => (
//               <div key={index} className="scroll-item">
//                 <Image
//                   src={src}
//                   alt={`Logo ${index + 1}`}
//                   width={150}
//                   height={30}
//                   className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//                 />
//               </div>
//             ))}
//             {/* Repeat images again to ensure continuous effect */}
//             {imagePaths.map((src, index) => (
//               <div key={index + imagePaths.length} className="scroll-item">
//                 <Image
//                   src={src}
//                   alt={`Logo ${index + 1 + imagePaths.length}`}
//                   width={150}
//                   height={30}
//                   className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InfiniteScrollCarousel;



// import Image from 'next/image';

// const InfiniteScrollCarousel = () => {
//   const images = [
//     '/1amazon.png',
//     '/download.png',
//     '/11etsy.png',
//     '/walmart.png',
//     '/noon.png',
//     '/1WooCommerce.png',
//     '/BigCommerce.png',
//     '/1amazon.png',
//     '/download.png',
//     '/1etsy.png',
//     '/walmart.png',
//     '/noon.png',
//     '/1WooCommerce.png',
//     '/BigCommerce.png',
//     '/1amazon.png',
//     '/download.png',
//     '/1etsy.png',
//     '/walmart.png',
//     '/noon.png',
//     '/1WooCommerce.png',
//     '/BigCommerce.png',
//     '/1amazon.png',
//     '/download.png',
//     '/1etsy.png',
//     '/walmart.png',
//     '/noon.png',
//     '/1WooCommerce.png',
//     '/BigCommerce.png'
//   ];

//   return (
//     <section className="py-12 bg-black">
//       <h2 className="text-center text-3xl md:text-3xl lg:text-4xl font-bold mb-2 font-[Inter Tight] text-white">
//         Sell across leading marketplaces
//       </h2>
//       <div className="overflow-hidden py-6">
//         <div className="flex items-center space-x-0 px-4 animate-scroll-horizontal">
//           {images.concat(images, images).map((src, index) => ( // Duplicate more times
//             <div key={index} className="flex-shrink-0">
//               <Image
//                 src={src}
//                 alt={`Logo ${index}`}
//                 width={150}
//                 height={75}
//                 className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InfiniteScrollCarousel;

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const InfiniteScrollCarousel = () => {
  const images = [
    '/1amazon.png',
    '/download.png',
    '/12etsy.jpg',
    '/walmart.png',
    '/noon.png',
    '/1WooCommerce.png',
    '/BigCommerce.png',
    '/1amazon.png',
    '/download.png',
    '/12etsy.jpg',
    '/walmart.png',
    '/noon.png',
    '/1WooCommerce.png',
    '/BigCommerce.png',
    '/1amazon.png',
    '/download.png',
    '/12etsy.jpg',
    '/walmart.png',
    '/noon.png',
    '/1WooCommerce.png',
    '/BigCommerce.png',
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
        <div className="flex items-center space-x-0 px-4" style={{ width: 'max-content' }}>
          {images.concat(images).map((src, index) => (
            <div key={index} className="flex-shrink-0">
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
            <div key={index + images.length} className="flex-shrink-0">
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
