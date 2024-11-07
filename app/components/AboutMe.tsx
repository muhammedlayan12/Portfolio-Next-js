import Image from "next/image";
import aboutimg from "../images/aboutimg.png";

function AboutMe() {
  return (
    <div>
      <section className="flex flex-col lg:flex-row justify-center gap-[5vmin] xl:gap-[15vmin] items-center py-[20vmin] px-6">
        <Image src={aboutimg} alt="" className="sm:w-[50vmin] h-auto"/>
        <div className="font-poppins text-center lg:text-start flex justify-center flex-col gap-5">
          <h2 className="text-[1.1em] sm:text-[1.6em] xl:text-[2em] tracking-wide font-bold">
            Need a Creative<br/> Front-end Solution<br/> I Help You
          </h2>
          <p className="text-[#858585] xl:text-[1em] md:text-[0.9em] sm:text-[0.8em] text-[0.65em]">
            🚀<b> Transform Your Business with & Front-end Solutions! </b> 🌟<br/> 
            I am a dedicated Front-End Developer passionate about leveraging modern<br/> 
            technologies like Next.js to deliver exceptional web experiences. With a strong foundation<br/> 
            in WordPress development, I focus on enhancing SEO, UI, and UX to drive unbeatable results for my clients.<br/>
            My goal is to help businesses grow by creating visually appealing and user-friendly websites that stand out in<br/> 
            today&apos;s digital landscape. 🌐<b> Get a Free Consultation Now! </b> 👨‍💻 Let&apos;s work together to elevate your online presence!
          </p>

          <div className="flex gap-8 lg:text-start text-center justify-center lg:justify-start">
            <a href="tel:+923128854302" className="py-2 text-[0.75em] sm:text-[1em] uppercase tracking-wider font-semibold px-4 ha:px-8 bg-orange transition-all duration-300 hover:bg-transparent hover:border">Hire Me</a>
            <a href="" download className="py-2 px-4 ha:px-8 text-[0.75em] sm:text-[1em] uppercase tracking-wider border font-semibold bg-transparent transition-all duration-300 hover:bg-orange hover:border-none">Download CV</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
