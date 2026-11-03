import {
  Mail,
  ExternalLink,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "CineMatch",
    subtitle: "SVD Collaborative Filtering Engine",
    description:
      "Decomposes a 610-user by 9,742-movie rating matrix into 100 latent dimensions to predict ratings for unseen films. Pre-computed static JSON architecture eliminates the need for a Python backend. 60.4% Precision@10, 65.0% Recall@10.",
    tags: ["Python", "scikit-learn", "Next.js", "TypeScript", "Recharts"],
    href: "https://movie-recomendation-system.vercel.app",
    github: "https://github.com/CeeJay1241/Movie-Recomendation-System",
  },
  {
    title: "Applied AI System",
    subtitle: "RAG + Agentic Tool-Use Pipeline",
    description:
      "Production-style AI system integrating a retrieval-augmented generation pipeline, an agentic tool-use loop, a custom scheduler, and a BCS classifier. Handles pet care scheduling powered by Gemini AI.",
    tags: ["Python", "RAG", "Gemini API", "Agentic AI", "Streamlit"],
    github: "https://github.com/CeeJay1241/applied-ai-system-project",
  },
  {
    title: "House Price Prediction",
    subtitle: "End-to-End ML Pipeline",
    description:
      "Sourced and cleaned a real dataset, engineered features, and tested multiple models. Automated the data cleaning pipeline so new datasets feed into training without preprocessing by hand. Manual hyperparameter tuning reduced RMSE 18% from baseline.",
    tags: ["Python", "Random Forest", "Gradient Boosting", "Flask"],
    github: "https://github.com/CeeJay1241/House_Price_Prediction",
  },
  {
    title: "MedLens",
    subtitle: "Clinical PDF Data Extraction",
    description:
      "Hackathon prototype extracting clinical data from PDFs with structured JSON output and a text-to-speech pipeline. Applied computer vision and NLP to help users interpret medical documents.",
    tags: ["JavaScript", "NLP", "Computer Vision", "TTS"],
    github: "https://github.com/CeeJay1241/Medlens-Bisonhacks",
  },
  {
    title: "Django Blog",
    subtitle: "Full-Stack Blog Platform",
    description:
      "Personal blog platform with post creation and editing, saved posts, image uploads, user authentication, and responsive templates.",
    tags: ["Python", "Django", "PostgreSQL", "HTML/CSS"],
    github: "https://github.com/CeeJay1241/Django-Blog",
  },
];

const EXPERIENCE = [
  {
    role: "Software Developer Intern",
    company: "Orchid House",
    period: "Jun 2026 – Nov 2026",
    description:
      "Building the backend for a multi-vendor food coop marketplace. Next.js, TypeScript, PostgreSQL, Prisma, Clerk auth, Railway, Stripe Connect.",
  },
  {
    role: "AI Training Contractor",
    company: "Handshake AI",
    period: "Feb 2026 – Present",
    description:
      "Grading AI coding-assistant responses against communication rubrics. Leading calibration reviews of peer graders.",
  },
  {
    role: "Tech Fellow (CS1)",
    company: "Howard University",
    period: "2025 – 2026",
    description:
      "Supported introductory CS students through office hours, code reviews, and lab assistance.",
  },
  {
    role: "Summer Bridge Tutor",
    company: "Howard CEA",
    period: "Summer 2026",
    description:
      "Tutored incoming engineering students in Pre-Calculus and Calculus 1 during the residential bridge program.",
  },
];

const SKILLS = {
  Languages: ["Python", "JavaScript", "TypeScript", "C", "Java", "SQL"],
  "Frameworks & Libraries": [
    "Next.js",
    "React",
    "Django",
    "Flask",
    "FastAPI",
    "React Native",
    "Tailwind CSS",
  ],
  "ML & Data": [
    "scikit-learn",
    "SVD",
    "Random Forest",
    "RAG Pipelines",
    "Agentic AI",
  ],
  Infrastructure: [
    "PostgreSQL",
    "Prisma",
    "Supabase",
    "Railway",
    "Vercel",
    "Git",
  ],
};

function SectionNumber({ n }: { n: string }) {
  return (
    <span className="font-mono text-[var(--section-number)] text-7xl md:text-8xl font-bold select-none leading-none">
      {n}
    </span>
  );
}

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      {/* Nav */}
      <nav className="flex items-center justify-between mb-24 md:mb-32">
        <span className="text-sm font-medium tracking-tight">CeeJay</span>
        <div className="flex items-center gap-6 text-sm text-[var(--muted)]">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[var(--foreground)] transition-colors hidden sm:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/CeeJay1241"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com/in/chijioke-alim"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="mb-28 md:mb-36">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          Chijioke Alim
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed mb-8">
          Computer Science student at Howard University. I build
          production-ready systems in applied AI, full-stack development, and
          machine learning. Turning research into software people actually use.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="#projects"
            className="bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white px-5 py-2.5 rounded-md font-medium transition-colors inline-flex items-center gap-2"
          >
            View projects <ChevronRight size={14} />
          </a>
          <a
            href="/Chijioke_Alim_Resume.pdf"
            target="_blank"
            className="border border-[var(--border)] hover:border-[var(--muted)] text-[var(--muted)] hover:text-[var(--foreground)] px-5 py-2.5 rounded-md font-medium transition-colors"
          >
            Resume
          </a>
        </div>
      </header>

      {/* Projects */}
      <section id="projects" className="mb-28 md:mb-36 scroll-mt-20">
        <div className="flex items-end gap-6 mb-12">
          <SectionNumber n="01" />
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
            <p className="text-sm text-[var(--muted)] mt-1">
              Selected work from coursework, hackathons, and independent builds.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="group border border-[var(--border)] rounded-lg p-6 hover:border-[var(--muted)] transition-colors bg-[var(--card)] hover:bg-[var(--card-hover)]"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold inline-flex items-center gap-2">
                    {p.title}
                    <span className="text-xs font-normal text-[var(--muted)] font-mono">
                      {p.subtitle}
                    </span>
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-[var(--muted)] shrink-0 ml-4">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--foreground)] transition-colors"
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--foreground)] transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-28 md:mb-36 scroll-mt-20">
        <div className="flex items-end gap-6 mb-12">
          <SectionNumber n="02" />
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
            <p className="text-sm text-[var(--muted)] mt-1">
              Internships, teaching, and technical roles.
            </p>
          </div>
        </div>

        <div className="space-y-1">
          {EXPERIENCE.map((e) => (
            <div
              key={e.role + e.company}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-1 md:gap-8 py-5 border-b border-[var(--border)] last:border-0"
            >
              <div className="text-sm text-[var(--muted)] font-mono shrink-0">
                {e.period}
              </div>
              <div>
                <h3 className="font-medium">
                  {e.role}{" "}
                  <span className="text-[var(--muted)] font-normal">
                    · {e.company}
                  </span>
                </h3>
                <p className="text-sm text-[var(--muted)] mt-1.5 leading-relaxed">
                  {e.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-28 md:mb-36 scroll-mt-20">
        <div className="flex items-end gap-6 mb-12">
          <SectionNumber n="03" />
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
            <p className="text-sm text-[var(--muted)] mt-1">
              Languages, frameworks, and tools I work with.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs text-[var(--muted)] uppercase tracking-widest mb-4 font-mono">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1.5 rounded-md bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-28 md:mb-36">
        <div className="flex items-end gap-6 mb-12">
          <SectionNumber n="04" />
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Recognition</h2>
            <p className="text-sm text-[var(--muted)] mt-1">
              Competitions, awards, and academic standing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "PROPELU x Apple HBCU Innovation Challenge",
              detail:
                'Top 14 of 1,100 students. Presented at the Austin campus finals. Judges called it "the most futuristic idea presented."',
            },
            {
              title: "Eli and Edythe Broad Foundation Scholar",
              detail: "$20,000 unsolicited scholarship.",
            },
            {
              title: "Dean's List",
              detail:
                "Fall 2025 (4.00 GPA), Spring 2026 (3.80 GPA). Cumulative 3.90.",
            },
            {
              title: "Nigerian Mathematical Olympiad",
              detail:
                "Top performer at Air Force Secondary School Ikeja in the national competition.",
            },
          ].map((a) => (
            <div
              key={a.title}
              className="border border-[var(--border)] rounded-lg p-5 bg-[var(--card)]"
            >
              <h3 className="font-medium text-sm mb-1.5">{a.title}</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                {a.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mb-16 scroll-mt-20">
        <div className="flex items-end gap-6 mb-12">
          <SectionNumber n="05" />
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
            <p className="text-sm text-[var(--muted)] mt-1">
              Open to internship opportunities and collaborations.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:alimceejay@gmail.com"
            className="inline-flex items-center gap-2 border border-[var(--border)] hover:border-[var(--muted)] rounded-md px-5 py-3 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <Mail size={16} /> alimceejay@gmail.com
          </a>
          <a
            href="https://github.com/CeeJay1241"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] hover:border-[var(--muted)] rounded-md px-5 py-3 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <GithubIcon size={16} /> GitHub
            <ArrowUpRight size={12} />
          </a>
          <a
            href="https://linkedin.com/in/chijioke-alim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] hover:border-[var(--muted)] rounded-md px-5 py-3 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <LinkedinIcon size={16} /> LinkedIn
            <ArrowUpRight size={12} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] pt-8 pb-4 text-xs text-[var(--muted)] flex items-center justify-between">
        <span>Chijioke Alim · {new Date().getFullYear()}</span>
        <span className="font-mono">Howard University</span>
      </footer>
    </div>
  );
}
