import Image from "next/image";
import heroimg from "../images/hero-banner.png";


function Hero() {
  return (
    <div>
        <section className="flex flex-col gap-5 lg:flex-row justify-evenly items-center py-24 sm:py-4 px-2 sm:px-6">
          <Image src={heroimg} alt="" className="h-auto w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[45vw] relative"/>
          <div className="static lg:absolute font-poppins top-[50%] xl:top-[65%] text-center">
            <h2 className="text-[6vmin] sm:text-[4vmin] font-bold">We Design & Build<br/> Creative Products</h2>
            <button className="mt-3 border border-black py-2 px-6 lg:border-white font-semibold uppercase transition-all duration-500 hover:bg-orange">Get In Touch</button>
          </div>
        </section>
    </div>
  )
}

export default Hero;