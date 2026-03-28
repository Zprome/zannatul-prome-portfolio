import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-16 pt-28 sm:px-10 lg:grid-cols-2">
        <div className="max-w-2xl">
          <p className="hero-badge mb-5 text-sm uppercase tracking-[0.35em] text-[#9F8B92]">
            Personal Portfolio
          </p>

          <h1 className="font-semibold leading-tight">
            <span className="hero-line-1 block font-['Outfit'] text-lg sm:text-xl md:text-4xl text-[#D4C3C8]">
                Hi, I’m
            </span>

            <span className="hero-line-2 hero-name mt-2 block font-['Outfit'] text-4xl sm:text-5xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Zannatul Naima Prome
            </span>
         </h1>

          <p className="hero-text-1 mt-5 max-w-xl font-['Inter'] text-base font-medium text-[#E6D7DB] sm:text-lg">
            CS student with a strong interest in software engineering and
            frontend development.
          </p>

          <p className="hero-text-2 mt-6 max-w-xl font-['Inter'] text-base leading-8 text-[#BFA9B0]">
            I enjoy building clean, responsive, and user-friendly web
            interfaces. I’m especially interested in software-focused work that
            combines thoughtful design, problem solving, and practical
            development skills.
          </p>

          <div className="hero-buttons mt-8 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full bg-[#8E2C4A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#B13E63]"
            >
              About Me
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#3A1823] bg-[#1B0D13]/60 px-6 py-3 text-sm font-medium text-[#F3EDEE] transition hover:bg-[#241018]"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="hidden justify-center lg:flex">
          <div className="hero-illustration-wrapper">
            <img
              src={heroImage}
              alt="Developer Illustration"
              className="hero-illustration w-[420px] opacity-95 brightness-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;