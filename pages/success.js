import Image from 'next/image';
function success() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen  bg-background">
        <h2 className="text-4xl font-semibold">Thanks for purchasing a Premium gig</h2>
        <h3 className="text-xl font-semibold pt-4 "> Please keep your receipt number sent by Stripe to your email!</h3>
        <div className="py-8">
        <Image src='/images/receipt1.png' height={135} width={304} ></Image>
        </div>
        <a href="https://airtable.com/shrAKJuo1qVoydcr3">
        <button className=" mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary transition duration-150 ease-in-out hover:bg-secondary lg:text-xl  lg:font-bold  rounded-full text-white px-4 sm:px-10 py-4 sm:py-4 text-base font-semibold ">Post a Gig</button>
        </a>
      </div>
    );
  }
  
  export default success;