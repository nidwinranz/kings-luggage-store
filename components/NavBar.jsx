"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';


function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
  <div className="flex flex-col md:flex-row justify-between  px-4 bg-white text-green-900 py-3 text-center fixed top-0 left-0 right-0 z-10 md:mt-0 font-bold font-mono mb-12 md:mb-10">
  
  {/* Address Section */}
  <div className="flex items-center mb-2 md:mb-0">
    <svg
      className="w-6 h-6 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="256"
      height="256"
      viewBox="0 0 256 256"
      xmlSpace="preserve"
    >
      <g transform="scale(2.81)">
        <path
          d="M 45 90 c -1.062 0 -2.043 -0.561 -2.583 -1.475 l -4.471 -7.563 c -9.222 -15.591 -17.933 -30.317 -20.893 -36.258 c -2.086 -4.277 -3.138 -8.852 -3.138 -13.62 C 13.916 13.944 27.86 0 45 0 c 17.141 0 31.085 13.944 31.085 31.084 c 0 4.764 -1.051 9.339 -3.124 13.596 c -0.021 0.042 -0.042 0.083 -0.063 0.124 c -3.007 6.005 -11.672 20.654 -20.843 36.159 l -4.472 7.563 C 47.044 89.439 46.062 90 45 90 z M 45 6 C 31.168 6 19.916 17.253 19.916 31.084 c 0 3.848 0.847 7.539 2.518 10.969 c 2.852 5.721 11.909 21.033 20.667 35.839 L 45 81.104 l 1.89 -3.196 c 8.763 -14.813 17.823 -30.131 20.687 -35.879 c 0.012 -0.022 0.023 -0.045 0.035 -0.067 c 1.642 -3.406 2.474 -7.065 2.474 -10.877 C 70.085 17.253 58.832 6 45 6 z"
          style={{ fill: 'black' }}
        />
        <path
          d="M 45 44.597 c -8.076 0 -14.646 -6.57 -14.646 -14.646 S 36.924 15.306 45 15.306 c 8.075 0 14.646 6.57 14.646 14.646 S 53.075 44.597 45 44.597 z M 45 21.306 c -4.767 0 -8.646 3.878 -8.646 8.646 s 3.878 8.646 8.646 8.646 c 4.768 0 8.646 -3.878 8.646 -8.646 S 49.768 21.306 45 21.306 z"
          style={{ fill: 'black' }}
        />
      </g>
    </svg>
    <p className="text-xs sm:text-sm lg:text-base">
      345 Grays Inn Road, Kings Cross, London, WC1X 8PX
    </p>
  </div>

  {/* Email Section */}
  <div className="flex items-center mb-2 md:mb-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="256"
      height="256"
      viewBox="0 0 256 256"
      className="w-6 h-6 mr-2"
    >
      <g transform="scale(2.81)">
        <path
          d="M 79.35 77.115 H 10.651 C 4.778 77.115 0 72.337 0 66.464 V 23.536 c 0 -5.873 4.778 -10.65 10.65 -10.65 H 79.35 c 5.873 0 10.65 4.778 10.65 10.65 v 42.928 C 90 72.337 85.223 77.115 79.35 77.115 z M 10.65 19.885 c -2.013 0 -3.65 1.638 -3.65 3.65 v 42.928 c 0 2.014 1.638 3.651 3.651 3.651 H 79.35 c 2.013 0 3.65 -1.638 3.65 -3.651 V 23.536 c 0 -2.013 -1.638 -3.65 -3.65 -3.65 H 10.65 z"
          style={{ fill: 'black' }}
        />
        <path
          d="M 45 60.229 c -0.796 0 -1.592 -0.271 -2.241 -0.812 l -30.71 -25.595 c -1.485 -1.237 -1.686 -3.444 -0.448 -4.93 c 1.237 -1.483 3.445 -1.686 4.929 -0.447 L 45 52.173 l 28.469 -23.727 c 1.484 -1.238 3.691 -1.036 4.93 0.447 c 1.237 1.485 1.037 3.692 -0.447 4.93 l -30.71 25.595 C 46.592 59.959 45.796 60.229 45 60.229 z"
          style={{ fill: 'black' }}
        />
      </g>
    </svg>
    <p className="text-xs sm:text-sm lg:text-base">
      info@kingscrossluggage.co.uk
    </p>
  </div>

  {/* Phone Section */}
  <div className="flex items-center mb-6 md:mb-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="24"
      height="24"
      viewBox="0 0 256 256"
      className="w-6 h-6 mr-2"
    >
      <g transform="scale(2.81)">
        <path
          d="M 63.063 0 H 26.937 c -2.816 0 -5.098 2.283 -5.098 5.098 v 79.803 c 0 2.816 2.283 5.098 5.098 5.098 h 36.126 c 2.816 0 5.098 -2.283 5.098 -5.098 V 5.098 C 68.161 2.283 65.879 0 63.063 0 z M 38.596 4.419 h 12.809 c 0.276 0 0.5 0.224 0.5 0.5 s -0.224 0.5 -0.5 0.5 H 38.596 c -0.276 0 -0.5 -0.224 -0.5 -0.5 S 38.319 4.419 38.596 4.419 z M 45 87.304 c -1.265 0 -2.291 -1.026 -2.291 -2.291 c 0 -1.265 1.026 -2.291 2.291 -2.291 s 2.291 1.026 2.291 2.291 C 47.291 86.278 46.265 87.304 45 87.304 z M 63.742 76.896 H 26.258 V 9.29 h 37.484 V 76.896 z"
          style={{ fill: 'black' }}
        />
      </g>
    </svg>
    <p className="text-xs sm:text-sm lg:text-base">
      +44 7868 774848
    </p>
  </div>

</div>


 {/* nav bar */}
<nav className="bg-green-800 w-full fixed top-[120px] md:top-10 left-0 right-0 z-30">
  <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 backdrop-blur-lg">
    <div>
      <div className="flex items-center justify-between py-3 md:py-5 md:block">
        <Link href="/">
          <h2 className="text-2xl text-white font-bold">Kings Cross Luggage</h2>
        </Link>

         
              <div className="md:hidden">
        
              <div className="md:hidden">
              <motion.button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
                initial={{ rotate: 0 }}
                animate={{ rotate: navbar ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="Close Menu" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="Open Menu"
                      className="focus:border-none active:border-none"
                      />
                  )}
                </motion.button>
              </div>
              </div>
            </div>
          </div>

         
          <div className="hidden md:flex items-center space-x-6 font-bold">
            <ul className="flex space-x-14 text-white text-2xl md:text-xl">
              <li className="hover:text-lime-400">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-lime-400">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-lime-400">
                <Link href="#book">Book Now</Link>
              </li>
              <li className="hover:text-lime-400">
                <Link href="#blog">Blog</Link>
              </li>
              <li className="hover:text-lime-400">
                <Link href="#faqs">FAQs</Link>
              </li>
              <li className="hover:text-lime-400">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

        
          <div className={`md:hidden ${navbar ? 'block' : 'hidden'} transition-all duration-300`}>
            <ul className="flex flex-col items-center space-y-6 py-6  text-white text-xl h-screen top-0 right-0 left-0 font-bold">
            <li className="hover:bg-lime-600 px-6 py-2 rounded-3xl">
  <Link href="/" onClick={() => setNavbar(!navbar)}>Home</Link>
</li>
<li className="hover:bg-lime-600 px-6 py-2 rounded-3xl">
  <Link href="#about" onClick={() => setNavbar(!navbar)}>About</Link>
</li>
<li className="hover:bg-lime-600 px-6 py-2 rounded-3xl">
  <Link href="#book" onClick={() => setNavbar(!navbar)}>Book Now</Link>
</li>
<li className="hover:bg-lime-600 px-6 py-2 rounded-3xl">
  <Link href="#blog" onClick={() => setNavbar(!navbar)}>Blog</Link>
</li>
<li className="hover:bg-lime-600 px-6 py-2 rounded-3xl">
  <Link href="#faqs" onClick={() => setNavbar(!navbar)}>FAQs</Link>
</li>
<li className="hover:bg-lime-600 px-6 py-2 rounded-3xl">
  <Link href="#contact" onClick={() => setNavbar(!navbar)}>Contact</Link>
</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
