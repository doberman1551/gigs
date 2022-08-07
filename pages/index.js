import Head from 'next/head'
import Image from 'next/image'
import BottomJobCard from '../components/BottomJobCard'
import FeaturedJobs from '../components/FeaturedJobs'
import Hero1 from '../components/Hero1'
import Hero3d from '../components/Hero3d'
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
       
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/images/nftGigsSocialImage.png" />
      </Head>
      <section className="bg-background">
       <Hero1/>
      <div className="container flex justify-evenly  ">
     
      </div>
      <div className="container mx-auto  " id="middle">
      <SearchBar/>
      <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl pl-4 text-white ">Latest Gigs</h2>
      <div className="grid  grid-cols-1 md:grid-cols-5 ">
        <div className="col-span-3">
      <div>{jobs.data.map((job) => (
      
        <FeaturedJobs key={job.id} job={job}  />
    ))}
        </div>
<       Link href="/jobs"><button className=" ml-4 mt-4  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-babypowder bg-babypowder transition duration-150 ease-in-out hover:bg-primary hover:text-white lg:text-lg lg:font-bold  rounded-full text-black px-4 sm:px-10  py-2 sm:py-4 text-lg font-semibold">
        All gigs 👉</button></Link>
      </div> 
      <SideJobCard className="sticky"/>
      
  

      </div>
      
      
     
      <div className="flex justify-center md:ml-12">
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

  const jobRes = await fetch(`${API_URL}/jobs?populate=*&sort=featured:asc&sort=publishedAt:desc&pagination[limit]=10`)
  const jobs=await jobRes.json()

return{
  props:{jobs}
}
}

