import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
const Hero1 = () => {
  return  (
    <div>
 
        <div className="container px-6 py-16 pb-2 mx-auto mb-16 	">
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold  uppercase dark:text-white lg:text-3xl text-neutral">Best Place To find work in the NFT world</h1>
                        <p className="mt-4 text-neutral-200 ">Find NFT Jobs or Gigs and work for the coolest projects or companies that are building the Metaverse.</p>
                        <a href="#middle"><button className=" mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-babypowder bg-primary transition duration-150 ease-in-out hover:bg-babypowder hover:text-black lg:text-lg lg:font-bold  rounded-full text-white px-4 sm:px-10  py-2 sm:py-4 text-sm">Find Gigs</button></a>  
                        <a href="https://airtable.com/shrgKFAVls3w1j1SO" target="_blank" rel="noreferrer"><button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-babypowder transition duration-150 ease-in-out hover:bg-primary hover:text-neutral  lg:text-lg lg:font-bold  rounded-full text-black px-4 sm:px-10  py-2 sm:py-4 text-sm">Post a Gig</button> </a>
                    </div>
                </div>
 
                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <Image src='/images/person1.png' width={688} height={488} className="w-full h-full lg:max-w-2xl" />
                </div>
             
                  
                </div>
                <div className=" w-full  mt-2 px-0">
                     <div className="container m-auto px-6 flex items-end justify-start md:px-12 lg:px-7">
                      <div className=" hidden space-x-4 md:flex md:items-start ">
                        <Image src='/images/freelancer.png' width={64} height={64} className=" w-14 h-14 rounded-full object-cover"/>
                              <div className="text-neutral-100 font-semibold pt-1 hover:bg-primary'>">
                                 <span className="text">Freelancer ?</span>
                                <Link href="/talent"> 
                                <p className="font-semibold text-neutral-300 hover:text-primary cursor:pointer ">Register as talent(beta) <svg  className="w-4 h-4 ml-2 inline-block text-primary" viewBox="0 0 24 24" stroke="currentColor"  xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
              </p></Link>
                                 </div>
                         </div>
                         
                     </div>
           

            </div>
           
                
        </div>
        
    
            


        
    </div>
 
 
    )
  }
export default Hero1;
 
 