import React from 'react'
import Link from 'next/link'

const Pricing = () => {

   
  return (
                                 

<div className="bg-background">
    <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="m-auto text-center lg:w-7/12">
            <h2 className="text-2xl text-neutral-100 font-bold md:text-4xl">Post a Gig or a Job.</h2>
            <h3 className="text-xl text-neutral-100 font-bold md:text-2xl mt-8">Always open for the community</h3>
        <p className="px-2 py-4  text-neutral-300">NFT Gigs supports the community and is open for all projects and companies for free. However, you could take a premium option if you want more visibility or features as well as support us.  Due to scamming attempts, all jobs and gigs are pending a quick review </p>
        </div>
        <div className="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:justify-center lg:space-x-8">
            <div className="relative md:col-span-1 group lg:w-[32%]">
                <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-graybg shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                <div className="relative p-6 space-y-6">
                    <h3 className="text-3xl text-neutral-100 font-semibold text-center">Free</h3>
                    <div className="relative flex justify-around">
                        <div className="flex">
                            <span className="-ml-6 mt-2 text-3xl text-neutral-100 font-bold">$</span>
                            <span className="text-8xl text-neutral-100 font-bold leading-0">0</span>
                        </div>
                        
                    </div>
                    <ul role="list" className="w-max space-y-4 pb-6 m-auto text-neutral-200 list-none">
                        <li className="space-x-2">
                            <span className="text-bluebg2 font-semibold">&#10004;</span>
                            <span>Placement on the website</span>
                        </li>
                        <li className="space-x-2">
                            <span className="text-bluebg2 font-semibold">&#10004;</span>
                            <span>Random Promotion</span>
                        </li>
                        <li className="space-x-2">
                            <span className="text-bluebg2 font-semibold">&#10004;</span>
                            <span>Normal review time</span>
                        </li>
                    </ul>
                    <a href="https://airtable.com/shrE2i1RJtp2gVPR7">
                    <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-primary hover:bg-secondary active:bg-cyan-700 focus:bg-sky-500">
                        <span className="text-white font-semibold">
                            Post a Gig
                        </span>
                    </button>
                    </a>
                </div>
            </div>

            <div className="relative row-start-1 group md:col-span-2 lg:w-[36%]">
                <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-graybg shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                <div className="relative p-6 space-y-6">
                    <h3 className="text-3xl text-neutral-100 font-semibold text-center">Premium</h3>
                    <div className="overflow-hidden">
                        <div className=" flex items-end justify-center">
                            <div className="flex">
                                <span className="-ml-6 mt-2 text-3xl text-neutral-100 font-bold">$</span>
                                <span className="text-8xl text-neutral-100 font-bold leading-0">99</span>
                            </div>
                           
                        </div>
                        
                        
                 
                    </div>
                    <ul role="list" className="w-max space-y-4 pb-6 m-auto text-neutral-200 list-none ">
                        <li className="space-x-2">
                            <span className="text-secondary font-semibold">&#10004;</span>
                            <span>Premium Placement</span>
                        </li>
                        <li className="space-x-2">
                            <span className="text-secondary font-semibold">&#10004;</span>
                            <span>Promotion</span>
                        </li>
                        <li className="space-x-2">
                            <span className="text-secondary font-semibold">&#10004;</span>
                            <span>Matching with <Link href='/talent'><span className="text-secondary font-semibold underline cursor:pointer">Talent (coming soon)</span></Link></span>
                        </li>
                        <li className="space-x-2">
                            <span className="text-secondary font-semibold">&#10004;</span>
                            <span>Faster Review</span>
                        </li>
                    </ul>
                    <a href="https://buy.stripe.com/4gw6qBaiV4SngsUcMM">
                    <button type="submit" title="Submit" className="block w-full py-3 px-6 text-center rounded-xl transition bg-primary hover:bg-secondary active:bg-cyan-700 focus:bg-sky-500">
                        <span className="text-white font-semibold">
                           Post a Gig
                        </span>
                    </button>
                    </a>
                </div>
            </div>

          
        </div>

        <div className="space-y-4 mt-24">
            <h3 className="text-3xl font-bold py-4">FAQ</h3>
  <details className="p-6 border-l-4 border-secondary bg-graybg group " open>
    <summary className="flex items-center justify-between cursor-pointer">
      <h5 className="text-lg font-medium text-neutral-200">
        How do I purchase Premium placement?
      </h5>

      <span
        className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-neutral-300">
      You could purchase credits via the Stripe link and fill in your Payment ID in the gig posting form.
    </p>
  </details>

  <details className="p-6 border-l-4 border-secondary bg-graybg group">
    <summary className="flex items-center justify-between cursor-pointer">
      <h5 className="text-lg font-medium text-neutral-200">
      Why there is a review?
      </h5>

      <span
        className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-neutral-300">
     There have been scammers impersonating projects and posting gigs trying to scam people. Thats why we need to do simple verification. 
    </p>
  </details>

  <details className="p-6 border-l-4 border-secondary bg-graybg group">
    <summary className="flex items-center justify-between cursor-pointer">
      <h5 className="text-lg font-medium text-neutral-200">
    No Crypto Options?
      </h5>

      <span
        className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-neutral-300">
     We are working on it, hodl steady. 
    </p>
  </details>


</div>


    </div>
</div>
                                
  )
}

export default Pricing