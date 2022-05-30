import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
const SearchBar = () => {
  const [term,setTerm]=useState('')
  const router=useRouter();
  const handleSubmit=(e)=>{
    e.preventDefault()
    router.push(`/jobs/search?term=${term}`)
    setTerm("")
  }
  return (
<section className="bg-background h-50 p-8 flex items-center justify-start rounded-xl">


<form onSubmit={handleSubmit} className="w-full my-8 md:max-w-5xl ">
                        <div className="relative flex p-1 rounded-full bg-graybg border border-graybg shadow-md md:p-2 md:h-16 text-black">
                           
                            <input value={term}  onChange={(e)=>setTerm(e.target.value)}  placeholder="What you are good at?" className="w-full p-4 rounded-full" type="text" />
                            <button type="submit"  title="Start buying" className="ml-auto py-3 px-6 rounded-full text-center transition bg-primary focus:from-red-400 md:px-12">
                                <span className="hidden text-white font-semibold md:block">
                                    Search
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 mx-auto text-neutral-100 md:hidden" fill="currentColor"  viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </div>
                    </form>

</section>
  )
};

export default SearchBar;


{/*


 <form onSubmit={handleSubmit} className="bg-graybg relative flex flex-wrap items-stretch justify-center w-full mb-4">
    
     <input value={term} onChange={(e)=>setTerm(e.target.value)} className="w-full px-4 md:w-1/2 h-12 md:px-3 rounded-full mb-8 focus:outline-none text-black focus:shadow-outline text-xl  shadow-lg" type="search" placeholder="Search..."/>
     <button className="bg-primary font-bold py-2 px-2 mx-2 rounded-xl w-full md:w-24 md:h-12">Search</button>
    
</form>*/}