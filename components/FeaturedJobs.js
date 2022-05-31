import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
const FeaturedJobs = ({job}) => {
  
  return (
<div
  className="relative px-2 sm:pl-2 sm:pr-3 pt-2 pb-4 overflow-hidden bg-graybg rounded-lg my-6 mx-6  flex justify-center items-center  ">
    





  <span
    className={`absolute inset-x-0 bottom-0 h-2  ${job.attributes.featured===true? 'bg-gradient-to-r  from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]':'bg-background'}` }> </span>


<Link href={`/jobs/${job.attributes.slug}`}> 
  <div className='w-full flex justify-items-start space-x-4 relative cursor-pointer'>
 
  <Image className="rounded-xl object-scale-down"
          src={
            job.attributes.logo
              ? job.attributes.logo.data.attributes.formats.thumbnail.url
              : '/images/job-default.png'
          }
          width={58}
          height={58}
        />
     <div>
      <h5 className=" text-sm md:text-lg font-semibold text-neutral-100">
      {job.attributes.positionTitle}
      </h5>
      <p className="text-sm md:text-lg text-neutral-500">{job.attributes.companyProject}</p>
     
    </div>
  </div>
   
  </Link>
  

  <div className="grid grid-cols-1 content-end mt-4 md:grid-cols-1 lg:grid-cols-2  px-4 py-4 xl:px-10 gap-y-8 gap-x-8 2xl:gap-x-28">
      <div className="w-full">
                        <p tabIndex="0" className=" focus:outline-none text-sm md:text-base font-medium leading-none text-gray-500 ">Type</p>
                        <p tabIndex="0" className=" focus:outline-none text-sm md:text-base text-neutral-400 mt-2 md:mt-2"> {job.attributes.type}</p>

                        
                        </div>
                        <div className="w-full">
                        <p tabIndex="0" className=" hidden md:block md:focus:outline-none text-xs md:text-base font-medium leading-none text-gray-500  ">Category</p>
                        <p tabIndex="0" className=" hidden  md:block focus:outline-none text-sm  text-neutral-400 mt-3 md:mt-5 pr-1">{/*{job.attributes.category.data.attributes.name} */} </p>
                        </div>
                        
                                          
                            </div>
    
     {job.attributes.featured&& (
        
                         
  <div className="relative top-0 right-0">
                            <strong
      className=" -right-3  -top-16  sm:-right-1 sm:-top-14  absolute px-1 inline-flex items-center gap-0 rounded-tl-xl rounded-br-xl py-0  text-primary bg-graybg "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>

      <span className="text-[10px] font-medium sm:text-xs pr-1">Featured</span>
    </strong>
    </div>  )}

</div>
   
   
  
  
  
     
  
     

  );
};


export default FeaturedJobs;
