import Image from "next/image";
import skill1 from "../images/html5.png";
import skill2 from "../images/css3.png";
import skill3 from "../images/javascript.png";
import skill4 from "../images/typescript.png";
import skill5 from "../images/jquery.png";
import skill6 from "../images/bootstrap.png";
import skill7 from "../images/tailwind-css.svg";
import skill8 from "../images/react.png";
import skill9 from "../images/figma.png";

function Skills() {
  return (
    <div>
        <section className="flex flex-col lg:flex-row justify-center py-16 px-6 center gap-20 items-center">
            <div className="flex lg:justify-start justify-center flex-col gap-6">
                <h2 className="text-center lg:text-start text-2xl sm:text-3xl font-semibold font-poppins">What My Skills<br/>Included?</h2>
                <p className="text-[#838383] justify-center text-start text-[0.7em] sm:text-[1em] lg:text-start w-[280px] sm:w-[450px]">🚀 Building clean, responsive, and user-friendly interfaces with HTML, CSS, JavaScript, Bootstrap, jQuery, and Tailwind CSS! 🌟 Elevate your digital experience now, with Next.js for future-ready development. 🌐 Get a free consultation today! 👨‍💻</p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-10 items-center">
                <Image src={skill1} alt="" title="HTML" width={70} className="bg-lightGrey rounded-[10px] py-2 px-2"/>
                <Image src={skill2} alt="" title="CSS" width={70} className="bg-lightGrey rounded-[10px] py-2 px-2"/>
                <Image src={skill3} alt="" title="JAVASCRIPT" width={70} className="bg-lightGrey rounded-[10px] py-2 px-2"/>
                <Image src={skill4} alt="" title="TYPESCRIPT" width={70} className="bg-lightGrey rounded-[10px] py-2 px-2"/>
                <Image src={skill5} alt="" title="JQUERY" width={70} className="bg-lightGrey rounded-[10px] py-2 px-2"/>
                <Image src={skill6} alt="" title="BOOTSTRAP" width={70} className="bg-lightGrey rounded-[10px] py-2 px-2"/>
                <Image src={skill7} alt="" title="TAILWIND CSS" width={70} className="bg-lightGrey rounded-[10px] py-2 px-2"/>
                <Image src={skill8} alt="" title="REACT JS" width={70} className="bg-lightGrey rounded-[10px] py-2 px-2"/>
                <Image src={skill9} alt="" title="FIGMA" width={70} className="bg-lightGrey rounded-[10px] py-2 px-2"/>
            </div>
        </section>
    </div>
  )
}

export default Skills;