import Image from "next/image";
import img1 from "../images/achievment-card_icon-1.png";
import img2 from "../images/achievment-card_icon-2.png";
import img3 from "../images/achievment-card_icon-3.png";

function Achievement() {
  return (
    <div>
      <section className="py-20 px-4 flex justify-center gap-14 flex-wrap">

        <div className="bg-lightGrey flex items-center gap-7 py-6 text-center rounded-[10px] px-6">
          <Image src={img1} alt="" className=" bg-orange py-[1vmin] px-[1vmin] rounded-full shadow-[rgba(0,0,0,0.1)]"/>
          <div className="content">
            <h2 className="text-orange text-[2.5em] sm:text-[3em] font-semibold ">1+</h2>
            <p className="text-[0.9em] sm:text-lg font-medium">Years Of Experience</p>
          </div>
          <div className="chevron font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
        </div>

        <div className="bg-lightGrey flex items-center gap-7 py-4 sm:py-6 text-center rounded-[10px] px-6">
          <Image src={img2} alt="" className=" bg-orange py-[1vmin] px-[1vmin] rounded-full shadow-[rgba(0,0,0,0.1)]"/>
          <div className="content">
            <h2 className="text-orange text-[2.5em] sm:text-[3em] font-semibold ">10+</h2>
            <p className="text-[0.9em] sm:text-lg font-medium">Completed Projects</p>
          </div>
          <div className="chevron font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
        </div>

        <div className="bg-lightGrey flex items-center gap-7 py-6 text-center rounded-[10px] px-6">
          <Image src={img3} alt="" className=" bg-orange py-[1vmin] px-[1vmin] rounded-full shadow-[rgba(0,0,0,0.1)]"/>
          <div className="content">
            <h2 className="text-orange text-[2.5em] sm:text-[3em] font-semibold ">10+</h2>
            <p className="text-[0.9em] sm:text-lg font-medium">Happy Client&apos;s</p> {/* Escaped the single quote here */}
          </div>
          <div className="chevron font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Achievement;
