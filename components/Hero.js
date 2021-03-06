import React from 'react';
import Image from 'next/image';
const Hero = () => {
  return<><div className="bg-background">
  <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
      <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-white font-black leading-7 md:leading-10">
              Talent Platform for the NFT and Metaverse World
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-neutral-50 font-normal text-center text-sm sm:text-lg">Jobs is a curated job board of the best jobs for developers, designers and marketers in the tech industry. </p>
      </div>
      <div className="flex justify-center items-center">
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-primary transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded-full text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Get Started</button>
          <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-babypowder transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded-full text-black px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">Live Demo</button>
      </div>
   
  

  </div>

 
</div>
 
 </> 
 
;
};

export default Hero;




