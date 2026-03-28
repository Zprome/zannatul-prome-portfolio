import profilePhoto from "../assets/profile.jpeg";

function About() {
  return (
    <section
      id="about"
      className="relative border-t border-[#3A1823] px-6 py-24 sm:px-10"
    >
      

      <div className="relative mx-auto max-w-6xl">
        {/* Section intro */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#9F8B92]">
            About Me
          </p>

          <h2 className="mt-4 font-['Outfit'] text-2xl font-semibold leading-snug text-[#F3EDEE] sm:text-3xl md:text-4xl">
            A little more about who I am and where I’m heading
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-7 text-[#BFA9B0]">
            I enjoy building clean digital experiences, learning through real
            projects, and growing into a developer who can create thoughtful
            and practical software.
          </p>
        </div>

        {/* Main card */}
        <div className="about-card mt-14 grid items-center gap-8 rounded-[28px] border border-[#3A1823] bg-[#14090F]/70 p-6 md:grid-cols-[260px_1fr] md:p-8 max-w-5xl mx-auto">
          {/* Image */}
          <div className="flex items-start justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[28px] bg-[#8E2C4A]/25 blur-2xl opacity-80" />

              <img
                src={profilePhoto}
                alt="Zannatul Naima Prome"
                className="relative h-64 w-52 rounded-[28px] border border-[#4A2330] object-cover shadow-xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="about-content max-w-3xl">
            <p className="text-base sm:text-lg leading-7 text-[#D8C8CD]">
              I’m a student with a growing passion for software engineering,
              especially frontend development and building interfaces that feel
              clean, responsive, and intuitive. I enjoy turning ideas into real
              projects and using each build as a way to sharpen both my design
              sense and technical skills.
            </p>

            <p className="mt-4 text-base sm:text-lg leading-7 text-[#D8C8CD]">
              I am currently studying Artificial Intelligence at Thomas More
              Campus Geel. After completing my graduation, my primary goal is to
              gain hands-on experience, deepen my technical expertise, and
              understand large-scale software development practices in a
              professional environment.
            </p>

            <p className="mt-4 text-base sm:text-lg leading-7 text-[#D8C8CD]">
              What excites me most is the balance between creativity and logic
              in software development. I’m especially interested in work that
              combines thoughtful design, problem solving, and practical
              development to create meaningful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;