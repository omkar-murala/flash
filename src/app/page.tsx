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
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { FaBoxOpen, FaChartLine, FaClipboardList, FaPeopleCarry, FaRocket, FaShippingFast, FaStore, FaTruck, FaWarehouse } from 'react-icons/fa';
// import InfiniteScrollCarousel from "../components/scrolleffect/scroll";
import Scroll from '../components/scrolleffect/Scroll';

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
      <section className="relative pt-16 pb-24 md:pt-20 md:pb-32  bg-gradient-to-b from-[#000033] to-black/100 text-white">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <br></br>
          <div className="relative flex items-center bg-white/20 rounded-full px-2 py-1 shadow-md mb-4 border border-transparent w-54 h-10 overflow-hidden">
  <FaRocket className="mr-2 text-white" size={20} />
  <h1 className="text-xs md:text-sm lg:text-base font-medium text-white">
    Next-Gen Global Trade Platform
  </h1>
  <div className="absolute inset-0 border-2  rounded-full z-0 animate-rotate-border"></div>
</div>
          <div className="text-xs md:text-sm lg:text-base max-w-4xl mx-auto mb-6 font-light leading-relaxed">
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-white font-[Inter Tight]">
              Sell your Products Globally with <span className="text-blue-500">Flash OS</span>
            </h1>
            <br></br>
            <p className="mt-2 text-sm md:text-lg font-[Inter Tight] text-blue-200">
              Flash OS supports local brands and sellers to expand into 220+ countries in under 48 hours. We manage your shipping, local compliances, warehousing, returns, payments so you can focus on scaling and growing.
            </p>

          </div>
          <br></br>
          <a
            href="https://calendly.com/parikshit-bhanushali/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1c1c78] text-white font-semibold py-3 px-6 rounded hover:bg-[#000044] transition duration-300"
          >
            Book a Demo
          </a>
        </div>
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-purple-500 to-blue-700 opacity-30 mix-blend-overlay"></div>
        </div>
      </section>




      {/* Graph Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#000000] to-black/100 text-white">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-[Inter Tight]">
            Selling Globally has always been Hard.
          </h2>
          <h2 className="text-center mt-2 text-sm md:text-lg font-[Inter Tight] text-white">
            With Flash we make it smooth and simple.
          </h2>
          <br></br>
          <br></br>
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
        <p className="text-xl md:text-2xl font-bold">₹112,077.09</p>
        <p className="text-green-400 text-base md:text-lg">↑21.68%</p>
        <p className="text-gray-400 text-sm">to last 28 days</p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto">
      <Line data={data} options={options} />
    </div>
  </div>
</section>




      {/* Infinite Scrolling Logos (Trusted Brands)   text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-[Inter Tight]*/}
      
      {/* <section className="py-12 bg-black">
      <h2 className="text-center text-3xl md:text-3xl lg:text-4xl font-bold mb-2 font-[Inter Tight] text-white">Sell across leading marketplaces</h2>
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
              src="/1amazon.png"
              alt="Amazon logo"
              width={150}
              height={30}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/download.png"
              alt="eBay logo"
              width={150}
              height={30}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/1etsy.png"
              alt="Etsy logo"
              width={60}
              height={30}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/walmart.png"
              alt="Walmart logo"
              width={150}
              height={30}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          {/* <div className="flex-shrink-0">
            <Image
              src="/wayfair.png"
              alt="Wayfair logo"
              width={150}
              height={30}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div> 
          <div className="flex-shrink-0">
            <Image
              src="/noon.png"
              alt="Noon logo"
              width={150}
              height={30}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          {/* <div className="flex-shrink-0">
            <Image
              src="/zalando.png"
              alt="Zalando logo"
              width={150}
              height={30}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div> 
          {/* <div className="flex-shrink-0">
            <Image
              src="/shopify.png"
              alt="Shopify logo"
              width={60}
              height={30}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div> 
          <div className="flex-shrink-0">
            <Image
              src="/1WooCommerce.png"
              alt="WooCommerce logo"
              width={150}
              height={30}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/BigCommerce.png"
              alt="BigCommerce logo"
              width={150}
              height={30}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div>

   
          <div className="flex-shrink-0">
            <Image
              src="/1amazon.png"
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
              src="/1etsy.png"
              alt="Etsy logo"
              width={60}
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
          {/* <div className="flex-shrink-0">
            <Image
              src="/Zalando.png"
              alt="Zalando logo"
              width={150}
              height={75}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div> 
          {/* <div className="flex-shrink-0">
            <Image
              src="/Shopify.png"
              alt="Shopify logo"
              width={60}
              height={30}
              className="transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"
            />
          </div> 
          <div className="flex-shrink-0">
            <Image
              src="/1WooCommerce.png"
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
    </section> */}
    {/* <InfiniteScrollCarousel/> */}
    <Scroll/>
      {/* Our Products Section */}
      <section id="products" className="py-16 px-4 bg-gradient-to-b from-black to-black/100">
        <h2 className="text-center md:text-3xl lg:text-4xl font-bold mb-2 font-[Inter Tight] text-white mb-12">Our Products</h2>
        <br></br>
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
                <h2 className="text-2xl md:text-4xl font-bold mb-2 font-[Inter Tight] text-white">Flash Checkout</h2>
                <p className="text-gray-300 mt-2">Take your D2C Brand Global</p>
                <br></br>
                <p className="text-gray-400 mt-2 space-y-2">
                  <span className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Localized Checkout with Local Payment Methods
                  </span>
                  <span className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Local Compliances, Taxes and Duties Handled
                  </span>
                  <span className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Go Live in any country with MOR Model
                  </span>
                  <span className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Ship Across 220+ countries with Flash Express
                  </span>
                </p>
              </div>
            </div>
          </div>

    {/* Product 2 - Flash 3PL */}
    <div className="bg-[#1a1a2e] rounded-xl overflow-hidden shadow-lg">
      <div className="bg-[#0f0f1a] p-6 rounded-lg">
        <Image
          src="/razorpay.png" // Replace with actual image URL
          alt="Flash 3PL"
          width={500}
          height={500}
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="mt-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 font-[Inter Tight] text-white">Flash 3PL</h2>
          <p className="text-gray-300 mt-2">Fulfill your Global Orders with Flash 3PL Network.</p>
          <br></br>
          <p className="text-gray-400 mt-2 space-y-2">
                  <span className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Local Fulfillment and 2 Day Delivery 
                  </span>
                  <span className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Global Warehousing and Door to Door Delivery
                  </span>
                  <span className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Improve Probitability with Flash Returns
                  </span>
                  <span className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Connect 50+ Marketplace and Fullfil Orders
                  </span>
                </p>
        </div>
      </div>
    </div>
  </div>
</section>


    {/* how it works */}
    <section id="howitworks" className="bg-black text-white py-16 px-4 text-center">
    <h2 className=" md:text-3xl lg:text-4xl font-bold mb-2  font-[Inter Tight]">How It Works</h2>
    <h2 className="mt-2 text-sm md:text-lg font-[Inter Tight] text-white">Go Flash in 3 Simple Steps</h2>
    <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mx-auto max-w-screen-xl">
        {/* Step 1 */}
        <div className="flex flex-col items-center max-w-xs w-full p-6 border border-gray-700 rounded-lg bg-gray-800 shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-4">
                <FaStore size={30} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-[Inter Tight]">Connect Marketplaces and Storefronts</h3>
            <p className="text-center text-gray-400 font-[Inter Tight]">
                Pull all the orders and manage them with Flash.
            </p>
            
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center max-w-xs w-full p-6 border border-gray-700 rounded-lg bg-gray-800 shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-4">
                <FaShippingFast size={30} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-[Inter Tight]">Ship, Store & Fulfill</h3>
            <p className="text-center text-gray-400 font-[Inter Tight]">
                Ship your products in bulk with Flash Express and Store it Globally in our Warehouses.
            </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center max-w-xs w-full p-6 border border-gray-700 rounded-lg bg-gray-800 shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-4">
                <FaChartLine size={30} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2 font-[Inter Tight]">Grow Your Presence</h3>
            <br></br>
            <p className="text-center text-gray-400 font-[Inter Tight]">
                Ship locally within 2 days and grow your revenue 10X.
            </p>
        </div>
    </div>
</section>



      {/* New Services Section */}
      <section id="services" className="py-16 px-4 bg-black">
  <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-12">
    We will handle everything you need to sell products internationally.
  </h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
    {/* Card 1 */}
    <div className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg">
      <FaShippingFast size={30} color="#0070f3" className="mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">Discounted Cross-Border Logistics</h3>
      <p className="text-gray-300">
        Ship items to the US and Europe by air or sea with the lowest pre-negotiated rates.
      </p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg">
      <FaBoxOpen size={30} color="#0070f3" className="mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">Inventory Handling and Storage</h3>
      <p className="text-gray-300">
        Store inventory at our global fulfillment center for faster and cheaper shipping.
      </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg">
      <FaClipboardList size={30} color="#0070f3" className="mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">Inventory and Order Management</h3>
      <p className="text-gray-300">
        Track inventory in real-time. Monitor stock levels. Track your orders in one place.
      </p>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg">
      <FaTruck size={30} color="#0070f3" className="mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">2-Day Shipping</h3>
      <p className="text-gray-300">
        Guaranteed 2-day shipping across the US is available.
      </p>
    </div>

    {/* Card 5 */}
    <div className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg">
      <FaPeopleCarry size={30} color="#0070f3" className="mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">D2C Fulfillment</h3>
      <p className="text-gray-300">
        Picking, packing, shipping, tracking, returns, and exchanges all handled.
      </p>
    </div>

    {/* Card 6 */}
    <div className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg">
      <FaWarehouse size={30} color="#0070f3" className="mb-4" />
      <h3 className="text-lg font-semibold text-white mb-2">Wholesale Fulfillment</h3>
      <p className="text-gray-300">
        Ship to your retail buyers while staying compliant according to their SOPs.
      </p>
    </div>
  </div>
</section>

    {/* Testimonial Section */}
    <section className="bg-black py-16 px-4">
  <h2 className="text-center md:text-3xl text-3xl lg:text-4xl font-bold mb-2 text-white">
    Trusted by category leading brands
  </h2>
  <p className="text-center text-white mb-8">
    With flash, our customers are growing their revenues and scaling globally
  </p>

  {/* First Row - Three Image Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center">
    <div className="bg-gray-800 p-8 rounded-lg flex justify-center items-center h-64 w-full max-w-xs mx-auto lg:mx-0">
      <Image
        className="w-full h-full object-contain rounded-lg"
        src="/keroblack.png"
        alt="Image 1"
        width={300}
        height={300}
      />
    </div>

    <div className="bg-gray-800 p-8 rounded-lg flex justify-center items-center h-64 w-full max-w-xs mx-auto lg:mx-0">
      <Image
        className="w-full h-full object-contain rounded-lg"
        src="/cbaz.png"
        alt="Image 2"
        width={300}
        height={300}
      />
    </div>

    <div className="bg-gray-800 p-8 rounded-lg flex justify-center items-center h-64 w-full max-w-xs mx-auto lg:mx-0">
      <Image
        className="w-full h-full object-contain rounded-lg"
        src="/png.jpg"
        alt="Image 3"
        width={300}
        height={300}
      />
    </div>
  </div>

  {/* Second Row - Two Centered Image Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center mt-8 md:pl-36">
    <div className="bg-gray-800 p-8 rounded-lg flex justify-center items-center h-64 w-full max-w-xs mx-auto md:mx-0">
      <Image
        className="w-full h-full object-contain rounded-lg"
        src="/belizon.png"
        alt="Image 4"
        width={300}
        height={300}
      />
    </div>

    <div className="bg-gray-800 p-8 rounded-lg flex justify-center items-center h-64 w-full max-w-xs mx-auto md:mx-0">
      <Image
        className="w-full h-full object-contain rounded-lg"
        src="/hijab black.png"
        alt="Image 5"
        width={300}
        height={300}
      />
    </div>
  </div>
</section>








      {/* FAQ Section */}
<section id="faqs" className="bg-black py-16 px-4">
  <h2 className="text-center text-3xl lg:text-4xl font-bold mb-2  font-[Inter Tight md:text-3xl  text-white mb-8">
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
  <div className="max-w-6xl mx-auto px-4 sm:px-0 lg:px-0">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 py-8">

      {/* Logo and Company Info */}
      <div className="text-left">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer mb-4">
            <Image
              src="/flashlogo.png" 
              alt="Flash Logo"
              width={32}
              height={32}
              className="mr-4"
            />
            <span className="text-white text-lg md:text-xl font-bold">Flash</span>
          </div>
        </Link>
        <div>
          <p className="text-sm text-white">Flashport Technologies Private Limited</p>
          <p className="text-sm text-white">1234 Main Street, City Name, Country</p>
        </div>
      </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                {/* <Link href="/terms-of-service"> */}
                  <a className="text-sm hover:underline">Terms of Service</a>
                
              </li>
              <li>
                {/* <Link href="/privacy-policy"> */}
                  <a className="text-sm hover:underline">Privacy Policy</a>
                {/* </Link> */}
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <a href="/contactus" className="text-sm text-white bg-gray-700 px-4 py-2 rounded-md inline-block hover:bg-gray-600 transition">
              Contact Us
            </a>
            <p className="text-sm mt-4">Feel free to reach out if you have any questions or need further assistance.</p>
          </div>

        </div>
      </div>
    </footer>

    
    </>
  );
};

export default HomePage;
