import Link from "next/link";
import { useState } from "react";
import Image from 'next/image'

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
       <nav className="bg-background  px-2 sm:px-4 py-2.5 cursor-pointer">
       <div className="container flex flex-wrap justify-between items-center mx-auto">
       <Link href="/"className="flex	cursor-pointer">
    <Image

      src="/logo.png"
      alt="Picture of the author"
      width={133}
      height={35}></Image>
    </Link>
        <button
          className=" inline-flex p-3 hover:bg-primary rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-medium items-center justify-center hover:text-primary  ">
                Home
              </a>
            </Link>
            <Link href="/jobs">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-medium items-center justify-center hover:text-primary">
                Gigs
              </a>
            </Link>
            <Link href="/talent">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-medium items-center justify-center  hover:text-primary">
              Talent
              </a>
            </Link>
           
          </div>
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
