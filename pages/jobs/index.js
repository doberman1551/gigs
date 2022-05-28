import React from 'react'
import FeaturedJobs from '../../components/FeaturedJobs'
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import SideJobCard from '../../components/SideJobCard'
import Link from 'next/link'
import { API_URL } from '../../config'
const PER_PAGE=5
const index = ({jobs, total, page}) => {
  const totalPerPage=total.data.length
const lastPage=Math.ceil(totalPerPage/PER_PAGE)

  return (
    <div className="bg-background ">
   
    <div className='container mx-auto w-full md:max-w-7xl'>
   
    <div className="container mx-auto w-full md:max-w-7xl">
    <h2 className=" align center pl-2 pt-12 font-bold text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl  text-white">All Gigs</h2>
      <SearchBar/>
      </div>

      <div className="container mx-auto md:flex  items-stretch justify-between">
      <div>{jobs.data.map((job) => (
      
        <FeaturedJobs key={job.id} job={job}  />
    ))}
      </div> 
        <SideJobCard/>
        </div>

        {page>1&& (
      <Link href={`/jobs?page=${page-1}`}>
      <button class="bg-secondary hover:bg-secondary text-white font-bold py-2 px-4 rounded-xl">
  Prev
</button>
      </Link>
      )}

    {page< lastPage && (
      <Link href={`/jobs?page=${page+1}`}>
      <button class="bg-primary hover:bg-secondary ml-2 text-white font-bold py-2 px-4 rounded-xl">
  Next
</button>
      </Link>
      )}

    </div>
    
   
    </div>
  )
}

export default index

export async function getServerSideProps({query:{page=1}}) {
    const start= +page ===1 ? 0:(+page-1)*PER_PAGE
    //Fetch total/count
    const totalRes = await fetch(`${API_URL}/jobs`)
    const total=await totalRes.json()
    //Fetch jobs and gigs
    const jobRes = await fetch(`${API_URL}/jobs?populate=*&sort=featured:desc&sort=publishedAt:desc&pagination[limit]=${PER_PAGE}&pagination[start]=${start}`)
    const jobs=await jobRes.json()
  
  return{
    props:{jobs, page:+page,total}
  }
  }
  
  