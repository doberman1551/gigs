import React from 'react'
import Link from 'next/link';

const successPosting = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-background">
    <h2 className="text-4xl font-semibold">Thanks for posting a gig</h2>
    <h3 className="text-xl font-semibold pt-4 ">We would review it quickly and post it!</h3>
  
    <a href="https://airtable.com/shrAKJuo1qVoydcr3">
    <button className=" mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary transition duration-150 ease-in-out hover:opacity-70 lg:text-xl  lg:font-bold  rounded-full text-white px-4 sm:px-10 py-4 sm:py-4 text-base font-semibold ">Post another Gig</button>
    </a>

    <Link href="/">
    <button className=" mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-secondary transition duration-150 ease-in-out hover:opacity-70  hover:outline-secondary lg:text-xl  lg:font-bold  rounded-full text-white px-4 sm:px-10 py-4 sm:py-4 text-base font-semibold ">Back to home</button>
    </Link>
  </div>
);
}

  


export default successPosting