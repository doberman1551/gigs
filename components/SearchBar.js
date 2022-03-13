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
<section className="bg-background h-50 p-8 flex items-center justify-center rounded-xl">


    <form onSubmit={handleSubmit} className="bg-graybg relative flex flex-wrap items-stretch justify-center w-full mb-4">
    
     <input value={term} onChange={(e)=>setTerm(e.target.value)} className="w-full px-4 md:w-1/2 h-12 md:px-3 rounded-full mb-8 focus:outline-none text-black focus:shadow-outline text-xl  shadow-lg" type="search" placeholder="Search..."/>
     <button className="bg-primary font-bold py-2 px-2 mx-2 rounded-xl w-full md:w-24 md:h-12">Search</button>
    
    </form>
   

</section>
  )
};

export default SearchBar;
