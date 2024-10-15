
'use client';
import NavBar from '../components/NavBar';
import Image from 'next/image'; 
import picture1 from '../public/pic1.jpg';
import {Button} from "@nextui-org/react";
import picture2 from '../public/pic2.jpg';
import picture3 from '../public/pic3.jpg';
import picture4 from '../public/pic4.jpg';
import picture5 from '../public/pic5.jpg';
import { motion } from "framer-motion";
import Head from 'next/head';

export default function Home() {
  
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <main >
    <div className="flex flex-col min-h-screen p-8 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <section className="px-4 md:px-8 lg:px-12">
  <div
    className="flex flex-col md:flex-row lg:flex-wrap items-center justify-center mt-24 md:mt-5 xs:mt-36 w-full"
  >

<div className="w-full max-w-[500px] aspect-[7/9] relative md:w-1/8 lg:w-[40%] mx-auto  ">
  <Image
    src={picture1}
    alt="Description of the image"
    layout="fill" // Ensures the image fills its container
    objectFit="cover" // Ensures the image maintains its aspect ratio and covers the container
    className="rounded-xl shadow-xl"
  />
</div>


    <div className="flex flex-col items-center justify-center md:ml-4 lg:w-1/2 text-center mt-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        London’s Best Luggage Storage Service
      </h1>

      <p className="text-lg md:text-2xl lg:text-3xl font-beautiful mt-4">
        Please Book Online For Cheaper Price, Insurance & Security Purposes.
        Explore our features, learn about our services, and discover what we
        have to offer.
      </p>

      <p className="text-lg md:text-xl lg:text-2xl font-serif mt-6">
        Online Price £4/bag
      </p>
      <p className="text-lg md:text-xl lg:text-2xl font-serif">
        In store price £5/bag
      </p>

      <p className="text-lg md:text-xl lg:text-2xl font-bold font-beautiful mt-6">
        Cancellation Is Free Before Booking Time Start. For Any inquiries Please
        Call, text, or Email Us (24/7) Customer Support Available.
      </p>

      <Button className="bg-green-900 text-white py-2 px-4 rounded-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all shadow-lg hover:shadow-green-500/50 flex items-center mt-6 md:mt-4">
        BOOK NOW
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="ml-2 w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </Button>
    </div>
  </div>

  <div className="mt-32"></div>
</section>
<section className="px-4 md:px-8 lg:px-12 mt-0 ">
      <div className="flex flex-col md:flex-row justify-between items-center mt-[-50px] space-y-4 md:space-y-0 md:space-x-12">
        
        {/* Left Section: Title and Stars */}
        <motion.div 
          className="text-2xl md:text-2xl lg:text-3xl font-bold md:ml-[70px] text-center"
          initial={{ opacity: 0, x: -100 }} // Slide from left with fade-in
          whileInView={{ opacity: 1, x: 0 }} // Fully visible when in view
          transition={{ duration: 1 }} // Animation duration
          viewport={{ once: true }} // Only animate once
        >
          <p>London’s Best Luggage Storage Service</p>
          
          {/* 5 Star SVG */}
          <div className="flex items-center justify-center my-2">
            {[...Array(5)].map((_, index) => (
              <motion.svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-8 md:h-8 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                initial={{ opacity: 0, y: -20 }} // Initial state (fade and slide up)
                animate={{ opacity: 1, y: 0 }} // Target state (fully visible and in place)
                transition={{ duration: 0.3, delay: index * 0.2 }} // Delay for each star
              >
                <path d="M10 15.27L16.18 18l-1.64-7.03L18 8.24l-7.19-.61L10 1 9.19 7.63 2 8.24l5.46 2.73L5.82 18z" />
              </motion.svg>
            ))}
          </div>

          <motion.p 
            className="text-lg text-center md:text-2xl lg:text-3xl"
            initial={{ opacity: 0 }} // Initial state for fade-in
            animate={{ opacity: 1 }} // Target state for fade-in
            transition={{ duration: 1.5, delay: 0.5 }} // Delay for the reviews text
          >
            1400+ Google Reviews
          </motion.p>
        </motion.div>
      
        {/* Right Section: Call Us Now */}
        <motion.div 
          className="text-center bg-green-900 text-white  rounded-3xl mb-8 lg:mb-0 w-[50%] md:p-12 shadow-xl xs:w-full sm:w-1/2"
          initial={{ opacity: 0, x: 100 }} // Slide from right with fade-in
          whileInView={{ opacity: 1, x: 0 }} // Fully visible when in view
          transition={{ duration: 1 }} // Animation duration
          viewport={{ once: true }} // Only animate once
        >
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Call us now</h2>
          <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold">075 3354 4428</p>
        </motion.div>

      </div>
    </section>
   




{/* section 3 */}

<section className="px-4 md:px-8 lg:px-12">
  <div className="flex flex-col md:flex-row items-center justify-between mt-1 md:mt-12 mx-auto lg:py-12 py-8 ">
    <div className='md:w-[120%] lg:w-[40%] sm:w-[65%] 2xl:w-[100%] text-center px-10 md:px-[0px] xs:px-0  '>
    {/* Left Section: Motion div with text */}
    <motion.div 
      initial={{ opacity: 0, x: -100 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: true }}
      className="bg-green-900 text-white p-8 md:p-16 rounded-3xl mb-8 lg:mb-0  w-full shadow-xl"
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Kings Cross Luggage Storage</h3>
      <p className="text-lg sm:text-2xl md:text-xl lg:text-2xl mb-4 font-bold">Open 7 Days 07:00 – 23:59</p>
      <p className="text-lg sm:text-2xl md:text-xl lg:text-2xl mb-4 font-bold">345 Grays Inn Road, Kings Cross, London, WC1X 8PX</p>
      <p className="text-sm sm:text-xl md:text-lg lg:text-xl mb-4 font-beautiful">
        Leave your luggage safely in our store and collect your belongings at the time that suits you. We are opposite the Kings Cross station platform 01 & 02. All your luggage is insured. Pickup and drop off anytime between opening hours.
      </p>
     
      
      <div className="flex justify-center mt-6">
        <Button className="bg-white text-green-600 py-3 px-6 md:py-4 md:px-8 rounded-xl hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all shadow-lg hover:shadow-green-500/50 flex items-center">
          BOOK NOW
        </Button>
      </div>
    </motion.div>
    </div>

    {/* Right Section: Motion div with image */}
    <motion.div 
      initial={{ opacity: 0, x: 100 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: true }}
      className="w-[100%] shadow-xl md:ml-12 md:w-[120%] lg:w-[50%] sm:w-[60%] 2xl:w-[50%]  "
    >
      <Image 
        src={picture2} 
        alt="Description of the image" 
        width={400}  
        height={300} 
        className="rounded-xl object-cover w-full h-auto " 
      />
    </motion.div>
  </div>
</section>



<div className=" left-0 right-0">
  <section className=" absolute left-0 right-0">
    <div className="w-full flex justify-center bg-green-900 text-white mt-4 shadow-2xl p-4">
      <h2 className="text-2xl xs:text-lg sm:text-2xl md:text-4xl mb-2 font-bold text-center whitespace-normal">
        +4475 3354 4428<br />
        info@kingscrossluggage.co.uk
      </h2>
    </div>
  </section>
</div>



<section>
  <div className="flex flex-col md:flex-row items-start justify-between mt-4 md:mt-12 md:ml-10 md:mr-22 z-0" style={{ marginTop: '180px' }}>
    
  
    <div
      style={{
        maxWidth: '100%',
        listStyle: 'none',
        transition: 'none',
        overflow: 'hidden',
        width: '800px',
        height: '600px'
        
      }}
    >
      <div id="google-maps-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
        <iframe
          style={{ height: '100%', width: '100%', border: 0 }}
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=Kings+Cross+Luggage+Storage&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    <div className="md:ml-10 mt-8 md:mt-0 md:w-1/2">
      <h2 className="text-8xl sm:text-4xl font-bold mb-4 text-center text-green-900">£4.00</h2>
      <p className="text-xl mb-4 text-center"> PER BAG PER DAY
      </p>

      <hr className="h-1 bg-green-800 border-none" />

      <ul className="list-disc list-outside sm:text-lg  md:text-2xl text-xl mb-4 line-height-12 mt-12 font-beautiful">
  <li className="mb-4">
    We are the cheapest Luggage storage in London
  </li>
  <li className="mb-4">
     We have 1400+ Google 5 star reviews
  </li>
  <li className="mb-4">
  24/7 CCTV and intruder alarms to keep your luggage safe
  </li>
  <li className="mb-4">
  Open everyday from 7.00am until midnight
  </li>
  <li className="mb-4">
  We offer long and short term storage options
  </li>


</ul>


    </div>
    
    <style jsx>{`
      #google-maps-canvas img {
        max-width: none !important;
        background: none !important;
        font-size: inherit;
        font-weight: inherit;
      }
    `}</style>
  </div>
</section>

<section>

  <div>
  <h2 className="text-4xl font-bold mb-4 text-center text-green-900 mt-12 md:mt-12 sm:mt-[12px] sm:text-4xl  md:text-6xl">
    1400+ Google Reviews</h2>
  <div className="mt-12  shadow-green-900 shadow-2xl">
  <iframe
    src="https://widgets.sociablekit.com/google-reviews/iframe/25474543"
    frameBorder="0"
    width="100%"
    height="500"
    className="border-none"
  ></iframe>
</div>

  </div>

</section>





<section className="mt-12">
  <h2 className="text-4xl sm:text-2xl font-bold mb-4 text-center text-green-900 ">
    Let us take care of your luggage
  </h2>
  
  <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 mt-10">
    {/* First Block */}
    <div className="flex flex-col items-center">
      <h3 className="text-2xl sm:text-xl font-mono font-semibold mb-2 text-green-800">1. Book online</h3>
      <Image  src={picture3} 
       alt="Image 1" 
       className="w-40 h-40 object-cover mb-2 rounded-3xl" />
      <p className="text-center  font-beautiful font-bold text-gray-700">Book your luggage storage in less than a minute online</p>
    </div>

    {/* Second Block */}
    <div className="flex flex-col items-center">
      <h3 className="text-2xl sm:text-lg font-mono  font-semibold mb-2 text-green-800">2. Drop your luggage</h3>
      <Image  src={picture4} 
       alt="Image 1" 
       className="w-40 h-40 object-cover mb-2 rounded-3xl" />
      <p className="text-center font-beautiful font-bold text-gray-700">Your luggage is sealed and then placed into a secure space for the time of collection</p>
    </div>

    {/* Third Block */}
    <div className="flex flex-col items-center ">
      <h3 className="text-2xl sm:text-xl font-mono  font-semibold mb-2 text-green-800">3. Collect</h3>
      <Image  src={picture5} 
       alt="Image 1" 
       className="w-40 h-40 object-cover mb-2 rounded-3xl" />
      <p className="text-center font-beautiful font-bold text-gray-700">Enjoy your stay and collect your belongings when you want</p>
    </div>
  </div>
</section>



<div className="left-0 right-0">
  <section className="absolute left-0 right-0">
    <div className="w-full flex justify-center bg-green-900 text-white mt-12 shadow-2xl p-4">
      
      {/* Container for the 4 SVGs and their content */}
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-28  mt-6">
        
        {/* First SVG Block */}
        <div className="flex flex-col items-center">
        <svg version="1.1" width="64" height="64" viewBox="0 0 256 256">
            <defs></defs>
            <g style={{ stroke: 'none', fill: 'none', opacity: 1 }} transform="translate(1.4066 1.4066) scale(2.81 2.81)">
              <path d="M 48.229 61.853 c -0.043 0 -0.086 -0.003 -0.129 -0.009 l -12.691 -1.648 c -0.343 -0.044 -0.639 -0.263 -0.782 -0.578 c -0.143 -0.315 -0.113 -0.682 0.08 -0.97 l 8.162 -12.184 c 0.212 -0.317 0.588 -0.493 0.967 -0.434 c 0.379 0.052 0.695 0.315 0.814 0.679 l 4.529 13.832 c 0.107 0.326 0.039 0.685 -0.18 0.949 C 48.809 61.722 48.525 61.853 48.229 61.853 z M 37.267 58.42 l 9.518 1.236 l -3.396 -10.374 L 37.267 58.42 z" style={{ fill: 'white' }} />
              <path d="M 85.076 15.943 h -7.603 H 66.247 h -8.433 V 4.803 c 0 -0.552 -0.447 -1 -1 -1 H 33.186 c -0.552 0 -1 0.448 -1 1 v 11.14 h -8.433 H 12.526 H 4.924 C 2.209 15.943 0 18.152 0 20.867 v 60.405 c 0 2.715 2.209 4.924 4.924 4.924 h 7.602 h 11.227 h 42.494 h 11.227 h 7.603 c 2.715 0 4.924 -2.209 4.924 -4.924 V 20.867 C 90 18.152 87.791 15.943 85.076 15.943 z M 75.474 17.943 v 16.174 c -0.061 -0.022 -0.118 -0.051 -0.182 -0.068 c -0.581 -0.156 -1.189 -0.076 -1.711 0.225 l -5.334 3.079 V 17.943 H 75.474 z M 62.89 53.964 c -0.119 0.068 -0.277 0.026 -0.347 -0.094 l -4.599 -7.965 c -0.044 -0.076 -0.038 -0.147 -0.025 -0.193 c 0.012 -0.046 0.043 -0.111 0.118 -0.154 l 16.545 -9.552 c 0.044 -0.026 0.087 -0.034 0.125 -0.034 c 0.025 0 0.048 0.004 0.067 0.009 c 0.046 0.013 0.11 0.043 0.154 0.119 l 4.599 7.963 c 0.07 0.122 0.028 0.279 -0.094 0.349 L 62.89 53.964 z M 34.186 5.803 h 21.628 v 10.14 h -4.205 v -4.935 c 0 -0.552 -0.447 -1 -1 -1 H 39.391 c -0.552 0 -1 0.448 -1 1 v 4.935 h -4.205 V 5.803 z M 40.391 15.943 v -3.935 h 9.218 v 3.935 H 40.391 z M 4.924 84.196 C 3.312 84.196 2 82.885 2 81.272 V 20.867 c 0 -1.612 1.312 -2.924 2.924 -2.924 h 7.602 v 66.253 H 4.924 z M 14.526 84.196 V 17.943 h 7.227 v 8.791 c -0.374 0.223 -0.738 0.464 -1.08 0.737 c -2.329 1.859 -3.665 4.632 -3.665 7.609 c 0 3.541 1.908 6.638 4.744 8.34 v 40.777 H 14.526 z M 19.009 35.08 c 0 -2.365 1.062 -4.568 2.913 -6.045 c 1.381 -1.103 3.047 -1.685 4.818 -1.685 c 4.263 0 7.73 3.468 7.73 7.73 s -3.468 7.73 -7.73 7.73 S 19.009 39.342 19.009 35.08 z M 23.753 84.196 v -39.86 c 0.942 0.305 1.945 0.474 2.987 0.474 c 5.365 0 9.73 -4.365 9.73 -9.73 s -4.365 -9.73 -9.73 -9.73 c -1.019 0 -2.026 0.169 -2.987 0.479 v -7.885 h 9.433 h 6.205 h 11.218 h 6.205 h 9.433 v 20.565 l -9.21 5.317 c -0.521 0.301 -0.895 0.787 -1.05 1.369 c -0.156 0.582 -0.076 1.189 0.225 1.711 l 4.6 7.966 c 0.417 0.722 1.177 1.126 1.956 1.126 c 0.382 0 0.77 -0.098 1.123 -0.302 l 2.356 -1.36 v 29.861 H 23.753 z M 68.247 84.196 V 53.18 l 7.227 -4.172 v 35.188 H 68.247 z M 88 81.272 c 0 1.612 -1.312 2.924 -2.924 2.924 h -7.603 V 47.853 l 2.96 -1.709 c 1.076 -0.621 1.447 -2.003 0.826 -3.081 l -3.786 -6.557 V 17.943 h 7.603 c 1.612 0 2.924 1.312 2.924 2.924 V 81.272 z" style={{ fill: 'white' }} />
            </g>
          </svg>
          <p className="text-center mt-2 md:text-xl">We handled over 100,000 luggage</p>
        </div>

        {/* Second SVG Block */}
        <div className="flex flex-col items-center">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="64"
  height="64"
  viewBox="0 0 256 256"
  preserveAspectRatio="xMidYMid meet"
>
  <defs></defs>
  <g
    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    style={{
      stroke: 'none',
      strokeWidth: 0,
      strokeDasharray: 'none',
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter',
      strokeMiterlimit: 10,
      fill: 'none',
      fillRule: 'nonzero',
      opacity: 1,
    }}
  >
    <path
      d="M 47.755 3.765 l 11.525 23.353 c 0.448 0.907 1.313 1.535 2.314 1.681 l 25.772 3.745 c 2.52 0.366 3.527 3.463 1.703 5.241 L 70.42 55.962 c -0.724 0.706 -1.055 1.723 -0.884 2.72 l 4.402 25.667 c 0.431 2.51 -2.204 4.424 -4.458 3.239 L 46.43 75.47 c -0.895 -0.471 -1.965 -0.471 -2.86 0 L 20.519 87.588 c -2.254 1.185 -4.889 -0.729 -4.458 -3.239 l 4.402 -25.667 c 0.171 -0.997 -0.16 -2.014 -0.884 -2.72 L 0.931 37.784 c -1.824 -1.778 -0.817 -4.875 1.703 -5.241 l 25.772 -3.745 c 1.001 -0.145 1.866 -0.774 2.314 -1.681 L 42.245 3.765 C 43.372 1.481 46.628 1.481 47.755 3.765 z"
      style={{
        stroke: 'none',
        strokeWidth: 1,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fill: 'white',
        fillRule: 'nonzero',
        opacity: 1,
      }}
    />
  </g>
</svg>


          <p className="text-center mt-3 md:text-xl ">1400+ Google 5 star reviews</p>
        </div>

        {/* Third SVG Block */}
        <div className="flex flex-col items-center">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  width="64"
  height="64"
  viewBox="0 0 256 256"
  preserveAspectRatio="xMidYMid meet"
>
  <defs></defs>
  <g
    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    style={{
      stroke: 'none',
      strokeWidth: 0,
      strokeDasharray: 'none',
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter',
      strokeMiterlimit: 10,
      fill: 'none',
      fillRule: 'nonzero',
      opacity: 1,
    }}
  >
    <path
      d="M 77.742 75.512 H 29.095 c -3.413 0 -6.696 -1.438 -9.01 -3.947 L 3.248 53.311 c -4.299 -4.66 -4.299 -11.961 0 -16.621 l 16.837 -18.254 c 2.314 -2.508 5.598 -3.947 9.01 -3.947 h 48.647 C 84.501 14.489 90 19.987 90 26.746 v 36.508 C 90 70.013 84.501 75.512 77.742 75.512 z M 29.095 21.489 c -1.463 0 -2.873 0.617 -3.865 1.693 L 8.393 41.436 c -1.844 1.999 -1.844 5.13 0 7.129 L 25.23 66.818 c 0.993 1.076 2.401 1.693 3.865 1.693 h 48.647 c 2.899 0 5.258 -2.358 5.258 -5.258 V 26.746 c 0 -2.899 -2.358 -5.257 -5.258 -5.257 H 29.095 z"
      style={{
        stroke: 'none',
        strokeWidth: 1,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fill: 'white',
        fillRule: 'nonzero',
        opacity: 1,
      }}
    />
    <circle
      cx="17.892"
      cy="45.002"
      r="5.372"
      style={{
        stroke: 'none',
        strokeWidth: 1,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fill: 'white',
        fillRule: 'nonzero',
        opacity: 1,
      }}
    />
  </g>
</svg>
          <p className="text-center mt-3 md:text-xl">Your luggage is sealed and insured</p>
        </div>

        {/* Fourth SVG Block */}
        <div className="flex flex-col items-center">
          <svg className="w-16 h-16 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <p className="text-center mt-2 md:text-xl">Opposite the Kings cross station</p>
        </div>

      </div>
    </div>
  </section>
</div>






    </div>
    </main>
    </>
  );
}
