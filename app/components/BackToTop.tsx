"use client"



import Image from "next/image";
import chevron from "../images/chevron.svg";

function BackToTop() {
  function top(){
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  }
  return (
    <div>
        <button onClick={top} className="text-black border py-2 px-2 rounded-full fixed bottom-7 right-7 bg-lightGrey">
          <Image src={chevron} alt="" width={30} />
        </button>
    </div>
  )
}

export default BackToTop;