"use client";

import { useState } from "react";
import { useLanguage } from "../../components/LanguageProvider";

type Language = "it" | "en";

type LocalizedText = {
  it: string;
  en: string;
};

type FolderName =
  | "Social"
  | "Video"
  | "Website"
  | "Brand Identity"
  | "Photography";

type MediaItem = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  type: "image" | "video" | "carousel";
  media?: string;
  slides?: string[];
  highlight?: LocalizedText;
};

type LocalizedItem = {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
};

const folders: {
  name: FolderName;
  number: string;
}[] = [
  { name: "Social", number: "01" },
  { name: "Video", number: "02" },
  { name: "Website", number: "03" },
  { name: "Brand Identity", number: "04" },
  { name: "Photography", number: "05" },
];

const folderLabels: Record<FolderName, LocalizedText> = {
  Social: {
    it: "Social",
    en: "Social",
  },
  Video: {
    it: "Video",
    en: "Video",
  },
  Website: {
    it: "Sito web",
    en: "Website",
  },
  "Brand Identity": {
    it: "Brand Identity",
    en: "Brand Identity",
  },
  Photography: {
    it: "Fotografia",
    en: "Photography",
  },
};

/* ========================================
   SOCIAL
======================================== */

const social01: MediaItem = {
  id: "focus-social-01",
  title: {
    it: "Love at First Sight",
    en: "Love at First Sight",
  },
  description: {
    it: "Creatività stagionale per San Valentino costruita sul gioco di parole 'amore a prima vista', collegando l'occasione al mondo eyewear e mantenendo il tono giovane, ironico e fashion-oriented di Focus Ottica.",
    en: "Seasonal Valentine's Day creative using a visual pun around love at first sight, connecting the occasion with eyewear while maintaining Focus Ottica's playful, fashion-oriented tone of voice.",
  },
  type: "image",
  media: "/media/work/focus-ottica/focus-social-01.jpg",
};

const social02: MediaItem = {
  id: "focus-social-02",
  title: {
    it: "Teaser pre-lancio",
    en: "Pre-Launch Teaser",
  },
  description: {
    it: "Creatività social pre-lancio progettata per generare curiosità prima dell'apertura, introducendo il linguaggio visivo di Focus prima di mostrare completamente l'esperienza del punto vendita.",
    en: "Pre-launch social creative designed to build anticipation before opening, introducing Focus Ottica's visual language before revealing the full retail experience.",
  },
  type: "image",
  media: "/media/work/focus-ottica/focus-social-02.jpg",
};

const social03: MediaItem = {
  id: "focus-social-03",
  title: {
    it: "Stop Looking, Start Seeing",
    en: "Stop Looking, Start Seeing",
  },
  description: {
    it: "Una delle prime comunicazioni del brand, creata per presentare Focus Ottica come una boutique eyewear giovane e orientata alla moda, distinguendola dal modello tradizionale di negozio di ottica.",
    en: "One of the brand's first social communications, created to introduce Focus Ottica as a younger, fashion-oriented eyewear boutique rather than another traditional optical store.",
  },
  type: "image",
  media: "/media/work/focus-ottica/focus-social-03.jpg",
  highlight: {
    it: "Posizionamento",
    en: "Positioning",
  },
};

/* ========================================
   VIDEO
======================================== */

const reel01: MediaItem = {
  id: "focus-reel-01",
  title: {
    it: "Teaser selezione brand",
    en: "Brand Selection Teaser",
  },
  description: {
    it: "Il primo Reel di Focus Ottica: un montaggio dinamico dei brand che sarebbero stati disponibili in negozio, utilizzando i loro universi visivi per rafforzare il posizionamento boutique prima dell'apertura.",
    en: "Focus Ottica's first Reel: a fast-paced montage introducing the brands that would soon be available in store, using their visual worlds to reinforce the boutique positioning before launch.",
  },
  type: "video",
  media: "/media/work/focus-ottica/focus-reel-01.mp4",
};

const reel02: MediaItem = {
  id: "focus-reel-02",
  title: {
    it: "Reveal del punto vendita",
    en: "Store Reveal",
  },
  description: {
    it: "Reel post-lancio dedicato alla presentazione della boutique fisica e della sua posizione, trasformando l'identità introdotta online in una destinazione reale per il pubblico locale.",
    en: "Post-launch Reel revealing the physical boutique and its location, turning the identity introduced online into a real retail destination for the local audience.",
  },
  type: "video",
  media: "/media/work/focus-ottica/focus-reel-02.mp4",
};

/* ========================================
   WEBSITE
======================================== */

const website01: MediaItem = {
  id: "focus-website-01",
  title: {
    it: "Sito vetrina",
    en: "Showcase Website",
  },
  description: {
    it: "Esperienza web creata per il lancio di Focus Ottica, traducendo il posizionamento boutique e l'identità visiva in una vetrina digitale coerente con il punto vendita fisico.",
    en: "Website experience created for Focus Ottica's launch, translating the boutique positioning and visual identity into a digital showcase consistent with the physical store.",
  },
  type: "video",
  media: "/media/work/focus-ottica/website/focus-website-01.mp4",
  highlight: {
    it: "Sito web / UX",
    en: "Website / UX",
  },
};

/* ========================================
   BRAND IDENTITY
======================================== */

const brand01: MediaItem = {
  id: "focus-brand-01",
  title: {
    it: "Identità visiva Focus Ottica",
    en: "Focus Ottica Visual Identity",
  },
  description: {
    it: "Logo e identità visiva sviluppati dopo aver definito il posizionamento e il pubblico di riferimento, utilizzando verde scuro e pesca per allontanare il brand dall'estetica tradizionale dei negozi di ottica.",
    en: "Logo and visual identity developed after defining the market positioning and target audience, using dark green and peach to move away from traditional optical-store aesthetics.",
  },
  type: "image",
  media: "/media/work/focus-ottica/brand/focus-logo-01.png",
  highlight: {
    it: "Brand Identity",
    en: "Brand Identity",
  },
};

/* ========================================
   PHOTOGRAPHY
======================================== */

const photography01: MediaItem = {
  id: "focus-photography-01",
  title: {
    it: "Shooting editoriale eyewear",
    en: "Eyewear Editorial Shooting",
  },
  description: {
    it: "Direzione creativa e produzione di uno shooting editoriale progettato per presentare gli occhiali Focus attraverso un linguaggio visivo fashion-first, distante dalla fotografia tradizionale del settore ottico.",
    en: "Creative direction and production of an editorial eyewear shoot designed to present Focus products through a fashion-first visual language rather than traditional optical retail photography.",
  },
  type: "carousel",
  highlight: {
    it: "Direzione creativa",
    en: "Creative Direction",
  },
  slides: [
    "/media/work/focus-ottica/photography/focus-shoot-01.webp",
    "/media/work/focus-ottica/photography/focus-shoot-02.webp",
    "/media/work/focus-ottica/photography/focus-shoot-03.webp",
    "/media/work/focus-ottica/photography/focus-shoot-04.webp",
    "/media/work/focus-ottica/photography/focus-shoot-05.webp",
  ],
};

/* ========================================
   FOLDER CONTENT
======================================== */

const folderContent: Record<FolderName, MediaItem[]> = {
  Social: [social01, social02, social03, reel01, reel02],
  Video: [reel01, reel02],
  Website: [website01],
  "Brand Identity": [brand01],
  Photography: [photography01],
};

/* ========================================
   POSITIONING
======================================== */

const positioningSteps: LocalizedItem[] = [
  {
    number: "01",
    title: {
      it: "Studiare il mercato locale",
      en: "Study the local market",
    },
    description: {
      it: "La città aveva già diversi negozi di ottica consolidati. Entrare nel mercato significava comprendere l'offerta esistente prima di decidere come Focus avrebbe potuto differenziarsi.",
      en: "The city already had several established optical stores. Entering the market meant understanding the existing offer before deciding how Focus should compete.",
    },
  },
  {
    number: "02",
    title: {
      it: "Definire per chi fosse Focus",
      en: "Define who Focus was for",
    },
    description: {
      it: "Le buyer personas hanno permesso di individuare un pubblico più giovane e attento allo stile, alla ricerca di qualcosa che andasse oltre il semplice acquisto funzionale di un paio di occhiali.",
      en: "Buyer personas helped identify a younger and increasingly style-conscious audience looking for more than a purely functional eyewear purchase.",
    },
  },
  {
    number: "03",
    title: {
      it: "Superare il modello tradizionale",
      en: "Move beyond the traditional optical store",
    },
    description: {
      it: "Focus è stata posizionata come eyewear boutique: una destinazione contemporanea costruita intorno a moda, stile personale, selezione dei prodotti e un'esperienza retail più distintiva.",
      en: "Focus was positioned as an eyewear boutique: a contemporary destination built around fashion, personal style, curated products and a more distinctive retail experience.",
    },
  },
  {
    number: "04",
    title: {
      it: "Usare la selezione prodotto come posizionamento",
      en: "Use product selection as positioning",
    },
    description: {
      it: "Collezioni orientate alla moda e collaborazioni limitate hanno contribuito a creare un'offerta capace di differenziare Focus dai competitor locali più tradizionali.",
      en: "Fashion-led collections and limited collaborations helped create a product offer capable of differentiating Focus from more traditional local competitors.",
    },
  },
  {
    number: "05",
    title: {
      it: "Aggiungere una consulenza personale",
      en: "Add personal consultation",
    },
    description: {
      it: "Le consulenze gratuite in negozio hanno aiutato i clienti ad andare oltre le tendenze, guidandoli verso montature adatte ai lineamenti del viso e al proprio stile personale.",
      en: "Free in-store consultations helped customers move beyond trends alone, guiding them toward frames suited to their facial features and personal style.",
    },
  },
];

/* ========================================
   MY ROLE
======================================== */

const roleItems: LocalizedItem[] = [
  {
    number: "01",
    title: {
      it: "Ricerca di mercato",
      en: "Market Research",
    },
    description: {
      it: "Ho analizzato il panorama competitivo locale e l'offerta esistente nel settore ottico prima di definire la direzione strategica della nuova attività.",
      en: "Analysed the local competitive landscape and existing optical retail offer before defining the strategic direction of the new business.",
    },
  },
  {
    number: "02",
    title: {
      it: "Posizionamento & Buyer Personas",
      en: "Positioning & Buyer Personas",
    },
    description: {
      it: "Ho definito il pubblico di riferimento e posizionato Focus come una boutique eyewear contemporanea, invece che come un negozio di ottica generalista.",
      en: "Defined the target audience and positioned Focus as a contemporary eyewear boutique rather than a generalist optical store.",
    },
  },
  {
    number: "03",
    title: {
      it: "Brand Identity",
      en: "Brand Identity",
    },
    description: {
      it: "Ho sviluppato logo, direzione cromatica e linguaggio visivo utilizzati nella comunicazione digitale e nell'ambiente retail fisico.",
      en: "Developed the logo, colour direction and visual language used across digital communication and the physical retail environment.",
    },
  },
  {
    number: "04",
    title: {
      it: "Social & Strategia di lancio",
      en: "Social & Launch Strategy",
    },
    description: {
      it: "Ho pianificato la comunicazione pre-lancio, la campagna di apertura e i contenuti post-lancio intorno ad anticipazione, scoperta del brand e notorietà locale.",
      en: "Planned the pre-launch communication, opening campaign and post-launch content around anticipation, brand discovery and local awareness.",
    },
  },
  {
    number: "05",
    title: {
      it: "Sito web",
      en: "Website",
    },
    description: {
      it: "Ho creato un sito vetrina capace di estendere il posizionamento boutique in un'esperienza digitale semplice e coerente.",
      en: "Created a showcase website that extended the boutique positioning into a simple and consistent digital experience.",
    },
  },
  {
    number: "06",
    title: {
      it: "Fotografia & Direzione creativa",
      en: "Photography & Creative Direction",
    },
    description: {
      it: "Ho organizzato e prodotto shooting eyewear progettati per comunicare i prodotti attraverso un linguaggio visivo più editoriale e orientato alla moda.",
      en: "Organised and produced eyewear shootings designed to communicate products through a more editorial and fashion-oriented visual language.",
    },
  },
];

/* ========================================
   STACK
======================================== */

const stackGroups = [
  {
    title: {
      it: "Strategia",
      en: "Strategy",
    },
    tools: [
      "Market Research",
      "Competitor Analysis",
      "Buyer Personas",
      "Brand Positioning",
    ],
  },
  {
    title: {
      it: "Creatività",
      en: "Creative",
    },
    tools: [
      "Brand Identity",
      "Content Production",
      "Photography",
      "Creative Direction",
    ],
  },
  {
    title: {
      it: "Digital",
      en: "Digital",
    },
    tools: [
      "Social Media",
      "Website",
      "Content Strategy",
      "Launch Strategy",
    ],
  },
];

/* ========================================
   CAROUSEL
======================================== */

function CarouselCard({
  item,
  language,
}: {
  item: MediaItem;
  language: Language;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!item.slides?.length) {
    return null;
  }

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? item.slides!.length - 1 : current - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === item.slides!.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="group/carousel relative overflow-hidden bg-black">
      <img
        src={item.slides[currentSlide]}
        alt={`${item.title[language]} — ${
          language === "it" ? "immagine" : "image"
        } ${currentSlide + 1}`}
        className="block h-auto w-full"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          previousSlide();
        }}
        aria-label={
          language === "it" ? "Immagine precedente" : "Previous image"
        }
        className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center border border-white/20 bg-black/75 text-white backdrop-blur-md transition md:h-10 md:w-10 md:opacity-0 md:group-hover/carousel:opacity-100"
      >
        ←
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          nextSlide();
        }}
        aria-label={
          language === "it" ? "Immagine successiva" : "Next image"
        }
        className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center border border-white/20 bg-black/75 text-white backdrop-blur-md transition md:h-10 md:w-10 md:opacity-0 md:group-hover/carousel:opacity-100"
      >
        →
      </button>

      <span className="pointer-events-none absolute right-3 top-3 z-30 border border-white/15 bg-black/75 px-3 py-2 text-[10px] text-white/70 backdrop-blur-md md:opacity-0 md:transition md:group-hover/carousel:opacity-100">
        {currentSlide + 1} / {item.slides.length}
      </span>
    </div>
  );
}

/* ========================================
   MEDIA CARD
======================================== */

function MediaCard({
  item,
  language,
}: {
  item: MediaItem;
  language: Language;
}) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const hideOverlay = item.type === "video" && videoPlaying;

  const typeLabel =
    language === "it"
      ? {
          image: "immagine",
          video: "video",
          carousel: "carosello",
        }[item.type]
      : item.type;

  return (
    <article className="group relative mb-4 inline-block w-full break-inside-avoid overflow-hidden border border-white/10 bg-[#0b1410] align-top">
      {item.type === "carousel" ? (
        <CarouselCard item={item} language={language} />
      ) : item.type === "video" && item.media ? (
        <video
          controls
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setVideoPlaying(true)}
          onPause={() => setVideoPlaying(false)}
          onEnded={() => setVideoPlaying(false)}
          className="block h-auto w-full bg-black"
        >
          <source src={item.media} type="video/mp4" />
          {language === "it"
            ? "Il tuo browser non supporta i video HTML5."
            : "Your browser does not support HTML5 video."}
        </video>
      ) : item.media ? (
        <img
          src={item.media}
          alt={item.title[language]}
          className="block h-auto w-full"
        />
      ) : null}

      <div
        className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black via-black/55 via-45% to-transparent transition-opacity duration-300 md:group-hover:opacity-0 ${
          hideOverlay ? "opacity-0" : "opacity-100"
        }`}
      />

      <div
        className={`pointer-events-none absolute left-4 top-4 z-20 transition duration-300 md:group-hover:-translate-y-2 md:group-hover:opacity-0 ${
          hideOverlay ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="border border-white/15 bg-black/70 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/70 backdrop-blur-md">
          {typeLabel}
        </span>
      </div>

      {item.highlight && (
        <div
          className={`pointer-events-none absolute right-4 top-4 z-20 transition duration-300 md:group-hover:-translate-y-2 md:group-hover:opacity-0 ${
            hideOverlay ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="border border-[#e8b6ac]/40 bg-black/75 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.1em] text-[#e8b6ac] backdrop-blur-md">
            {item.highlight[language]}
          </span>
        </div>
      )}

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5 transition duration-300 md:group-hover:translate-y-4 md:group-hover:opacity-0 ${
          hideOverlay ? "translate-y-4 opacity-0" : "opacity-100"
        }`}
      >
        <h3 className="font-serif text-xl font-bold leading-tight text-white">
          {item.title[language]}
        </h3>

        <p className="mt-3 text-xs leading-5 text-white/75">
          {item.description[language]}
        </p>
      </div>
    </article>
  );
}

/* ========================================
   FINDER FOLDER
======================================== */

function FinderFolder({
  name,
  number,
  active,
  count,
  language,
  onClick,
}: {
  name: FolderName;
  number: string;
  active: boolean;
  count: number;
  language: Language;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center gap-4 border px-4 py-4 text-left transition duration-300 ${
        active
          ? "border-[#e8b6ac]/40 bg-[#101a16]"
          : "border-white/10 bg-[#0b1410] hover:border-white/25"
      }`}
    >
      <img
        src="/media/ui/folder-macos.webp"
        alt=""
        className={`h-14 w-14 shrink-0 object-contain transition duration-300 ${
          active ? "scale-105" : "group-hover:scale-105"
        }`}
      />

      <div className="min-w-0 flex-1">
        <span className="mb-1 block font-serif text-xs italic text-white/25">
          {number}
        </span>

        <div className="flex items-center justify-between gap-3">
          <h3
            className={`font-serif text-xl transition ${
              active ? "text-white" : "text-white/70"
            }`}
          >
            {folderLabels[name][language]}
          </h3>

          <span
            className={`text-xs ${
              active ? "text-[#e8b6ac]" : "text-white/25"
            }`}
          >
            {count}
          </span>
        </div>
      </div>
    </button>
  );
}

/* ========================================
   PAGE
======================================== */

export default function FocusOtticaCaseStudy() {
  const { language } = useLanguage();

  const [activeFolder, setActiveFolder] =
    useState<FolderName>("Social");

  const activeItems = folderContent[activeFolder];

  const t =
    language === "it"
      ? {
          back: "← Torna ai progetti",
          caseStudy: "Case Study",

          heroLine1: "Non un altro",
          heroLine2: "negozio di ottica.",
          project: "Progetto",
          projectValue: "Lancio del brand",
          business: "Attività",
          businessLine1: "Eyewear",
          businessLine2: "Boutique",
          focus: "Focus",
          focusLine1: "Posizionamento",
          focusLine2: "Brand & Lancio",
          heroBrand: "Focus Ottica — Brand Identity",

          overview: "01 — Panoramica",
          overviewTitle1: "Il mercato aveva già",
          overviewTitle2: "negozi di ottica.",
          overviewTitle3: "Non ne serviva",
          overviewAccent: "un altro.",
          overviewP1:
            "Focus Ottica era una nuova attività locale che entrava in un mercato in cui i clienti potevano già scegliere tra diversi negozi di ottica consolidati.",
          overviewP2:
            "Il mio lavoro è iniziato prima del logo, prima del sito e prima del primo contenuto social. Insieme ai due fondatori, ho iniziato studiando il mercato locale per capire dove ci fosse spazio per costruire qualcosa di realmente differente.",
          overviewQuote:
            "L'opportunità non era diventare un negozio di ottica per tutti. Era diventare una destinazione eyewear per un pubblico specifico.",

          positioning: "02 — Posizionamento",
          positioningTitle1: "Da negozio di ottica",
          positioningTitle2: "a",
          positioningAccent: "eyewear boutique.",
          positioningIntro:
            "Ricerca di mercato e buyer personas sono diventate la base di un posizionamento costruito intorno a moda, stile personale, selezione eyewear e un pubblico più giovane.",

          identity: "03 — Brand Identity",
          identityTitle1: "Trasformare il posizionamento",
          identityTitle2: "in una",
          identityAccent: "identità.",
          identityP1:
            "Una volta definiti posizionamento e pubblico, ho sviluppato una direzione visiva capace di tradurre il concetto di boutique sia nella comunicazione digitale sia nel punto vendita fisico.",
          identityP2:
            "Il verde scuro è diventato la base dell'identità, mentre il pesca ha introdotto un accento più caldo ed espressivo. La combinazione ha aiutato Focus ad allontanarsi dalle convenzioni visive tipiche di un negozio di ottica tradizionale.",
          primary: "Primario",
          darkGreen: "Verde scuro",
          darkGreenMeaning: "Boutique / Profondità / Identità",
          accent: "Accento",
          peach: "Pesca",
          peachMeaning: "Calore / Moda / Espressione",

          launch: "04 — Strategia di lancio",
          launchTitle1: "Aprire il brand",
          launchTitle2: "prima di aprire",
          launchAccent: "le porte.",
          launchIntro:
            "La comunicazione di lancio è stata progettata come una sequenza. Invece di mostrare subito tutto, la presenza social ha introdotto gradualmente l'attitudine di Focus, la sua identità visiva e la selezione dei brand prima di rivelare la boutique fisica.",

          impact: "05 — Impatto del lancio",
          openingDay: "Giorno dell'inaugurazione",
          impactTitle1: "Il posizionamento si è trasformato",
          impactTitle2: "in",
          impactAccent: "domanda reale.",
          pairsSold: "Paia vendute",
          duringOpening: "durante l'inaugurazione",
          available: "Disponibili",
          pairsAvailable: "paia disponibili al lancio",
          sellThrough: "Sell-through al lancio",
          sellThroughText:
            "degli occhiali disponibili venduti durante l'inaugurazione",
          impactNote:
            "Calcolato su circa 120 paia vendute rispetto alle 210 disponibili durante l'inaugurazione.",

          role: "06 — Il mio ruolo",
          roleTitle1: "Dalla ricerca di mercato",
          roleTitle2: "all'",
          roleAccent: "immagine finale.",
          roleIntro:
            "Il mio ruolo ha coperto sia strategia sia execution, permettendo al posizionamento definito all'inizio del progetto di rimanere coerente tra brand identity, social, sito web, fotografia e comunicazione di lancio.",

          archive: "07 — Archivio lavori",
          archiveTitle1: "Un posizionamento.",
          archiveTitle2: "Diverse",
          archiveAccent: "espressioni.",
          archiveIntro:
            "Dalla comunicazione social pre-lancio al sito web, dall'identità alla fotografia editoriale, ogni punto di contatto è stato costruito intorno allo stesso posizionamento boutique.",
          openFolder: "Cartella aperta",
          item: "elemento",
          items: "elementi",

          websiteLabel: "Sito web / Esperienza digitale",
          websiteTitle: "Sito vetrina",
          websiteDescription:
            "Esperienza web creata per il lancio di Focus Ottica, traducendo il posizionamento boutique e l'identità visiva in una vetrina digitale coerente con il punto vendita fisico.",

          brandLabel: "Brand Identity",
          brandTitle: "Identità visiva Focus Ottica",
          brandDescription:
            "Logo e identità visiva sviluppati dopo aver definito il posizionamento e il pubblico di riferimento, traducendo il concetto di boutique in un sistema visivo riconoscibile.",

          photographyLabel: "Fotografia / Direzione creativa",
          photographyTitle: "Shooting editoriale eyewear",
          photographyDescription:
            "Direzione creativa e produzione di uno shooting editoriale progettato per presentare gli occhiali Focus attraverso un linguaggio visivo fashion-first, distante dalla fotografia tradizionale del settore ottico.",

          creative: "08 — Direzione creativa",
          creativeTitle1: "L'occhiale come",
          creativeAccent: "elemento di stile.",
          creativeIntro:
            "La fotografia ha seguito lo stesso principio del posizionamento: gli occhiali sono stati presentati come parte dello stile personale, non semplicemente come prodotti ottici funzionali.",

          scope: "09 — Ambito",
          scopeTitle: "Dalla strategia",
          scopeAccent: "all'esecuzione.",

          takeaway: "Il punto chiave",
          takeaway1:
            "La differenziazione non è iniziata da un logo o da un post Instagram.",
          takeaway2:
            "È iniziata decidendo cosa dovesse rappresentare Focus.",

          backPortfolio: "Torna al portfolio",
          allProjects: "Tutti i progetti",
          backHome: "Torna alla home ↑",
        }
      : {
          back: "← Back to projects",
          caseStudy: "Case Study",

          heroLine1: "Not another",
          heroLine2: "optical store.",
          project: "Project",
          projectValue: "Brand launch",
          business: "Business",
          businessLine1: "Eyewear",
          businessLine2: "Boutique",
          focus: "Focus",
          focusLine1: "Positioning",
          focusLine2: "Brand & Launch",
          heroBrand: "Focus Ottica — Brand Identity",

          overview: "01 — Overview",
          overviewTitle1: "The market already had",
          overviewTitle2: "optical stores.",
          overviewTitle3: "It didn't need",
          overviewAccent: "another one.",
          overviewP1:
            "Focus Ottica was a new local business entering a market where customers already had several established optical stores to choose from.",
          overviewP2:
            "My work started before the logo, before the website and before the first social post. Together with the two founders, I began by studying the local market and understanding where there was room to build something meaningfully different.",
          overviewQuote:
            "The opportunity wasn't to become an optical store for everyone. It was to become an eyewear destination for someone specific.",

          positioning: "02 — Positioning",
          positioningTitle1: "From optical store",
          positioningTitle2: "to",
          positioningAccent: "eyewear boutique.",
          positioningIntro:
            "Market research and buyer personas became the foundation for a positioning built around fashion, personal style, curated eyewear and a younger audience.",

          identity: "03 — Brand Identity",
          identityTitle1: "Turning positioning",
          identityTitle2: "into an",
          identityAccent: "identity.",
          identityP1:
            "Once the positioning and audience were defined, I developed a visual direction capable of translating the boutique concept across both digital communication and the physical store.",
          identityP2:
            "Dark green became the foundation of the identity, while peach introduced a warmer and more expressive accent. The combination helped Focus move away from the visual conventions of a traditional optical store.",
          primary: "Primary",
          darkGreen: "Dark Green",
          darkGreenMeaning: "Boutique / Depth / Identity",
          accent: "Accent",
          peach: "Peach",
          peachMeaning: "Warmth / Fashion / Expression",

          launch: "04 — Launch Strategy",
          launchTitle1: "Opening the brand",
          launchTitle2: "before opening",
          launchAccent: "the doors.",
          launchIntro:
            "The launch communication was designed as a sequence. Instead of immediately revealing everything, the social presence gradually introduced Focus's attitude, visual identity and brand selection before showing the physical boutique.",

          impact: "05 — Launch Impact",
          openingDay: "Opening day",
          impactTitle1: "Positioning turned",
          impactTitle2: "into",
          impactAccent: "real demand.",
          pairsSold: "Pairs sold",
          duringOpening: "during the inauguration",
          available: "Available",
          pairsAvailable: "pairs available at launch",
          sellThrough: "Launch sell-through",
          sellThroughText:
            "of available eyewear sold during the inauguration",
          impactNote:
            "Based on approximately 120 pairs sold from 210 pairs available during the inauguration.",

          role: "06 — My Role",
          roleTitle1: "From market research",
          roleTitle2: "to the",
          roleAccent: "final image.",
          roleIntro:
            "My role covered both strategy and execution, allowing the positioning defined at the beginning of the project to remain consistent across brand identity, social, website, photography and launch communication.",

          archive: "07 — Work Archive",
          archiveTitle1: "One positioning.",
          archiveTitle2: "Multiple",
          archiveAccent: "expressions.",
          archiveIntro:
            "From pre-launch social communication to the website, identity and editorial photography, every touchpoint was built around the same boutique positioning.",
          openFolder: "Open folder",
          item: "item",
          items: "items",

          websiteLabel: "Website / Digital Experience",
          websiteTitle: "Showcase Website",
          websiteDescription:
            "Website experience created for Focus Ottica's launch, translating the boutique positioning and visual identity into a digital showcase consistent with the physical store.",

          brandLabel: "Brand Identity",
          brandTitle: "Focus Ottica Visual Identity",
          brandDescription:
            "Logo and visual identity developed after defining the market positioning and target audience, translating the boutique concept into a recognisable visual system.",

          photographyLabel: "Photography / Creative Direction",
          photographyTitle: "Eyewear Editorial Shooting",
          photographyDescription:
            "Creative direction and production of an editorial eyewear shoot designed to present Focus products through a fashion-first visual language rather than traditional optical retail photography.",

          creative: "08 — Creative Direction",
          creativeTitle1: "Eyewear as a",
          creativeAccent: "fashion piece.",
          creativeIntro:
            "The photography followed the same principle as the brand positioning: products were presented as part of personal style rather than simply as functional optical items.",

          scope: "09 — Scope",
          scopeTitle: "Strategy through",
          scopeAccent: "execution.",

          takeaway: "The takeaway",
          takeaway1:
            "Differentiation didn't start with a logo or an Instagram post.",
          takeaway2:
            "It started with deciding what Focus should mean.",

          backPortfolio: "Back to portfolio",
          allProjects: "All projects",
          backHome: "Back home ↑",
        };

  const launchSteps: LocalizedItem[] = [
    {
      number: "01",
      title: {
        it: "Posiziona",
        en: "Position",
      },
      description: {
        it: "Introdurre attitudine e linguaggio visivo prima di concentrarsi sui singoli prodotti.",
        en: "Introduce the attitude and visual language before focusing on individual products.",
      },
    },
    {
      number: "02",
      title: {
        it: "Crea attesa",
        en: "Tease",
      },
      description: {
        it: "Generare curiosità intorno all'apertura senza mostrare immediatamente l'intera esperienza del punto vendita.",
        en: "Build curiosity around the opening without immediately revealing the complete store experience.",
      },
    },
    {
      number: "03",
      title: {
        it: "Rivela",
        en: "Reveal",
      },
      description: {
        it: "Utilizzare i brand selezionati e l'universo prodotto per rendere tangibile il posizionamento boutique.",
        en: "Use the selected brands and product universe to make the boutique positioning tangible.",
      },
    },
    {
      number: "04",
      title: {
        it: "Apri",
        en: "Open",
      },
      description: {
        it: "Collegare l'attesa costruita online alla boutique fisica e trasformare l'attenzione locale in visite al punto vendita.",
        en: "Connect the digital anticipation with the physical boutique and turn local attention into store visits.",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-[#08100d] text-[#e8e5dc]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08100d]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="font-serif text-xl italic tracking-wide"
          >
            Antonio Lorusso
          </a>

          <a
            href="/#case-studies"
            className="text-sm text-white/50 transition hover:text-white"
          >
            {t.back}
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="mb-12 flex items-center gap-3 text-sm text-white/40">
          <span className="font-serif italic">00:03</span>
          <span className="h-px w-8 bg-white/20" />
          <span>{t.caseStudy}</span>
        </div>

        <h1 className="font-serif text-6xl leading-[0.85] tracking-tight sm:text-7xl md:text-[8rem]">
          Focus
          <br />
          <span className="italic text-[#e8b6ac]">Ottica</span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="max-w-md font-serif text-2xl leading-tight text-white/75 md:text-3xl">
              {t.heroLine1}
              <br />
              {t.heroLine2}
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/25">
              {t.project}
            </p>
            <p className="text-sm text-white/65">
              {t.projectValue}
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/25">
              {t.business}
            </p>
            <p className="text-sm text-white/65">
              {t.businessLine1}
              <br />
              {t.businessLine2}
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/25">
              {t.focus}
            </p>
            <p className="text-sm text-white/65">
              {t.focusLine1}
              <br />
              {t.focusLine2}
            </p>
          </div>
        </div>
      </section>

      {/* HERO BRAND */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden border border-white/10 bg-[#293526] p-8 md:min-h-[620px] md:p-16">
          <img
            src="/media/work/focus-ottica/brand/focus-logo-01.png"
            alt="Focus Ottica logo"
            className="block w-full max-w-3xl"
          />

          <div className="absolute bottom-5 left-5 border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/50 backdrop-blur-md">
            {t.heroBrand}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm text-white/30">{t.overview}</p>
          </div>

          <div>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              {t.overviewTitle1}
              <br />
              {t.overviewTitle2}
              <br />
              {t.overviewTitle3}{" "}
              <span className="italic text-[#e8b6ac]">
                {t.overviewAccent}
              </span>
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/50 md:text-lg">
              <p>{t.overviewP1}</p>
              <p>{t.overviewP2}</p>

              <p className="font-serif text-2xl leading-relaxed text-white/75 md:text-3xl">
                {t.overviewQuote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                {t.positioning}
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                {t.positioningTitle1}
                <br />
                {t.positioningTitle2}{" "}
                <span className="italic text-[#e8b6ac]">
                  {t.positioningAccent}
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
                {t.positioningIntro}
              </p>
            </div>
          </div>

          <div className="border-t border-white/10">
            {positioningSteps.map((item) => (
              <div
                key={item.number}
                className="grid gap-6 border-b border-white/10 py-9 md:grid-cols-[0.2fr_0.65fr_1.15fr] md:gap-10"
              >
                <span className="font-serif text-lg italic text-white/20">
                  {item.number}
                </span>

                <h3 className="font-serif text-2xl leading-tight text-white/80 md:text-3xl">
                  {item.title[language]}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-white/45">
                  {item.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND IDENTITY */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">{t.identity}</p>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                {t.identityTitle1}
                <br />
                {t.identityTitle2}{" "}
                <span className="italic text-[#e8b6ac]">
                  {t.identityAccent}
                </span>
              </h2>

              <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/50 md:text-lg">
                <p>{t.identityP1}</p>
                <p>{t.identityP2}</p>
              </div>
            </div>
          </div>

          {/* COLOR SYSTEM */}
          <div className="mt-20 grid md:grid-cols-2">
            <div className="flex min-h-[340px] flex-col justify-between border border-white/10 bg-[#293526] p-8 md:min-h-[430px]">
              <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                {t.primary}
              </span>

              <div>
                <p className="font-serif text-4xl text-[#e8b6ac]">
                  {t.darkGreen}
                </p>
                <p className="mt-2 text-sm text-white/35">
                  {t.darkGreenMeaning}
                </p>
              </div>
            </div>

            <div className="flex min-h-[340px] flex-col justify-between border border-white/10 bg-[#e8b6ac] p-8 text-[#293526] md:min-h-[430px]">
              <span className="text-xs uppercase tracking-[0.18em] opacity-50">
                {t.accent}
              </span>

              <div>
                <p className="font-serif text-4xl">{t.peach}</p>
                <p className="mt-2 text-sm opacity-50">
                  {t.peachMeaning}
                </p>
              </div>
            </div>
          </div>

          <div className="border-x border-b border-white/10 bg-[#293526] p-8 md:p-14">
            <img
              src="/media/work/focus-ottica/brand/focus-logo-01.png"
              alt="Focus Ottica visual identity"
              className="mx-auto block w-full max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* LAUNCH */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">{t.launch}</p>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                {t.launchTitle1}
                <br />
                {t.launchTitle2}{" "}
                <span className="italic text-[#e8b6ac]">
                  {t.launchAccent}
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/45">
                {t.launchIntro}
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-l border-t border-white/10 md:grid-cols-4">
            {launchSteps.map((step) => (
              <article
                key={step.number}
                className="min-h-[260px] border-b border-r border-white/10 p-7"
              >
                <span className="font-serif text-sm italic text-[#e8b6ac]">
                  {step.number}
                </span>

                <h3 className="mt-8 font-serif text-3xl text-white/80">
                  {step.title[language]}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/40">
                  {step.description[language]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LAUNCH IMPACT */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">{t.impact}</p>
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#e8b6ac]">
                {t.openingDay}
              </p>

              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                {t.impactTitle1}
                <br />
                {t.impactTitle2}{" "}
                <span className="italic text-[#e8b6ac]">
                  {t.impactAccent}
                </span>
              </h2>
            </div>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-3">
            <article className="min-h-[300px] border-b border-r border-white/10 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                {t.pairsSold}
              </p>

              <p className="mt-12 font-serif text-7xl text-[#e8b6ac] md:text-8xl">
                ~120
              </p>

              <p className="mt-5 text-sm text-white/40">
                {t.duringOpening}
              </p>
            </article>

            <article className="min-h-[300px] border-b border-r border-white/10 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                {t.available}
              </p>

              <p className="mt-12 font-serif text-7xl text-white/80 md:text-8xl">
                210
              </p>

              <p className="mt-5 text-sm text-white/40">
                {t.pairsAvailable}
              </p>
            </article>

            <article className="min-h-[300px] border-b border-r border-white/10 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                {t.sellThrough}
              </p>

              <p className="mt-12 font-serif text-7xl text-[#e8b6ac] md:text-8xl">
                ~57%
              </p>

              <p className="mt-5 text-sm leading-6 text-white/40">
                {t.sellThroughText}
              </p>
            </article>
          </div>

          <p className="mt-5 text-xs leading-5 text-white/25">
            {t.impactNote}
          </p>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">{t.role}</p>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                {t.roleTitle1}
                <br />
                {t.roleTitle2}
                <span className="italic text-[#e8b6ac]">
                  {t.roleAccent}
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
                {t.roleIntro}
              </p>
            </div>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {roleItems.map((item) => (
              <article
                key={item.number}
                className="min-h-[250px] border-b border-r border-white/10 p-7 md:p-9"
              >
                <span className="font-serif text-sm italic text-[#e8b6ac]">
                  {item.number}
                </span>

                <h3 className="mt-8 font-serif text-3xl leading-tight text-white/85">
                  {item.title[language]}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                  {item.description[language]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK ARCHIVE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">{t.archive}</p>
            </div>

            <div>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                {t.archiveTitle1}
                <br />
                {t.archiveTitle2}{" "}
                <span className="italic text-[#e8b6ac]">
                  {t.archiveAccent}
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/45">
                {t.archiveIntro}
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* FOLDERS */}
            <div className="space-y-3">
              {folders.map((folder) => (
                <FinderFolder
                  key={folder.name}
                  name={folder.name}
                  number={folder.number}
                  active={activeFolder === folder.name}
                  count={folderContent[folder.name].length}
                  language={language}
                  onClick={() => setActiveFolder(folder.name)}
                />
              ))}
            </div>

            {/* FINDER WINDOW */}
            <div className="min-w-0 border border-white/10 bg-[#09110e]">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div className="flex items-center gap-3">
                  <img
                    src="/media/ui/folder-macos.webp"
                    alt=""
                    className="h-10 w-10 object-contain"
                  />

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">
                      {t.openFolder}
                    </p>

                    <h3 className="font-serif text-2xl">
                      {folderLabels[activeFolder][language]}
                    </h3>
                  </div>
                </div>

                <span className="text-xs text-white/30">
                  {activeItems.length}{" "}
                  {activeItems.length === 1 ? t.item : t.items}
                </span>
              </div>

              <div key={activeFolder} className="p-4 md:p-5">
                {/* WEBSITE — LARGE VIDEO */}
                {activeFolder === "Website" ? (
                  <div className="w-full">
                    <div className="overflow-hidden border border-white/10 bg-black">
                      <video
                        controls
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="block h-auto w-full"
                      >
                        <source
                          src="/media/work/focus-ottica/website/focus-website-01.mp4"
                          type="video/mp4"
                        />
                        {language === "it"
                          ? "Il tuo browser non supporta i video HTML5."
                          : "Your browser does not support HTML5 video."}
                      </video>
                    </div>

                    <div className="border-x border-b border-white/10 bg-[#0b1410] p-6">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#e8b6ac]">
                        {t.websiteLabel}
                      </p>

                      <h3 className="mt-3 font-serif text-3xl text-white">
                        {t.websiteTitle}
                      </h3>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                        {t.websiteDescription}
                      </p>
                    </div>
                  </div>
                ) : activeFolder === "Brand Identity" ? (
                  /* BRAND — LARGE PRESENTATION */
                  <div className="w-full">
                    <div className="flex min-h-[500px] items-center justify-center border border-white/10 bg-[#293526] p-8 md:p-14">
                      <img
                        src="/media/work/focus-ottica/brand/focus-logo-01.png"
                        alt="Focus Ottica logo"
                        className="block w-full max-w-2xl"
                      />
                    </div>

                    <div className="border-x border-b border-white/10 bg-[#0b1410] p-6">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#e8b6ac]">
                        {t.brandLabel}
                      </p>

                      <h3 className="mt-3 font-serif text-3xl text-white">
                        {t.brandTitle}
                      </h3>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                        {t.brandDescription}
                      </p>
                    </div>
                  </div>
                ) : activeFolder === "Photography" ? (
                  /* PHOTOGRAPHY — LARGE CAROUSEL */
                  <div className="w-full">
                    <div className="border border-white/10">
                      <CarouselCard
                        item={photography01}
                        language={language}
                      />
                    </div>

                    <div className="border-x border-b border-white/10 bg-[#0b1410] p-6">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#e8b6ac]">
                        {t.photographyLabel}
                      </p>

                      <h3 className="mt-3 font-serif text-3xl text-white">
                        {t.photographyTitle}
                      </h3>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                        {t.photographyDescription}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* SOCIAL / VIDEO */
                  <div className="columns-1 gap-4 md:columns-2">
                    {activeItems.map((item) => (
                      <MediaCard
                        key={item.id}
                        item={item}
                        language={language}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY FEATURE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-14 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">{t.creative}</p>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                {t.creativeTitle1}
                <br />
                <span className="italic text-[#e8b6ac]">
                  {t.creativeAccent}
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
                {t.creativeIntro}
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden border border-white/10">
              <img
                src="/media/work/focus-ottica/photography/focus-shoot-01.webp"
                alt="Focus Ottica editorial eyewear shooting"
                className="block h-full w-full object-cover"
              />
            </div>

            <div className="overflow-hidden border border-white/10">
              <img
                src="/media/work/focus-ottica/photography/focus-shoot-02.webp"
                alt="Focus Ottica editorial eyewear portrait"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              "focus-shoot-03.webp",
              "focus-shoot-04.webp",
              "focus-shoot-05.webp",
            ].map((image, index) => (
              <div
                key={image}
                className="aspect-square overflow-hidden border border-white/10"
              >
                <img
                  src={`/media/work/focus-ottica/photography/${image}`}
                  alt={`Focus Ottica shooting — ${index + 3}`}
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.025]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">{t.scope}</p>
            </div>

            <div>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                {t.scopeTitle}{" "}
                <span className="italic text-[#e8b6ac]">
                  {t.scopeAccent}
                </span>
              </h2>
            </div>
          </div>

          <div className="border-t border-white/10">
            {stackGroups.map((group) => (
              <div
                key={group.title.en}
                className="grid gap-6 border-b border-white/10 py-7 md:grid-cols-[0.7fr_1.3fr] md:items-start"
              >
                <h3 className="font-serif text-xl text-white/60">
                  {group.title[language]}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-white/10 px-4 py-2.5 text-sm text-white/50 transition hover:border-[#e8b6ac]/50 hover:text-white/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="max-w-4xl">
            <p className="mb-8 text-xs uppercase tracking-[0.2em] text-[#e8b6ac]">
              {t.takeaway}
            </p>

            <p className="font-serif text-4xl leading-tight text-white/75 md:text-6xl">
              {t.takeaway1}
              <br />
              <span className="italic text-[#e8b6ac]">
                {t.takeaway2}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* BACK */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="mb-6 text-sm text-white/30">
            {t.backPortfolio}
          </p>

          <a href="/" className="group inline-block">
            <h2 className="font-serif text-6xl italic leading-[0.95] transition group-hover:text-[#e8b6ac] md:text-8xl">
              {t.allProjects}
              <br />→
            </h2>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-white/30 md:flex-row md:items-center md:justify-between">
          <span>Antonio Lorusso © 2026</span>

          <a href="/" className="transition hover:text-white">
            {t.backHome}
          </a>
        </div>
      </footer>
    </main>
  );
}