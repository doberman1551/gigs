import Head from 'next/head'
import Image from 'next/image'
import FeaturedJobs from '../../components/FeaturedJobs'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import SideJobCard from '../../components/SideJobCard'
import { API_URL } from '../../config'
import qs from 'qs'
import { useRouter } from 'next/router'
import BottomJobCard from '../../components/BottomJobCard'
import Link from 'next/Link'
//import styles from '../styles/Home.module.css'

export default function Search({jobs}) {
  console.log(jobs)
  const router=useRouter()
  return (

    <div className="bg-background ">
   
    <div className='container mx-auto w-full md:max-w-7xl'>
   
    <div className="container mx-auto w-full md:max-w-7xl">
    <h2 className=" align center pl-2 pt-12 font-bold text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl  text-white">Search results for "{router.query.term}"</h2>
      <SearchBar/>
      </div>

      <div className="container mx-auto md:flex  items-stretch justify-between">
      <div>{jobs.data.map((job) => (
      
        <FeaturedJobs key={job.id} job={job}  />
    ))}
      </div> 
        <SideJobCard/>
        </div>
        </div>
        </div>
 

  )
}
export async function getServerSideProps({query:{term}}) {
    const query = qs.stringify({
        filters: {
            
          description: {
            $containsi:term,
          },
         
        
        positionTitle: {
            $containsi:term }
     } })
 
        const jobRes = await fetch(`${API_URL}/jobs?${query}&populate=*`)
  const jobs=await jobRes.json()

return{
  props:{jobs}
}
}

