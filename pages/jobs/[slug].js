import React from 'react'
import { API_URL } from '../../config'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import { FaBriefcase, FaKeyboard } from 'react-icons/fa';
import {GiReceiveMoney} from 'react-icons/gi'
import ReactMarkdown from 'react-markdown'
import { marked } from 'marked';
import Link from 'next/dist/client/link'


const JobPage = ({job}) => {
    const router = useRouter()
    console.log(job)
    console.log(job[0])
    const jobinput= job.data[0].attributes.description
  return (
    <>
      <main className="bg-background">
      <section className=" py-16 bg-background">
          <div className="container mx-auto px-4 ">
          <Link href="/"className="flex	cursor-pointer">
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/>
             
              </svg>
              </Link>
              <p>all Jobs  </p>
         
            <div className=" flex flex-col min-w-0 break-words bg-graybg w-full mb-6 shadow-xl rounded-lg mt-8  ">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div>
                    <div className="border-2 border-color:white rounded-xl">
                    <Image
                      className="rounded-xl"
                      src={job.data[0].attributes.logo.data.attributes.formats.thumbnail.url}
                      height={88} width={88}
                      >
                    </Image>
                  
                      {/*<img
                        alt="..."
                        src={require("assets/img/team-2-800x800.jpg").default}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />*/}
                      
                      </div>
             
                    </div>
                  
                  </div>
                  <div className="w-full lg:w-4/12 px-4  lg:order-3 lg:text-right lg:self-center">
                 
                    <div className=" flex justify-center py-2 px-3 mt-4  sm:mt-0">
                      <button
                        className="bg-primary active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Apply
                      </button>
                   </div>
                  
                  
                  </div>
               
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                     <Link href={`${job.data[0].attributes.Twitter}`}>
                     <a target="_blank">
                      <div className="mr-4 p-3 text-center">

                      <Image 
                  src={
                    job.data[0].attributes.Twitter
                      ? '/images/twitter.svg'
                      : 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                  
               }
                  
                         width={32}
                        height={32} />
                       
                      </div>
                      </a>
                      </Link>
                      <div className="mr-4 p-3 text-center">
                        <Image src={
                    job.data[0].attributes.discord
                      ? '/images/discord.svg'
                      : 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                  
               }
                         width={32}
                        height={32} />
                       
                      </div>
                   
                    </div>
                  </div>
                 

                </div>
               
                <div className="text-center mt-4">
                  <div className="px-12">
                  <p className="text-neutral-400">{job.data[0].attributes.companyProject}</p>
                </div>
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-neutral-50 mb-2">
                    {job.data[0].attributes.positionTitle}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 px-2 text-neutral-400 font-bold uppercase flex justify-center 	align-items: center">
          
                    <FaBriefcase   className="mx-2 h-4 w-4"  color="#23C9FF"/>
                    <p className="pr-4">{job.data[0].attributes.type}</p>
                    <FaKeyboard  className="mx-2 h-4 w-4" color="#23C9FF"/>

                    <GiReceiveMoney  className="mx-2 h-4 w-4"  color="#23C9FF"/>
                    {job.data[0].attributes.pay ? job.data[0].attributes.pay : "TBD"}
                  </div>
                
                
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4  text-neutral-200">
                 
                   <div className='prose-neutral text-left list-disc'> <ReactMarkdown children=  {job.data[0].attributes.description} /> </div>
                      
                   
                  
                     
             

                   <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-primary active:bg-primary uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Apply
                      </button>
                    </div>
                    <p> Find the gig useful and consider applying? Mention that we have sent you, so that we could reach more people and more people post jobs here :)</p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </section>
      </main>
      </>
  )
}
export async function getServerSideProps({ query: { slug } }) {
    const res = await fetch(`${API_URL}/jobs?filters[slug][$eq]=${slug}&populate=*`)

    const jobs = await res.json()
    console.log(jobs)
    return {
      props: {
       job:jobs
      },
    }
  }
  
export default JobPage