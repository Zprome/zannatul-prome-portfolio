import {
  Monitor,
  Server,
  Code2,
  Database,
  BarChart3,
  Brain,
  Cloud,
  Wrench,
  Users,
} from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: [
        "HTML",
        "CSS",
        "SCSS",
        "Bootstrap",
        "Tailwind",
        "JavaScript",
        "React",
        "Alpine.js",
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        "PHP",
        "Laravel",
        "TALL Stack",
        "Spring Boot",
        ".NET (EF)",
        "NestJS",
      ],
    },
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "C#", "JavaScript"],
    },
    {
      title: "Databases & ORMs",
      icon: Database,
      skills: ["SQL", "MySQL", "Hibernate", "Entity Framework"],
    },
    {
      title: "Data Analytics & BI",
      icon: BarChart3,
      skills: ["Qlik Sense", "Power BI", "Pandas", "NumPy", "Data Visualization"],
    },
    {
      title: "AI & ML",
      icon: Brain,
      skills: ["TensorFlow", "Keras", "OpenCV"],
    },
    {
      title: "Systems & Cloud",
      icon: Cloud,
      skills: ["Linux", "Windows Server", "Azure", "Cisco Packet Tracer"],
    },
    {
      title: "Tools & Practices",
      icon: Wrench,
      skills: ["Git", "SCRUM", "Figma", "StarUML", "Version Control"],
    },
  ];

  const softSkills = [
    "Teamwork",
    "Problem Solving",
    "Communication",
    "Adaptability",
    "Time Management",
    "Leadership",
  ];

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:px-10"
    >
      {/* HEADER */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C6A9B6]">
          What I Work With
        </p>
        <h2 className="text-3xl font-bold text-[#F3EDEE] sm:text-4xl">
          Skills
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#D8C7CE] sm:text-base">
          A blend of technical, analytical, and collaborative skills that support
          thoughtful software development and digital problem-solving.
        </p>
      </div>

      {/* SKILL CARDS */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.title}
              className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8B2E4B]/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(139,46,75,0.25)]"
            >
              {/* WINE RED GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,46,75,0.18),transparent_40%)] opacity-70" />

              <div className="relative z-10">
                {/* ICON + TITLE */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#8B2E4B]/40 bg-[#8B2E4B]/20 text-[#F3EDEE] transition duration-300 group-hover:bg-[#8B2E4B]/30">
                    <Icon size={18} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#F3EDEE]">
                    {category.title}
                  </h3>
                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#C6A9B6]/20 bg-[#C6A9B6]/10 px-3.5 py-1.5 text-xs font-medium text-[#F3EDEE] transition duration-300 group-hover:border-[#8B2E4B]/40 group-hover:bg-[#8B2E4B]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SOFT SKILLS */}
      <div className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-md">
        <div className="mb-5 flex items-center justify-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#8B2E4B]/40 bg-[#8B2E4B]/20 text-[#F3EDEE] transition duration-300 hover:bg-[#8B2E4B]/30">
            <Users size={18} />
          </div>

          <h3 className="text-lg font-semibold text-[#F3EDEE]">
            Soft Skills
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#C6A9B6]/20 bg-[#C6A9B6]/10 px-4 py-2 text-sm text-[#F3EDEE] transition duration-300 hover:border-[#8B2E4B]/40 hover:bg-[#8B2E4B]/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;