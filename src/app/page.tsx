import { GitHubIcon, LinkedInIcon, XIcon, MediumIcon, MailIcon } from "./icons";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lucaperret/",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/lucaperret",
    icon: GitHubIcon,
  },
  {
    label: "X",
    href: "https://x.com/lucaperret",
    icon: XIcon,
  },
  {
    label: "Medium",
    href: "https://medium.com/@lucaperret",
    icon: MediumIcon,
  },
  {
    label: "Email",
    href: "mailto:perret.luca@gmail.com",
    icon: MailIcon,
  },
];

const PROJECTS = [
  {
    name: "tidal-cli",
    description: "Command-line tool for Tidal music streaming — search, play, and control your music from the terminal",
    href: "https://tidal-cli.lucaperret.ch/",
    links: [
      { label: "GitHub", href: "https://github.com/lucaperret/tidal-cli" },
    ],
  },
  {
    name: "agent-skills",
    description: "Give AI coding agents superpowers beyond code — macOS native apps, MCP server deployment, and AI connector publishing",
    href: "https://github.com/lucaperret/agent-skills",
  },
  {
    name: "Momentape",
    description: "Web3 platform connecting artists and fans — 2x 1st prize at ETHGlobal Web3Jam",
    href: "https://ethglobal.com/showcase/momentape-e0gce",
    links: [
      { label: "My tweet", href: "https://x.com/lucaperret/status/1463630794623270913" },
      { label: "Livepeer tweet", href: "https://x.com/Livepeer/status/1463568282460561412" },
    ],
  },
  {
    name: "Bibulus",
    description: "Find the nearest drinking fountain in Switzerland",
    href: "https://bibulus.ch/",
    links: [
      { label: "20 Minutes", href: "https://www.20min.ch/fr/story/l-app-pour-vous-desalterer-196971560259" },
    ],
  },
  {
    name: "sylviarhud.com",
    description: "Portfolio for painter & sculptor Sylvia Rhud — I manage her art career and built her website",
    href: "https://sylviarhud.com/",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/sylviarhud/" },
      { label: "Singulart", href: "https://www.singulart.com/fr/artiste/sylvia-rhud-14407" },
    ],
  },
  {
    name: "gaspard",
    description: "Lightweight DOM helpers without dependency",
    href: "https://github.com/lucaperret/gaspard",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24 max-w-2xl mx-auto">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Luca Perret
        </h1>
        <p className="text-lg text-muted leading-relaxed mb-6">
          Builder at the intersection of technology, knowledge management, and digital transformation.
          <br />
          Currently driving digital capability transformation at{" "}
          <span className="text-foreground font-medium">Nespresso</span> in Vevey, Switzerland.
        </p>
        <div className="flex gap-4">
          {LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-foreground transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mb-16">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
          About
        </h2>
        <div className="space-y-4 text-foreground/85 leading-relaxed">
          <p>
            I spent a decade as a full-stack developer — building eCommerce platforms,
            open source tools, and shipping side projects. Then I moved into digital
            transformation, where I bring a product mindset to how organizations learn,
            innovate, and share knowledge.
          </p>
          <p>
            At Nespresso, I&apos;ve worn several hats over 7 years — from frontend
            innovation and eCommerce personalization to data strategy and now knowledge
            management. Today I help experts co-create learning content, structure
            communities of practice, and coach internal venture teams. I believe the real
            advantage in the AI era won&apos;t be access to information — it will be our
            ability to learn together and keep knowledge alive.
          </p>
          <p>
            Outside work, I practice Wing Chun, tinker with AI agents, and manage my
            mother&apos;s art career — she&apos;s an exhibited sculptor whose work has
            shown at the Beijing Biennale.
          </p>
        </div>
      </section>

      {/* Now */}
      <section className="mb-16">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
          Now
        </h2>
        <ul className="space-y-2 text-foreground/85">
          <li className="flex gap-2">
            <span className="text-muted select-none">-</span>
            Digital capability transformation at Nespresso (7 years and counting)
          </li>
          <li className="flex gap-2">
            <span className="text-muted select-none">-</span>
            Building AI agent skills and workflows with Claude Code
          </li>
          <li className="flex gap-2">
            <span className="text-muted select-none">-</span>
            Certified Front End Innovation Coach (Strategyzer)
          </li>
          <li className="flex gap-2">
            <span className="text-muted select-none">-</span>
            Writing about knowledge management, AI, and the builder mindset
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted mb-4">
          Projects
        </h2>
        <div className="grid gap-4">
          {PROJECTS.map(({ name, description, href, links }) => (
            <div
              key={name}
              className="border border-border rounded-lg p-4 hover:border-foreground/20 transition-colors"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <h3 className="font-medium mb-1">{name}</h3>
                <p className="text-sm text-muted">{description}</p>
              </a>
              {links && (
                <div className="flex gap-3 mt-2">
                  {links.map(({ label, href: linkHref }) => (
                    <a
                      key={label}
                      href={linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted hover:text-foreground transition-colors underline underline-offset-2"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t border-border">
        <p className="text-sm text-muted">
          Vevey, Switzerland
        </p>
      </footer>
    </main>
  );
}
