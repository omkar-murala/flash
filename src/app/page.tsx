"use client";

import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  ScriptableContext,
  Title,
  Tooltip,
} from "chart.js";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { FaBoxOpen, FaChartLine, FaClipboardList, FaPeopleCarry, FaRocket, FaShippingFast, FaStore, FaTruck, FaWarehouse } from 'react-icons/fa';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HomePage = () => {
  const chartRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Net Sales",
        data: [
          5000, 6000, 7000, 8000, 9000, 10000, 13000, 15000, 16000, 18500,
          20000, 25000,
        ],
        borderColor: "rgba(0, 0, 255, 1)", // Blue color for the line
        backgroundColor: (context: ScriptableContext<"line">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return "rgba(0, 0, 255, 0)"; // Transparent if chart area is not available
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(0, 0, 255, 0.5)"); // Blue at the top
          gradient.addColorStop(1, "rgba(0, 0, 255, 0)"); // Transparent at the bottom

          return gradient;
        },
        fill: true,
      },
    ],
  };

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust the speed of scrolling
    let animationFrameId: number;

    const animateScroll = () => {
      if (container) {
        scrollAmount += scrollSpeed;
        container.scrollLeft = scrollAmount;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        animationFrameId = requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    // <Navbar />
      <>
      
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-20 md:pb-32  bg-gradient-to-b from-[#000033] to-black/80 text-white">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
    <div className="relative flex items-center bg-white/20 rounded-full px-2 py-1 shadow-md mb-4 border border-transparent w-54 h-10 overflow-hidden">
            <FaRocket className="mr-2 text-white" size={20} />
            <h1 className="text-xs md:text-sm lg:text-base font-medium text-white">
              Next-Generation Inventory Planning Software
            </h1>
            <div className="absolute inset-0 rounded-full border-4 border-transparent z-0 custom-border-animation"></div>
          </div>
          <div className="text-xs md:text-sm lg:text-base max-w-4xl mx-auto mb-6 font-light leading-relaxed">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-[Inter Tight]">
              Sell your Products Globally with <span className="text-blue-500">Flash OS</span>
            </h1>
            <p className="mt-2 text-xs md:text-sm font-[Inter Tight] text-blue-200">
              Flash OS supports local brands and sellers to expand into 220+ countries in under 48 hours. We manage your shipping, local compliances, warehousing, returns, payments so you can focus on scaling and growing.
            </p>
          </div>
          <a
            href="https://calendly.com/parikshit-bhanushali/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-semibold py-3 px-6 rounded hover:bg-yellow-300 transition duration-300"
          >
            Book a Demo
          </a>
        </div>
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-purple-500 to-blue-700 opacity-30 mix-blend-overlay"></div>
        </div>
      </section>




      {/* Graph Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-black/80 to-black text-white">
  <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">Selling Globally has always been Hard. With Flash we make it smooth and simple.</h2>

  <div className="max-w-4xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-12">
      <div className="bg-gray-800 rounded-lg p-4 md:p-6 mx-4 sm:mx-0">
        <h3 className="text-base md:text-lg font-medium">Orders (28 days)</h3>
        <p className="text-xl md:text-2xl font-bold">3127</p>
        <p className="text-green-400 text-base md:text-lg">↑47.36%</p>
        <p className="text-gray-400 text-sm">to last 28 days</p>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 md:p-6 mx-4 sm:mx-0">
        <h3 className="text-base md:text-lg font-medium">Returns (28 days)</h3>
        <p className="text-xl md:text-2xl font-bold">85</p>
        <p className="text-red-400 text-base md:text-lg">↓35.2%</p>
        <p className="text-gray-400 text-sm">to last 28 days</p>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 md:p-6 mx-4 sm:mx-0">
        <h3 className="text-base md:text-lg font-medium">Gross Sales (28 days)</h3>
        <p className="text-xl md:text-2xl font-bold">112,077.09₹</p>
        <p className="text-green-400 text-base md:text-lg">↑21.68%</p>
        <p className="text-gray-400 text-sm">to last 28 days</p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto">
      <Line data={data} options={options} />
    </div>
  </div>
</section>




      {/* Infinite Scrolling Logos (Trusted Brands) */}
      
      <section className="py-12 bg-black">
      <h2 className="text-center text-3xl font-bold mb-8 text-white">Trusted by Leading Marketplaces</h2>
      <div className="overflow-hidden py-6">
        <div
          ref={containerRef}
          className="flex items-center space-x-8 px-4"
          style={{
            whiteSpace: 'nowrap',
            width: '100%',
            overflowX: 'scroll',
            scrollBehavior: 'smooth',
            // Hide scrollbar for webkit browsers
            scrollbarWidth: 'none', // For Firefox
            msOverflowStyle: 'none', // For Internet Explorer and Edge
          }}
        >
          <div className="flex-shrink-0">
            <Image
              src="/amazon.png"
              alt="Amazon logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/download.png"
              alt="eBay logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/etsy.png"
              alt="Etsy logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/walmart.png"
              alt="Walmart logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/wayfair.png"
              alt="Wayfair logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/noon.png"
              alt="Noon logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/zalando.png"
              alt="Zalando logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/shopify.png"
              alt="Shopify logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/WooCommerce.png"
              alt="WooCommerce logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/BigCommerce.png"
              alt="BigCommerce logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>

          {/* Duplicate the logos to ensure continuous scrolling */}
          <div className="flex-shrink-0">
            <Image
              src="/amazon.png"
              alt="Amazon logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/download.png"
              alt="eBay logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/etsy.png"
              alt="Etsy logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/walmart.png"
              alt="Walmart logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/Wayfair.png"
              alt="Wayfair logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/noon.png"
              alt="Noon logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/Zalando.png"
              alt="Zalando logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/Shopify.png"
              alt="Shopify logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/WooCommerce.png"
              alt="WooCommerce logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/BigCommerce.png"
              alt="BigCommerce logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>

      {/* Our Products Section
      <section id="products" className="py-16 px-4 bg-black">
        <h2 className="text-center text-4xl font-bold text-white mb-12">Our Products</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col lg:flex-row items-center bg-black shadow-lg rounded-lg overflow-hidden">
            <div className="lg:w-1/2">
              <Image
                src="https://via.placeholder.com/500" // Replace with actual image URL
                alt="Flash Checkout"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="lg:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Flash Checkout</h2>
              <p className="text-gray-300 mb-4">
                Take your D2C Brand Global
              </p>
              <p className="text-gray-400 mb-4">
                Localized Checkout with Local Payment Methods<br />
                Local Compliances, Taxes and Duties Handled<br />
                Go Live in any country with MOR Model<br />
                Ship Across 220+ countries with Flash Express
              </p>
              <button className="mt-6 bg-white text-black py-2 px-6 rounded hover:bg-gray-300 transition duration-300">
                Get Started
              </button>
            </div>
          </div>

          
          <div className="flex flex-col lg:flex-row items-center bg-black shadow-lg rounded-lg overflow-hidden">
            <div className="lg:w-1/2">
              <Image
                src="https://via.placeholder.com/500" // Replace with actual image URL
                alt="Flash 3PL"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="lg:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Flash 3PL</h2>
              <p className="text-gray-300 mb-4">
                Fulfill your Global Orders with Flash 3PL Network.
              </p>
              <p className="text-gray-400 mb-4">
                Use Our Warehouse Network in 220+ countries to fulfill your Orders in Local Market.<br />
                Compliances, Returns Management, Local Payments all handled by us.
              </p>
              <button className="mt-6 bg-white text-black py-2 px-6 rounded hover:bg-gray-300 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Products Section */}
      {/* Our Products Section */}
<section id="products" className="py-16 px-4 bg-gradient-to-b from-black to-black/80">
  <h2 className="text-center text-4xl font-bold text-white mb-12">Our Products</h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    {/* Product 1 - Flash Checkout */}
    <div className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-lg">
      <div className="bg-[#0f0f1a] p-6 rounded-lg">
        <Image
          src="/razorpay.png" // Replace with actual image URL
          alt="Flash Checkout"
          width={500}
          height={500}
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="mt-6">
          <h2 className="text-xl font-bold text-white">Flash Checkout</h2>
          <p className="text-gray-400 mt-2">Take your D2C Brand Global</p>
          <p className="text-gray-500 mt-2">
            Localized Checkout with Local Payment Methods<br />
            Local Compliances, Taxes and Duties Handled<br />
            Go Live in any country with MOR Model<br />
            Ship Across 220+ countries with Flash Express
          </p>
        </div>
      </div>
    </div>

    {/* Product 2 - Flash 3PL */}
    <div className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-lg">
      <div className="bg-[#0f0f1a] p-6 rounded-lg">
        <Image
          src="/3pay.png" // Replace with actual image URL
          alt="Flash 3PL"
          width={500}
          height={500}
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="mt-6">
          <h2 className="text-xl font-bold text-white">Flash 3PL</h2>
          <p className="text-gray-400 mt-2">Fulfill your Global Orders with Flash 3PL Network.</p>
          <p className="text-gray-500 mt-2">
            Use Our Warehouse Network in 220+ countries to fulfill your Orders in Local Market.<br />
            Compliances, Returns Management, Local Payments all handled by us.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



      <section style={{ padding: '2rem 1rem', textAlign: 'center', backgroundColor: 'black' }}>
      <h1>Improve Profitability with Flash Returns</h1>
      <p>Connect 50+ Marketplaces and Fulfill Orders</p>
      <div style={{ marginTop: '2rem', position: 'relative', width: '100%', height: '300px' }}>
        <Image
          src="https://via.placeholder.com/500"
          alt="Illustration of orders connecting and shipping"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>

     {/* how it works */}
     <section className="bg-gray-900 text-white py-16 px-4 text-center">
  <h2 className="text-3xl font-bold mb-12">How It Works</h2>

  <div className="flex flex-col gap-12 items-center">
    {/* Step 1 */}
    <div className="flex items-start max-w-4xl w-full p-6 border border-gray-700 rounded-lg bg-gray-800 shadow-lg">
      <FaStore size={60} className="text-blue-500 mr-6" />
      <div className="text-left">
        <h3 className="text-xl font-semibold mb-2">Connect Marketplaces and Storefronts</h3>
        <p className="mb-4">Pull all the orders and manage them with Flash.</p>
        {/* Asset Placeholder */}
        <p className="text-gray-400">Streamline your orders seamlessly.</p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex items-start max-w-4xl w-full p-6 border border-gray-700 rounded-lg bg-gray-800 shadow-lg">
      <FaShippingFast size={60} className="text-green-500 mr-6" />
      <div className="text-left">
        <h3 className="text-xl font-semibold mb-2">Ship, Store & Fulfil</h3>
        <p className="mb-4">Ship your products in bulk with Flash Express and store them globally in our warehouses.</p>
        {/* Asset Placeholder */}
        <p className="text-gray-400">Efficient storage and fulfillment solutions.</p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex items-start max-w-4xl w-full p-6 border border-gray-700 rounded-lg bg-gray-800 shadow-lg">
      <FaChartLine size={60} className="text-purple-500 mr-6" />
      <div className="text-left">
        <h3 className="text-xl font-semibold mb-2">Grow Your Presence</h3>
        <p className="mb-4">Ship locally within 2 days and grow your revenue 10X.</p>
        {/* Asset Placeholder */}
        <p className="text-gray-400">Expand your market reach effectively.</p>
      </div>
    </div>
  </div>
</section>


      {/* New Services Section */}
<section className="py-16 px-4 bg-black">
  <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-12">
    We will handle everything you need to sell products internationally.
  </h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
    {/* Card 1 */}
    <div className="flex flex-col items-center bg-black border rounded-lg p-6 shadow-sm">
      <FaShippingFast size={30} color="#0070f3" className="mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">Discounted Cross-Border Logistics</h3>
      <p className="text-gray-700">
        Ship items to the US and Europe by air or sea with the lowest pre-negotiated rates.
      </p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center bg-clack border rounded-lg p-6 shadow-sm">
      <FaBoxOpen size={30} color="#0070f3" className="mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">Inventory Handling and Storage</h3>
      <p className="text-gray-700">
        Store inventory at our global fulfillment center for faster and cheaper shipping.
      </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center bg-black border rounded-lg p-6 shadow-sm">
      <FaClipboardList size={30} color="#0070f3" className="mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">Inventory and Order Management</h3>
      <p className="text-gray-700">
        Track inventory in real-time. Monitor stock levels. Track your orders in one place.
      </p>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center bg-black border rounded-lg p-6 shadow-sm">
      <FaTruck size={30} color="#0070f3" className="mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">2-Day Shipping</h3>
      <p className="text-gray-700">
        Guaranteed 2-day shipping across the US is available.
      </p>
    </div>

    {/* Card 5 */}
    <div className="flex flex-col items-center bg-black border rounded-lg p-6 shadow-sm">
      <FaPeopleCarry size={30} color="#0070f3" className="mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">D2C Fulfillment</h3>
      <p className="text-gray-700">
        Picking, packing, shipping, tracking, returns, and exchanges all handled.
      </p>
    </div>

    {/* Card 6 */}
    <div className="flex flex-col items-center bg-black border rounded-lg p-6 shadow-sm">
      <FaWarehouse size={30} color="#0070f3" className="mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">Wholesale Fulfillment</h3>
      <p className="text-gray-700">
        Ship to your retail buyers while staying compliant according to their SOPs.
      </p>
    </div>
  </div>
</section>

    {/* Testimonial Section */}
<section className="bg-black py-16 px-4">
  <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-2">
    Trusted by category leading brands
  </h2>
  <p className="text-center text-white mb-8">
    With omnidock, our partners have increased their revenues by up to 50%
  </p>
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Testimonial 1 */}
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <p className="mb-6">
        My focus is fully on Amazon, but I understand theres much more to gain outside of it. Im happy to work with OmniDock to explore other marketplaces and grow my brand.
      </p>
      <div className="flex items-center">
  <Image
    className="w-12 h-12 rounded-full mr-4"
    src="/path/to/nicolai-engeser.jpg"
    alt="Nicolai Engeser"
    width={48} // Specify the width in pixels (equivalent to 'w-12' in Tailwind CSS)
    height={48} // Specify the height in pixels (equivalent to 'h-12' in Tailwind CSS)
  />
  <div>
          <p className="font-bold">Jan Häse</p>
          <p className="text-sm">Founder Prinox</p>
        </div>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <p className="mb-6">
        I always wanted to expand to BOL.com, especially since I also lived in the Netherlands in the past and was aware of that marketplaces potential. I am happy that Omnidock approached me and effectively manages that expansion.
      </p>
      <div className="flex items-center">
  <Image
    className="w-12 h-12 rounded-full mr-4"
    src="/path/to/nicolai-engeser.jpg"
    alt="Nicolai Engeser"
    width={48} // Specify the width in pixels (equivalent to 'w-12' in Tailwind CSS)
    height={48} // Specify the height in pixels (equivalent to 'h-12' in Tailwind CSS)
  />
  <div>
          <p className="font-bold">Igor Barbashin</p>
          <p className="text-sm">Founder Hakuna Matte</p>
        </div>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-gray-800 text-white p-6 rounded-lg">
      <p className="mb-6">
        We are determined to develop the best products for our customers and establish our Brand. Partnering with Omnidock allows us to reach additional customers in core markets.
      </p>
      <div className="flex items-center">
  <Image
    className="w-12 h-12 rounded-full mr-4"
    src="/path/to/nicolai-engeser.jpg"
    alt="Nicolai Engeser"
    width={48} // Specify the width in pixels (equivalent to 'w-12' in Tailwind CSS)
    height={48} // Specify the height in pixels (equivalent to 'h-12' in Tailwind CSS)
  />
  <div>
          <p className="font-bold">Nicolai Engeser</p>
          <p className="text-sm">Founder of Waldwerk</p>
        </div>
      </div>
    </div>
    
  </div>
</section>



      {/* FAQ Section */}
<section className="bg-black py-16 px-4">
  <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
    Have any questions?
  </h2>
  <div className="max-w-2xl mx-auto">
    {/* Question 1 */}
    <details className="group mb-4">
      <summary className="flex justify-between items-center bg-gray-800 text-white rounded-lg py-4 px-6 cursor-pointer">
        <span>How does pricing work?</span>
        <span className="text-xl transform group-open:rotate-45">+</span>
      </summary>
      <div className="bg-gray-800 text-white rounded-lg px-6 py-4 mt-2">
        <p>
          At Flash we believe in forming partnerships, which take trust to form! This is why we dont charge any upfront fees. We charge a percentage of the newly generated revenue via Flash Checkout for the markets you launch with us. This percentage decreases with increasing volume.
        </p>
      </div>
    </details>

    {/* Question 2 */}
    <details className="group mb-4">
      <summary className="flex justify-between items-center bg-gray-800 text-white rounded-lg py-4 px-6 cursor-pointer">
        <span>Do I need a existing system in place to sell Globally?</span>
        <span className="text-xl transform group-open:rotate-45">+</span>
      </summary>
      <div className="bg-gray-800 text-white rounded-lg px-6 py-4 mt-2">
        <p>
          No, We have built it all at Flash on our Flash OS. Just connect your stores of marketplaces or Shopify and manage all orders, inventory, payments, returns & shipping on a single dashboard.
        </p>
      </div>
    </details>

    {/* Question 3 */}
    <details className="group mb-4">
      <summary className="flex justify-between items-center bg-gray-800 text-white rounded-lg py-4 px-6 cursor-pointer">
        <span>How long does it take to setup the Global Checkout?</span>
        <span className="text-xl transform group-open:rotate-45">+</span>
      </summary>
      <div className="bg-gray-800 text-white rounded-lg px-6 py-4 mt-2">
        <p>
          Under 48 hours we can install a custom app on your D2C Website and can turn on 30+ countries to start accepting orders and payments without the need to integrate multiple payment gateways and manage compliances.
        </p>
      </div>
    </details>

    {/* Question 4 */}
    <details className="group mb-4">
      <summary className="flex justify-between items-center bg-gray-800 text-white rounded-lg py-4 px-6 cursor-pointer">
        <span>How do you manage returned orders from customers?</span>
        <span className="text-xl transform group-open:rotate-45">+</span>
      </summary>
      <div className="bg-gray-800 text-white rounded-lg px-6 py-4 mt-2">
        <p>
          We know returns is big challenge for international brands and with our Flash Returns you can generate a return label of our warehouse, post the order reaches us we will do a Quality Check and inform you about the state of the product, post your approval we can restock it as your inventory and ship when next order comes improving your bottom line significantly.
        </p>
      </div>
    </details>
  </div>
</section>

      {/* Footer Section */}
<footer className="bg-gray-900 text-white py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
      {/* Logo and Company Info */}
      <div className="flex flex-col">
        <Image
          src="/flashlogo.png" // Adjust path to match your public directory structure
          alt="Flash Logo"
          width={96} // Adjust width to match design
          height={24} // Adjust height to match design
          className="mb-4"
        />
        <p className="text-sm">Flashport Technologies Private Limited</p>
        <p className="text-sm">1234 Main Street, City Name, Country</p>
      </div>

      {/* Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul>
          <li>
            <a href="/terms-of-service" className="text-sm hover:underline">Terms of Service</a>
          </li>
          <li>
            <a href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</a>
          </li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
        <p className="text-sm">Feel free to reach out if you have any questions or need further assistance.</p>
        <a href="/contact-us" className="text-sm text-white bg-gray-700 px-4 py-2 rounded-md mt-4 inline-block hover:bg-gray-600 transition">
          Contact Us
        </a>
      </div>

      {/* Social Media Links (Optional) */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

    
    </>
  );
};

export default HomePage;
