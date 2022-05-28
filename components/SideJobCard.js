import React from 'react';
import Image from 'next/image';
const SideJobCard = () => {
  return(
    
  <div className="relative p-1 pb-8 rounded-xl group w-80% sm:h-96 sm:w-96 bg-graybg bg-opacity-50 shadow-xl hover:rounded-2xl my-16 md:my-0 ">
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-64 bg-graybg"></div>
            <Image src="/images/nftcareersocial.avif"  width={1000} height={667} className="h-64 w-full object-cover object-top rounded-t-lg transition duration-500 group-hover:rounded-t-xl"/>
          </div>
          <div className="px-4 py-0">
            <h4 className="text-xl font-semibold text-neutral-100">Want to upskill?</h4>
            <p className="text-neutral-100">Take our free NFT resources to upskill yourself and become a master</p>
          </div>
          <a href="https://nftcareer.wtf/" className=" inset-x-4 bottom-4 flex items-center space-x-2 py-2 hover:text-primary">
            <div aria-hidden="true" className="h-10 w-10 flex border border-neutral-200 rounded-full hover:border-primary">
              <svg aria-hidden="true" width="24" height="24" fill="none" className="my-auto mx-auto flex-none text-neutral-200">
                <path d="M10.75 8.75l3.5 3.25-3.5 3.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <span className="text-neutral-400 hover:text-primary">Read more</span>
          </a>
        </div>
        
  
  


 ) 
};

export default SideJobCard;
