function Footer() {
  return (
    <div>
        <footer className="flex flex-col md:flex-row justify-evenly py-4 px-6 bg-lightGrey items-center text-center">
            <div className="logo">
            <div className="text-[1.5em] md:text-[1.9em] font-saira"><a href="#">Layan<span className="text-scarlet text-4xl"> .</span></a></div>
            </div>
            
            <div className="md:text-[0.9em] text-[0.8em] tracking-wide text-[#838383]">
                2024 <span className="text-orange">Muhammad Layan</span>. All Right Reserved
            </div>
        </footer>
    </div>
  )
}

export default Footer;