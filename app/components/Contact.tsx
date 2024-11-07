import Image from "next/image";
import Link from "next/link";

import mapPointer from "../images/map.svg";
import phone from "../images/phone.svg";
import envelop from "../images/envelop.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

function Portfolio() {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-center gap-20 py-20 px-6 items-center">
        <div className="flex flex-col text-center lg:text-start justify-center lg:justify-start gap-5 font-poppins">
          <h2 className="text-[1.2em] sm:text-[1.35em] md:text-[1.6em] lg:text-[1.8em] xl:text-[2.1em] font-semibold leading-[1.2]">Have You Any<br/> Project? Please<br/> Drop a Message</h2>
          <p className="text-[#838383] text-[0.8em] sm:text-[0.9em] lg:text-[1em]">
            Get in touch and let me know how i can help. Fill out the form and
            i’ll<br/> be in touch as soon as possible.
          </p>
          <div className="flex flex-col gap-2 justify-center lg:justify-start text-center lg:text-start">
            <span className="flex gap-3 text-[0.85em] sm:text-[0.95em] lg:text-[1.1em] uppercase tracking-[1.5px] justify-center lg:justify-start text-center lg:text-start"><Image src={mapPointer} alt="" width={20} />Adress</span>
           <p className="text-[#838383] text-[0.7em] sm:text-[0.8em] lg:text-[0.9em] tracking-[1.1px]">Moinabad Model Colony Karachi</p>
          </div>


          <div className="flex flex-col gap-2 justify-center lg:justify-start text-center lg:text-start ">
            <span className="flex gap-3 text-[0.85em] sm:text-[0.95em] lg:text-[1.1em] uppercase tracking-[1.5px] justify-center lg:justify-start text-center lg:text-start"><Image src={phone} alt="" width={20} />Phone</span>
           <p className="text-[#838383] text-[0.7em] sm:text-[0.8em] lg:text-[0.9em] tracking-[1.1px]">+92 3128854302</p>
          </div>


          <div className="flex flex-col gap-2 justify-center lg:justify-start text-center lg:text-start">
            <span className="flex gap-3 text-[0.85em] sm:text-[0.95em] lg:text-[1.1em] uppercase tracking-[1.5px] justify-center lg:justify-start text-center lg:text-start"><Image src={envelop} alt="" width={20} />Email</span>
           <p className="text-[#838383] text-[0.7em] sm:text-[0.8em] lg:text-[0.9em] tracking-[1.1px]">muhammedlayan12@gmail.com</p>
          </div>

          <div className="flex gap-3 justify-center lg:justify-start">
            <Link href="">
            <Image src={facebook} alt="" className="py-2 rounded-full px-2 bg-lightGrey w-[35px] transition-all duration-500 hover:bg-orange"/>
            </Link>
            <Link href="">
            <Image src={twitter} alt="" className="py-2 rounded-full px-2 bg-lightGrey w-[35px] transition-all duration-500 hover:bg-orange"/>
            </Link>
            <Link href="">
            <Image src={linkedin} alt="" className="py-2 rounded-full px-2 bg-lightGrey w-[35px] transition-all duration-500 hover:bg-orange"/>
            </Link>
            <Link href="">
            <Image src={github} alt="" className="py-2 rounded-full px-2 bg-lightGrey w-[35px] transition-all duration-500 hover:bg-orange"/>
            </Link>
          </div>
        </div>


        <div className="flex justify-center py-8 px-6 bg-lightGrey text-start items-center rounded-[15px] mx-2">
            <form className="flex justify-center flex-col gap-8 items-center text-start">
                <label className="flex flex-col text-[0.9em] font-poppins">Name
                <input type="text" placeholder="Enter Your Name" className="outline-none border-none hover:shadow-[0_0_0_2px_orange] transition-shadow duration-300 py-2 pl-2 pr-[7vmin] ah:pr-[16vmin] rounded-[8px] bg-lightBlack" required/>
                </label>
                <label className="flex flex-col text-[0.9em] font-poppins">Email
                <input type="email" placeholder="Enter Your Email" className="outline-none border-none hover:shadow-[0_0_0_2px_orange] transition-shadow duration-300 py-2 pl-2 pr-[7vmin] ah:pr-[16vmin] rounded-[8px] bg-lightBlack" required/>
                </label>
                <label className="flex flex-col text-[0.9em] font-poppins">Message
                <input placeholder="Your Message" className="outline-none border-none hover:shadow-[0_0_0_2px_orange] transition-shadow duration-300 pt-2 pb-20 pl-2 pr-[7vmin] ah:pr-[16vmin] rounded-[8px] bg-lightBlack" required/>
                </label>
                <input type="submit" value="Send" className="py-2 px-[29vmin] aah:px-[18vmin] aa:px-[16.5vmin] bg-black text-bg"></input>
            </form>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
