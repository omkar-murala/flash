"use client";

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactUsSection = () => {
  const Router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    markets: [] as string[],
    orders: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    markets: '',
    orders: '' ,
    companyName: '',
  });


  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const updatedMarkets = checked
      ? [...formData.markets, value]  // Add selected market
      : formData.markets.filter((market) => market !== value);  // Remove deselected market
  
    setFormData((prevState) => ({
      ...prevState,
      markets: updatedMarkets,
    }));
  };
  
  
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', phone: '', message: '', markets: '', orders: '', companyName: '', };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Valid email is required';
      valid = false;
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    if (formData.markets.length === 0) {
      newErrors.markets = 'At least one market must be selected';
      valid = false;
    }
    if (!formData.orders) {
      newErrors.orders = 'Order range is required';
      valid = false;
    }
    if (!formData.companyName) {
      newErrors.companyName = 'Company name is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevent the default form submission

    if (validateForm()) {
      try {
        const response = await axios.post("/api/form", formData);
        if(response.status == 200){
          toast.success("We Will Reach You Soon")
          Router.push("/")
        }
      } catch (error) {
        toast.error("Something went wrong")
        console.error('Form submission error:', error);
      }
    }
  };


  return (
    <div className="min-h-screen bg-[#000033] text-white">
      <Toaster/>
      {/* Contact Us Section */}
      <section className="bg-[#000033] text-white py-12">
        <div className="max-w-2xl mx-auto px-4"> {/* Reduced max-width to 2xl */}
          <h2 className="md:text-3xl lg:text-4xl font-bold mb-2  font-[Inter Tight] text-center">Contact Us</h2>
          <form  onSubmit={handleSubmit} method="post" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 border rounded-md bg-gray-800 text-white ${errors.name ? 'border-red-500' : 'border-gray-600'
                  }`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 border rounded-md bg-gray-800 text-white ${errors.email ? 'border-red-500' : 'border-gray-600'
                  }`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 border rounded-md bg-gray-800 text-white ${errors.phone ? 'border-red-500' : 'border-gray-600'
                  }`}
                required
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-800 text-white border-gray-600"
              />
              {errors.companyName && <p className="text-yellow-500 text-sm mt-1">{errors.companyName}</p>}
            </div>

            <div>
              <label htmlFor="markets" className="block text-sm font-medium">
                Which Markets do you want to scale?
              </label>
              <div className="mt-1 grid grid-cols-2 gap-4"> {/* Use grid for two columns */}
                {['USA', 'UK', 'Europe', 'Middle East', 'Mexico', 'Canada', 'Africa', 'Asia'].map((market) => (
                  <div key={market} className="flex items-center">
                    <input
                      type="checkbox"
                      id={market}
                      name="markets"
                      value={market}
                      checked={formData.markets.includes(market)}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-blue-600 border-gray-600 bg-gray-800 rounded"
                    />
                    <label htmlFor={market} className="ml-2 block text-sm font-medium text-white">
                      {market}
                    </label>
                  </div>
                ))}
              </div>
              {errors.markets && <p className="text-yellow-500 text-sm mt-1">{errors.markets}</p>} {/* Display error message */}
            </div>

            <br></br>

            <div>
              <label htmlFor="orders" className="block text-sm font-medium">
                How many orders do you do?
              </label>
              <select
                id="orders"
                name="orders"
                value={formData.orders}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-800 text-white border-gray-600"
                required
              >
                <option value="">Select an Order Range</option>
                <option value="0-500">0 - 500 Orders</option>
                <option value="500-1000">500 - 1000 Orders</option>
                <option value="1000-5000">1000 - 5000 Orders</option>
                <option value="5000+">5000+ Orders</option>
              </select>
              {errors.orders && <p className="text-red-500 text-sm mt-1">{errors.orders}</p>}
            </div>


            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 border rounded-md bg-gray-800 h-32 text-white resize-none ${errors.message ? 'border-red-500' : 'border-gray-600'
                  }`}
                required
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-auto py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
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
                <p className="text-sm text-white">Made with ❤️ In India for the World</p>
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

    </div>
  );
};

export default ContactUsSection;