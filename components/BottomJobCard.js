import React from 'react'
import Link from 'next/link'

const BottomJobCard = () => {
  return (
    <section className="text-neutral-100 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/3">
          <div className=" h-64 bg-graybg bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative ">
     
            <h1 className="title-font sm:text-2xl text-xl font-medium text-neutral-100 mb-3">Post a Free Gig</h1>
            <p className="leading-relaxed mb-3">Post your gig or job for free. Open to everybody in the community </p>
            <Link href="/jobs/pricing">
            <a className="text-primary inline-flex items-center hover:underline">Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
        </Link>
          </div>
        </div>
        <div className="p-4 lg:w-1/3">
          <div className=" h-64 bg-gradient-to-r p-[6px] from-secondary via-[#3B82F6] to-[#9333EA] px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative rounded-r-xl     ">
        
            <h1 className="title-font sm:text-2xl text-xl font-medium text-neutral-100 mb-3">Featured Gig</h1>
            <p className="leading-relaxed mb-3">Post a featured job or gig. Benefit from better placement and promotion.You will also support the project</p>
          <Link href="/jobs/pricing">
            <a className="text-primary inline-flex items-center hover:underline">Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
             
              </svg>
             
             
    	    
            </a>
            </Link>
      
            <div className="w-12 h-12 rounded-full bg-neutral-100 opacity-50  absolute top-1"></div>
    	    
          </div>
        </div>
        </div>
        </div>        
        </section>
  )
}

export default BottomJobCard