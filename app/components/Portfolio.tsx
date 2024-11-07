import Image from "next/image";
import Link from "next/link";

import project1 from "../images/project-1.png";
import project2 from "../images/project-2.png";
import project3 from "../images/project-3.png";
import project4 from "../images/project-4.png";
import project5 from "../images/project-5.png";
import project6 from "../images/project-6.png";
import project7 from "../images/project-7.png";
import project8 from "../images/project-8.png";
import project9 from "../images/project9.png";
import eye from "../images/eye.svg";

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center py-[20vmin] px-8">
      <div className="text-center flex flex-col justify-center mb-10">
        <h2 className="text-[2em] font-semibold">See My Works Which Will Amaze You!</h2>
        <p className="text-[1em] text-[#838383] max-w-md">
          We develop the best quality websites that serve for the long-term. Well-documented, clean, easy, and elegant interface helps any non-technical clients.
        </p>
      </div>

      <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full max-w-screen-xl">
        <div className="relative group h-104 w-full overflow-hidden rounded-md">
          <Link href="https://press-mart.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src={project1} alt="Project 1" className="object-cover h-full w-full transition duration-300 ease-in-out group-hover:brightness-50" />
            <Image src={eye} alt="eye" className="absolute inset-0 w-10 h-10 mx-auto my-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        <div className="relative group h-104 w-full overflow-hidden rounded-md">
          <Link href="https://layan-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src={project2} alt="Project 2" className="object-cover h-full w-full transition duration-300 ease-in-out group-hover:brightness-50" />
            <Image src={eye} alt="eye" className="absolute inset-0 w-10 h-10 mx-auto my-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        <div className="relative group h-104 w-full overflow-hidden rounded-md">
          <Link href="https://digital-marketing-agency-webiste.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src={project3} alt="Project 3" className="object-cover h-full w-full transition duration-300 ease-in-out group-hover:brightness-50" />
            <Image src={eye} alt="eye" className="absolute inset-0 w-10 h-10 mx-auto my-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        <div className="relative group h-104 w-full overflow-hidden rounded-md">
          <Link href="https://male-fashion-s6wl.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src={project4} alt="Project 4" className="object-cover h-full w-full transition duration-300 ease-in-out group-hover:brightness-50" />
            <Image src={eye} alt="eye" className="absolute inset-0 w-10 h-10 mx-auto my-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        <div className="relative group h-104 w-full overflow-hidden rounded-md">
          <Link href="https://groco-blush.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src={project5} alt="Project 5" className="object-cover h-full w-full transition duration-300 ease-in-out group-hover:brightness-50" />
            <Image src={eye} alt="eye" className="absolute inset-0 w-10 h-10 mx-auto my-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        <div className="relative group h-104 w-full overflow-hidden rounded-md">
          <Link href="https://grilli-gules.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src={project6} alt="Project 6" className="object-cover h-full w-full transition duration-300 ease-in-out group-hover:brightness-50" />
            <Image src={eye} alt="eye" className="absolute inset-0 w-10 h-10 mx-auto my-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        <div className="relative group h-104 w-full overflow-hidden rounded-md">
          <Link href="https://amazon-clone-mu-livid.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src={project7} alt="Project 7" className="object-cover h-full w-full transition duration-300 ease-in-out group-hover:brightness-50" />
            <Image src={eye} alt="eye" className="absolute inset-0 w-10 h-10 mx-auto my-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        <div className="relative group h-104 w-full overflow-hidden rounded-md">
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Image src={project8} alt="Project 8" className="object-cover h-full w-full transition duration-300 ease-in-out group-hover:brightness-50" />
            <Image src={eye} alt="eye" className="absolute inset-0 w-10 h-10 mx-auto my-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        <div className="relative group h-104 w-full overflow-hidden rounded-md">
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Image src={project9} alt="Project 9" className="object-cover h-full w-full transition duration-300 ease-in-out group-hover:brightness-50" />
            <Image src={eye} alt="eye" className="absolute inset-0 w-10 h-10 mx-auto my-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
