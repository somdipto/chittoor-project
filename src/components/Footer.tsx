
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-chittoor-offwhite to-white pt-16 border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              About Us
            </h3>
            <p className="text-gray-600 mb-4">
              Project Chittoor is a rural revitalization initiative focusing on
              sustainable development and community living in Andhra Pradesh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-chittoor-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-chittoor-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-chittoor-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-chittoor-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-chittoor-green"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/pillars"
                  className="text-gray-600 hover:text-chittoor-green"
                >
                  Our Pillars
                </Link>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-gray-600 hover:text-chittoor-green"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#projects"
                  className="text-gray-600 hover:text-chittoor-green"
                >
                  About Project
                </a>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-gray-600 hover:text-chittoor-green"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-chittoor-green"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Project Areas
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#renewable-energy"
                  className="text-gray-600 hover:text-chittoor-green"
                >
                  Renewable Energy
                </a>
              </li>
              <li>
                <a
                  href="#agro-wellness"
                  className="text-gray-600 hover:text-chittoor-green"
                >
                  Agro-Wellness
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-gray-600 hover:text-chittoor-green"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#innovation"
                  className="text-gray-600 hover:text-chittoor-green"
                >
                  Innovation
                </a>
              </li>
              <li>
                <a
                  href="#sustainable-agriculture"
                  className="text-gray-600 hover:text-chittoor-green"
                >
                  Sustainable Agriculture
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Newsletter
            </h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter to receive updates on our projects and
              initiatives.
            </p>
            <form className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-chittoor-green flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-chittoor-green text-white rounded-md hover:bg-chittoor-green-dark transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-center md:text-left">
              &copy; {currentYear} Project Chittoor. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-chittoor-green">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-chittoor-green">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
