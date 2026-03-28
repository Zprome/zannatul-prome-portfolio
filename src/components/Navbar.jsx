function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#3A1823] bg-[#12070B]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        
        {/* LOGO */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8B2E4B] text-sm font-semibold text-[#F3EDEE]">
            ZN
          </div>

          <div>
            <p className="text-sm font-semibold text-[#F3EDEE]">
              Zannatul Naima Prome
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9B7BD]">
              Portfolio
            </p>
          </div>
        </a>

        {/* NAV LINKS */}
        <div className="hidden items-center gap-8 text-sm text-[#C9B7BD] md:flex">
          
          {[
            { name: "Home", href: "#" },
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Projects", href: "#projects" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative transition hover:text-white"
            >
              {item.name}

              {/* underline effect */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#8B2E4B] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="rounded-full border border-[#8B2E4B]/40 bg-[#8B2E4B]/20 px-5 py-2 text-sm font-medium text-[#F3EDEE] transition duration-300 hover:bg-[#8B2E4B]/30 hover:shadow-[0_0_20px_rgba(139,46,75,0.35)]"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;