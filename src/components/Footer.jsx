function Footer() {
  return (
    <footer className="border-t border-[#3A1823] bg-[#090306] px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        
        {/* Left */}
        <div>
          <h3 className="font-['Outfit'] text-lg font-semibold text-[#F3EDEE]">
            Zannatul Naima Prome
          </h3>
          
          <p className="mt-1 text-sm text-[#9F8B92]">
            Built with React and Tailwind CSS
          </p>
          
        </div>

        {/* Right */}
        <div className="flex gap-5 text-sm text-[#C9B7BD]">
          <a href="#" className="transition hover:text-[#D98AA2]">
            GitHub
          </a>
          <a href="#" className="transition hover:text-[#D98AA2]">
            LinkedIn
          </a>
          <a href="#" className="transition hover:text-[#D98AA2]">
            Email
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-6 max-w-6xl border-t border-[#241018] pt-4 text-center text-xs text-[#7F6A72]">
        © 2026 Zannatul Naima Prome. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;