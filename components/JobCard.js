
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
const JobCard = () => {
  return (
   
  <div className="bg-graybg w-full my-16  md:flex items-center justify-center px-2 rounded-xl  hover:scale-105	">
  


  <Link href={`/jobs/${job.attributes.slug}`}>

  <div  className=" w-full flex justify-items-start space-x-4 relative cursor-pointer">
    <Image className="rounded-xl"
          src={
            job.attributes.logo
              ? job.attributes.logo.data.attributes.formats.thumbnail.url
              : '/images/job-default.png'
          }
          width={58}
          height={58}
        />
      <div>
      <p className="pt-4 font-semibold text-base" > {job.attributes.positionTitle}</p>
      <p className="text-neutral-500">{job.attributes.companyProject}</p>
      </div>
      </div>
      </Link>
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 px-4 py-4 xl:px-10 gap-y-8 gap-x-12 2xl:gap-x-28">
      <div className="w-full">
                        <p tabindex="0" className="focus:outline-none text-xs md:text-sm font-medium leading-none text-gray-500 ">Type</p>
                        <p tabindex="0" className="focus:outline-none text-base  text-white mt-3 md:mt-5"> {job.attributes.type}</p>

                        
                        </div>
                        <div className="w-full">
                        <p tabIOndex="0" className="focus:outline-none text-xs md:text-sm font-medium leading-none text-gray-500 ">Category</p>
                        <p tabIndex="0" className="focus:outline-none text-base  text-white mt-3 md:mt-5">{job.attributes.category.data.attributes.name}</p>
                        </div>
                        
                            </div>
    
        
                       
    </div>
 
    
 
 



   

   

  )
}

export default JobCard