"use client";

import WorkGallery from "./components/WorkGallery";
import ScrollReveal from "./components/ScrollReveal";
import { useLanguage } from "./components/LanguageProvider";
import CvDownloadButton from "./components/CvDownloadButton";

const translations = {
  it: {
    nav: {
      work: "Lavori",
      caseStudies: "Case Study",
      about: "Chi sono",
      contact: "Contatti",
      cv: "Scarica CV",
    },

    hero: {
      role: "Digital Marketing & E-commerce Specialist",
      line1: "La crescita si costruisce",
      line2Before: "un passo alla ",
      line2Accent: "volta",
      line2After: ", non per caso.",
      description:
        "Costruisco sistemi di crescita digitale attraverso contenuti, e-commerce e CRM, pensati per generare risultati anche dopo il lancio.",
      work: "Scopri i miei lavori",
      contact: "Contattami",
      location: "Andria, Puglia",
      availability: "Disponibile per collaborazioni e nuove opportunità",
    },

    numbers: {
      line1: "Numeri, non",
      line2: "aggettivi.",
      organic: "Crescita delle vendite organiche",
      repeat: "Tasso di riacquisto",
      email: "Fatturato attribuito all'email marketing",
      subscribers: "Iscritti in 30 giorni",
    },

    cases: {
      line1: "Brand che ho costruito,",
      line2: "fatto crescere e riposizionato.",
      selected: "Case study selezionati",
      g3m: "Crescita, e-commerce & retention",
      emar: "Presenza digitale costruita da zero",
      focus: "Posizionamento, brand identity & lancio",
      view: "Scopri il progetto →",
    },

    work: {
      label: "Lavori selezionati",
      line1: "La strategia funziona meglio",
      line2Before: "quando puoi ",
      line2Accent: "vederla.",
    },

    about: {
      label: "Chi sono",
      line1: "Strategia che diventa",
      line2: "azione.",
      paragraph1:
        "Lavoro tra content, digital marketing, e-commerce e CRM, unendo visione strategica e operatività.",
      paragraph2:
        "Dal posizionamento ai sistemi di contenuto, dai customer journey ai flussi email e all'ottimizzazione e-commerce, costruisco strategie orientate a una crescita misurabile.",
      quote: "“Tratto ogni progetto come se fosse il mio brand.”",
      strategyExecution: "Strategia × Esecuzione",
      skills: [
        "Strategia",
        "Content",
        "E-commerce",
        "CRM",
        "Brand Positioning",
      ],
    },

    contact: {
      line1: "Lavoriamo",
      line2: "insieme.",
      phone: "Telefono",
    },

    footer: {
      location: "Andria, Puglia",
    },
  },

  en: {
    nav: {
      work: "Work",
      caseStudies: "Case Studies",
      about: "About",
      contact: "Contact",
      cv: "Download CV",
    },

    hero: {
      role: "Digital Marketing & E-commerce Specialist",
      line1: "Growth built frame",
      line2Before: "by ",
      line2Accent: "frame",
      line2After: ", not by luck.",
      description:
        "I build digital growth through content, e-commerce and CRM — systems designed to keep working after launch.",
      work: "View my work",
      contact: "Contact me",
      location: "Andria, Puglia, Italy",
      availability: "Available for collaborations and new opportunities",
    },

    numbers: {
      line1: "Numbers, not",
      line2: "adjectives.",
      organic: "Organic sales growth",
      repeat: "Repeat purchase rate",
      email: "Email-attributed revenue",
      subscribers: "Subscribers in 30 days",
    },

    cases: {
      line1: "Brands I've built,",
      line2: "scaled and rewritten.",
      selected: "Selected case studies",
      g3m: "Growth, e-commerce & retention",
      emar: "Building digital from scratch",
      focus: "Positioning, brand identity & launch",
      view: "View project →",
    },

    work: {
      label: "Selected Work",
      line1: "Strategy is better",
      line2Before: "when you can ",
      line2Accent: "see it.",
    },

    about: {
      label: "About",
      line1: "A strategist who",
      line2: "executes.",
      paragraph1:
        "I work across content, digital marketing, e-commerce and CRM, combining strategy with hands-on execution.",
      paragraph2:
        "From positioning and content systems to customer journeys, email flows and e-commerce optimisation, I build systems designed to produce measurable growth.",
      quote: "“I treat every project like it's my own brand.”",
      strategyExecution: "Strategy × Execution",
      skills: [
        "Strategy",
        "Content",
        "E-commerce",
        "CRM",
        "Brand Positioning",
      ],
    },

    contact: {
      line1: "Let's work",
      line2: "together.",
      phone: "Phone",
    },

    footer: {
      location: "Andria, Puglia, Italy",
    },
  },
};

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen bg-[#08100d] text-[#e8e5dc]">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08100d]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-5">
          <a
            href="#"
            className="shrink-0 font-serif text-xl italic tracking-wide"
          >
            Antonio Lorusso
          </a>

          <nav className="hidden gap-8 text-sm text-white/55 md:flex">
            <a href="#work" className="transition hover:text-white">
              {t.nav.work}
            </a>

            <a
              href="#case-studies"
              className="transition hover:text-white"
            >
              {t.nav.caseStudies}
            </a>

            <a href="#about" className="transition hover:text-white">
              {t.nav.about}
            </a>

            <a href="#contact" className="transition hover:text-white">
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            {/* UNICO TOGGLE GLOBALE DEL SITO */}
            <div
              className="flex items-center border border-white/15 p-1"
              aria-label="Seleziona lingua"
            >
              <button
                type="button"
                onClick={() => setLanguage("it")}
                aria-pressed={language === "it"}
                className={`touch-manipulation px-2 py-1.5 text-[11px] font-medium transition sm:px-3 sm:text-xs ${
                  language === "it"
                    ? "bg-[#e8e5dc] text-[#08100d]"
                    : "text-white/45 hover:text-white"
                }`}
              >
                IT
              </button>

              <button
                type="button"
                onClick={() => setLanguage("en")}
                aria-pressed={language === "en"}
                className={`touch-manipulation px-2 py-1.5 text-[11px] font-medium transition sm:px-3 sm:text-xs ${
                  language === "en"
                    ? "bg-[#e8e5dc] text-[#08100d]"
                    : "text-white/45 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <CvDownloadButton />
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="mx-auto flex min-h-[82vh] max-w-6xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <div className="hero-label mb-8 flex items-center gap-3 text-sm text-white/50">
            <span className="h-2 w-2 rounded-full bg-[#b86f45]" />
            <span>{t.hero.role}</span>
          </div>

          <h1 className="hero-title max-w-5xl font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
            {t.hero.line1}
            <br />
            {t.hero.line2Before}
            <span className="italic text-[#75968c]">
              {t.hero.line2Accent}
            </span>
            {t.hero.line2After}
          </h1>

          <p className="hero-description mt-8 max-w-2xl text-lg leading-8 text-white/55">
            {t.hero.description}
          </p>

          <div className="hero-actions mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              style={{
                backgroundColor: "#e8e5dc",
                color: "#08100d",
              }}
              className="portfolio-button px-6 py-3 text-sm font-medium transition hover:opacity-85"
            >
              {t.hero.work}
            </a>

            <a
              href="#contact"
              className="portfolio-button border border-white/15 px-6 py-3 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
            >
              {t.hero.contact}
            </a>
          </div>

          <div className="hero-meta mt-14 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/35">
            <span>{t.hero.location}</span>

            <span className="text-[#b86f45]">
              {t.hero.availability}
            </span>
          </div>
        </div>
      </section>

      {/* ================= NUMBERS ================= */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <ScrollReveal>
            <div className="mb-14">
              <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                {t.numbers.line1}
                <br />
                {t.numbers.line2}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid border border-white/10 md:grid-cols-4">
            <ScrollReveal delay={0}>
              <div className="h-full border-b border-white/10 p-8 md:border-b-0 md:border-r">
                <div className="font-serif text-5xl">+75%</div>
                <p className="mt-4 text-sm text-white/45">
                  {t.numbers.organic}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="h-full border-b border-white/10 p-8 md:border-b-0 md:border-r">
                <div className="font-serif text-5xl">+50%</div>
                <p className="mt-4 text-sm text-white/45">
                  {t.numbers.repeat}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="h-full border-b border-white/10 p-8 md:border-b-0 md:border-r">
                <div className="font-serif text-5xl">+22%</div>
                <p className="mt-4 text-sm text-white/45">
                  {t.numbers.email}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="h-full p-8">
                <div className="font-serif text-5xl">650</div>
                <p className="mt-4 text-sm text-white/45">
                  {t.numbers.subscribers}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section id="case-studies" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <ScrollReveal>
            <div className="mb-14 flex items-end justify-between gap-8">
              <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                {t.cases.line1}
                <br />
                {t.cases.line2}
              </h2>

              <p className="hidden font-serif text-lg italic text-white/35 md:block">
                {t.cases.selected}
              </p>
            </div>
          </ScrollReveal>

          <div className="border-t border-white/10">
            <ScrollReveal delay={0}>
              <a
                href="/case-studies/g3m"
                className="group case-row grid gap-4 border-b border-white/10 py-8 transition md:grid-cols-[90px_1fr_1.4fr_auto] md:items-center"
              >
                <span className="font-serif italic text-white/35">
                  00:01
                </span>

                <span className="font-serif text-3xl transition group-hover:translate-x-1">
                  G3M
                </span>

                <span className="text-sm text-white/50">
                  {t.cases.g3m}
                </span>

                <span className="text-sm text-[#75968c] transition group-hover:translate-x-1">
                  {t.cases.view}
                </span>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <a
                href="/case-studies/emar"
                className="group case-row grid gap-4 border-b border-white/10 py-8 transition md:grid-cols-[90px_1fr_1.4fr_auto] md:items-center"
              >
                <span className="font-serif italic text-white/35">
                  00:02
                </span>

                <span className="font-serif text-3xl transition group-hover:translate-x-1">
                  Emar
                </span>

                <span className="text-sm text-white/50">
                  {t.cases.emar}
                </span>

                <span className="text-sm text-[#75968c] transition group-hover:translate-x-1">
                  {t.cases.view}
                </span>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <a
                href="/case-studies/focus-ottica"
                className="group case-row grid gap-4 border-b border-white/10 py-8 transition md:grid-cols-[90px_1fr_1.4fr_auto] md:items-center"
              >
                <span className="font-serif italic text-white/35">
                  00:03
                </span>

                <span className="font-serif text-3xl transition group-hover:translate-x-1">
                  Focus Ottica
                </span>

                <span className="text-sm text-white/50">
                  {t.cases.focus}
                </span>

                <span className="text-sm text-[#75968c] transition group-hover:translate-x-1">
                  {t.cases.view}
                </span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= SELECTED WORK ================= */}
      <section id="work" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <ScrollReveal>
            <div className="mb-14">
              <p className="mb-5 text-sm text-white/35">
                {t.work.label}
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                {t.work.line1}
                <br />
                {t.work.line2Before}
                <span className="italic text-[#75968c]">
                  {t.work.line2Accent}
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <WorkGallery />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-2 md:items-center">
          <ScrollReveal>
            <div className="group relative min-h-[560px] overflow-hidden border border-white/10 bg-[#0b1410] md:min-h-[680px]">
              <img
                src="/media/about/antonio-lorusso.jpg"
                alt="Antonio Lorusso"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08100d]/65 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                    Digital Marketing
                  </p>

                  <p className="mt-2 font-serif text-2xl text-white">
                    Antonio Lorusso
                  </p>
                </div>

                <span className="font-serif text-sm italic text-white/40">
                  {t.about.strategyExecution}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div>
              <p className="mb-5 text-sm text-white/35">
                {t.about.label}
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                {t.about.line1}
                <br />
                <span className="italic text-[#75968c]">
                  {t.about.line2}
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/50">
                {t.about.paragraph1}
              </p>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/50">
                {t.about.paragraph2}
              </p>

              <div className="mt-10 border-l border-[#75968c]/50 pl-6">
                <p className="font-serif text-xl italic leading-8 text-[#a9c2ba]">
                  {t.about.quote}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {t.about.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 px-4 py-2 text-xs text-white/45"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <ScrollReveal>
            <h2 className="font-serif text-6xl italic leading-tight md:text-8xl">
              {t.contact.line1}
              <br />
              {t.contact.line2}
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <ScrollReveal delay={80}>
              <a
                href="mailto:antoniolorusso218@gmail.com"
                className="work-card block h-full border border-white/10 p-6 transition hover:border-white/30"
              >
                <div className="text-sm text-white/35">Email</div>

                <div className="mt-3 break-all text-lg">
                  antoniolorusso218@gmail.com
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <a
                href="tel:+393317204567"
                className="work-card block h-full border border-white/10 p-6 transition hover:border-white/30"
              >
                <div className="text-sm text-white/35">
                  {t.contact.phone}
                </div>

                <div className="mt-3 text-lg">
                  +39 331 720 4567
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <a
                href="https://www.linkedin.com/in/antonio-lorusso-3b96a9279/"
                target="_blank"
                rel="noreferrer"
                className="work-card block h-full border border-white/10 p-6 transition hover:border-white/30"
              >
                <div className="text-sm text-white/35">LinkedIn</div>

                <div className="mt-3 text-lg">
                  linkedin.com/in/antonio-lorusso
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-white/30 md:flex-row md:items-center md:justify-between">
          <span>Antonio Lorusso © 2026</span>
          <span>{t.footer.location}</span>
        </div>
      </footer>
    </main>
  );
}