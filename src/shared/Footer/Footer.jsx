import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-teal-800 via-slate-800 to-slate-800 text-white py-10 mt-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-sm text-gray-200">
              We are committed to delivering the best products and services to our customers. Follow us on social media for updates.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="text-sm text-gray-200 space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-blue-400">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-sky-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Job Portal. All rights reserved.</p>
          <p className="mt-2">Designed with <span className="text-red-500">❤️</span> by <strong>Abdul Mazid Akash</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
