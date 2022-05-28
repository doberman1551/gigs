import Head from 'next/head'
import Image from 'next/image'
import BottomJobCard from '../components/BottomJobCard'
import FeaturedJobs from '../components/FeaturedJobs'
import Hero1 from '../components/Hero1'
import JobCard from '../components/JobCard'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import SideJobCard from '../components/SideJobCard'
import { API_URL } from '../config'
import Link from 'next/link'
//import styles from '../styles/Home.module.css'

export default function Home({jobs}) {
  console.log(jobs)
  return (
    <div>
      <Head>
        <title>NFT Gigs</title>
        <meta name="description" content="NFT jobs and gigs" />
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-background">
      <Hero1/>
      <div className="container mx-auto w-full md:max-w-7xl">
      <SearchBar/>
      </div>
      <div className="container mx-auto max-w-8xl">
      <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl  text-white">Latest Gigs</h2>
      <div className="container mx-auto md:flex  items-stretch justify-between">
      <div>{jobs.data.map((job) => (
      
        <FeaturedJobs key={job.id} job={job}  />
    ))}
      </div> 
      <SideJobCard className="sticky"/>
      
      

      </div>
      
     
      </div>
      <div className="container mx-auto max-w-7xl">
      <Link href="/jobs"><button className=" mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-babypowder bg-babypowder transition duration-150 ease-in-out hover:bg-primary hover:text-white lg:text-lg lg:font-bold  rounded-full text-black px-4 sm:px-10  py-2 sm:py-4 text-sm">
        All gigs </button></Link>
      <div className="flex items-stretch justify-center">

      <BottomJobCard/>
      </div>
      </div>
      </section>

      <footer>
       
      </footer>
    </div>
  )
}
export async function getServerSideProps() {

  const jobRes = await fetch(`${API_URL}/jobs?populate=*&sort=featured:desc&sort=publishedAt:desc`)
  const jobs=await jobRes.json()

return{
  props:{jobs}
}
}

