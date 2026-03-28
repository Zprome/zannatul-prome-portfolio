function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#3A1823] bg-[#12070B]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8E2C4A] text-sm font-semibold text-[#F3EDEE]">
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

        <div className="hidden gap-8 text-sm text-[#C9B7BD] md:flex">
          <a href="#" className="transition hover:text-white">
            Home
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;