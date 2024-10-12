
'use client';
import NavBar from '../components/NavBar';
import Image from 'next/image'; 
import picture1 from '../public/pic1.jpg';
import {Button} from "@nextui-org/react";
import picture2 from '../public/pic2.jpg';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <section>
      <div className="flex flex-col md:flex-row items-center justify-center mt-4 md:mt-12 md:ml-4 z-" style={{ marginTop: '150px' }}> {/* Adjust this value based on your navbar height */}
        
      <Image 
  src={picture1} 
  alt="Description of the image" 
  width={700} 
  height={900} 
  className="rounded-xl object-cover mb-4 md:mb-0 md:w-1/2 shadow-xl" 
/>

        <div className="flex flex-col items-center justify-center mr-6 mt-4 md:mt-0 md:ml-4"> 
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-center">London’s Best Luggage Storage Service</h1>
          <p className="text-2xl mb-2 text-center mt-4 font-beautiful ">
            Please Book Online For Cheaper Price, Insurance & Security Purposes. Explore our features, learn about our services, and discover what we have to offer.
          </p>
          <p className="text-xl mb-2 text-center mt-6 font-serif">
            Online Price £4/bag
          </p>
          <p className="text-xl mb-2 text-center font-serif">
            In store price £5/bag
          </p>
          <p className="text-xl mb-2 text-center font-bold font-beautiful mt-6">
            Cancellation Is Free Before Booking Time Start. For Any inquiries Please Call, text, or Email Us (24/7) Customer Support Available.         
    
          </p>
          <Button className="bg-green-900 text-white py-2 px-4 rounded-xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all shadow-lg hover:shadow-green-500/50 flex items-center mt-4">
  BOOK NOW
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="ml-2 w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</Button>

        </div>
      </div>
      <div className="mt-32"> 
  
      </div>

      </section>
       
<section>
<div className="flex flex-col md:flex-row justify-between mt-6">
  <div className="text-4xl mb-2 font-bold text-center md:ml-[40px]">
    <p>London’s Best Luggage Storage Service</p>
    
    {/* 5 Star SVG */}
    <div className="flex justify-center my-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-yellow-500" // Adjust size and color as needed
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 15.27L16.18 18l-1.64-7.03L18 8.24l-7.19-.61L10 1 9.19 7.63 2 8.24l5.46 2.73L5.82 18z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-yellow-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 15.27L16.18 18l-1.64-7.03L18 8.24l-7.19-.61L10 1 9.19 7.63 2 8.24l5.46 2.73L5.82 18z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-yellow-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 15.27L16.18 18l-1.64-7.03L18 8.24l-7.19-.61L10 1 9.19 7.63 2 8.24l5.46 2.73L5.82 18z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-yellow-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 15.27L16.18 18l-1.64-7.03L18 8.24l-7.19-.61L10 1 9.19 7.63 2 8.24l5.46 2.73L5.82 18z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-yellow-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 15.27L16.18 18l-1.64-7.03L18 8.24l-7.19-.61L10 1 9.19 7.63 2 8.24l5.46 2.73L5.82 18z" />
      </svg>
    </div>
    <br></br>

    <p>1400+ Google Reviews</p>
  </div>


  <div className="text-center bg-green-900 text-white p-2 border-spacing-5 border-white rounded-3xl mt-4 md:mt-0 md:mr-[80px] shadow-2xl">
  <h2 className="text-5xl md:text-6xl mb-2 font-bold">Call us now</h2>
  <p className="text-4xl md:text-7xl mb-2 font-bold">075 3354 4428</p>
</div>

</div>
</section>

<section>
  <br />
  <div className="flex flex-col md:flex-row items-center justify-end mt-4 md:mt-12 md:mr-22 z-0" style={{ marginTop: '30px' }}>

  <div className="text-center bg-green-900 text-white p-20 border-spacing-5 border-white rounded-3xl mt-4 mb-12 md:mt-10 md:mr-[80px] ">
  <h3 className="text-2xl md:text-5xl md:mt-2 mb-12 font-bold">Kings Cross Luggage Storage</h3>
<p className="text-xl md:text-2xl mb-8 md:mt-6 font-bold">Open 7 Days 07:00 – 23:59</p>
<p className="text-xl md:text-2xl mb-8 md:mt-6 font-bold">345 Grays Inn Road, Kings Cross,
London, WC1X 8PX</p>
<p className="text-xl md:text-xl  mb-6 font-beautiful ">Leave your luggage safely in our store and collect your belongings at the time that suits you. We are opposite
   the Kings cross station platform 01 & 02.All your luggages are insured. Pickup and drop off anytime between opening hours.</p>

    <div className="flex justify-center mt-4">
      <Button className="bg-white text-green-600 py-6 px-8 rounded-2xl hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-all shadow-lg hover:shadow-green-500/50 flex items-center">
        BOOK NOW
      </Button>
    </div>

  </div>
    <Image 
      src={picture2} 
      alt="Description of the image" 
      width={450}  
      height={300} 
      className="rounded-xl object-cover mb-4 md:mb-0 md:w-1/2 shadow-xl md:mr-[80px]"
      
    />
      
  </div>
</section>

<div className=" left-0 right-0">
  <section className=" absolute left-0 right-0">
    <div className="w-full flex justify-center bg-green-900 text-white mt-4 shadow-2xl p-4">
      <h2 className="text-2xl md:text-4xl mb-2 font-bold text-center whitespace-normal">
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
      <h2 className="text-8xl font-bold mb-4 text-center text-green-900">£4.00</h2>
      <p className="text-xl mb-4 text-center"> PER BAG PER DAY
      </p>

      <hr className="h-1 bg-green-800 border-none" />

      <ul className="list-disc list-inside text-xl mb-4 line-height-8 mt-4">
  <li className="mb-2">
    We are the cheapest Luggage storage in London
  </li>
  <li className="mb-2">
     We have 1400+ Google 5 star reviews
  </li>
  <li className="mb-2">
  24/7 CCTV and intruder alarms to keep your luggage safe
  </li>
  <li className="mb-2">
  Open everyday from 7.00am until midnight
  </li>
  <li className="mb-2">
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





    </div>
  );
}
