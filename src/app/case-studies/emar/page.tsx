"use client";

import { useState } from "react";
import { useLanguage } from "../../components/LanguageProvider";

type Language = "it" | "en";

type LocalizedText = {
  it: string;
  en: string;
};

type FolderName =
  | "Content"
  | "Social"
  | "Video"
  | "Carousel"
  | "Website";

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
  { name: "Content", number: "01" },
  { name: "Social", number: "02" },
  { name: "Video", number: "03" },
  { name: "Carousel", number: "04" },
  { name: "Website", number: "05" },
];

const folderLabels: Record<FolderName, LocalizedText> = {
  Content: {
    it: "Contenuti",
    en: "Content",
  },
  Social: {
    it: "Social",
    en: "Social",
  },
  Video: {
    it: "Video",
    en: "Video",
  },
  Carousel: {
    it: "Caroselli",
    en: "Carousel",
  },
  Website: {
    it: "Sito web",
    en: "Website",
  },
};

/* ========================================
   EMAR — VIDEO
======================================== */

const emarVideo01: MediaItem = {
  id: "emar-video-01",
  title: {
    it: "Manutenzione dei mezzi agricoli",
    en: "Agricultural Vehicle Maintenance",
  },
  description: {
    it: "Reel educativo che spiega l'importanza della manutenzione programmata dei mezzi agricoli, confrontando marchi compatibili e aiutando il cliente a scegliere la soluzione più adatta in base a qualità e prezzo.",
    en: "Educational talking Reel explaining the importance of scheduled maintenance for agricultural vehicles, comparing compatible brands and helping customers choose the best solution based on quality and price.",
  },
  type: "video",
  media: "/media/work/emar/emarvd-1.mp4",
};

const emarVideo02: MediaItem = {
  id: "emar-video-02",
  title: {
    it: "Promozione del punto vendita",
    en: "Local Store Promotion",
  },
  description: {
    it: "Reel promozionale creato per aumentare la visibilità locale, rafforzare la conoscenza del punto vendita e incentivare le visite attraverso una presentazione diretta dell'esperienza in negozio.",
    en: "Promotional Reel created to increase local visibility, strengthen store awareness and encourage foot traffic through a direct presentation of the physical retail experience.",
  },
  type: "video",
  media: "/media/work/emar/emarvd-2.mp4",
};

const emarVideo03: MediaItem = {
  id: "emar-video-03",
  title: {
    it: "Arrivo prodotti Makita",
    en: "Makita Product Arrival",
  },
  description: {
    it: "Reel di presentazione dedicato all'arrivo dei prodotti Makita in negozio, utilizzando il nuovo assortimento per generare interesse e rafforzare l'offerta di Emar.",
    en: "Product announcement Reel introducing the arrival of Makita products in store, using new assortment communication to create interest and reinforce Emar's product offering.",
  },
  type: "video",
  media: "/media/work/emar/emarvd-3.mp4",
};

/* ========================================
   EMAR — SINGLE POST
======================================== */

const emarPost01: MediaItem = {
  id: "emar-post-01",
  title: {
    it: "Agricoltura di precisione — CHCNAV 612",
    en: "Precision Agriculture — CHCNAV 612",
  },
  description: {
    it: "Creatività social dedicata a un sistema di guida automatizzata per l'agricoltura di precisione, trasformando una soluzione tecnica in benefici chiari e accompagnando la comunicazione con una CTA orientata alla consulenza.",
    en: "Product-focused social creative introducing an automated guidance system for precision agriculture, translating a technical solution into clear benefits and supporting the communication with a consultation-led CTA.",
  },
  type: "image",
  media: "/media/work/emar/emarpost-01.jpg",
};

/* ========================================
   EMAR — CAROUSEL 01
======================================== */

const emarCarousel01: MediaItem = {
  id: "emar-carousel-01",
  title: {
    it: "Gli essenziali per l'officina",
    en: "Workshop Essentials",
  },
  description: {
    it: "Carosello educativo progettato per aiutare i clienti meno esperti a comprendere gli strumenti essenziali per l'officina e il loro utilizzo pratico, collegando poi in modo naturale l'informazione di prodotto a una promozione Makita a tempo.",
    en: "Educational carousel designed to help less experienced customers understand essential workshop tools and their practical uses, before naturally connecting product education with a time-sensitive Makita promotion.",
  },
  type: "carousel",
  slides: [
    "/media/work/emar/emar-carousel-01-1.jpg",
    "/media/work/emar/emar-carousel-01-2.jpg",
    "/media/work/emar/emar-carousel-01-3.jpg",
    "/media/work/emar/emar-carousel-01-4.jpg",
    "/media/work/emar/emar-carousel-01-5.jpg",
    "/media/work/emar/emar-carousel-01-6.jpg",
    "/media/work/emar/emar-carousel-01-7.jpg",
    "/media/work/emar/emar-carousel-01-8.jpg",
  ],
};

/* ========================================
   EMAR — CAROUSEL 02
======================================== */

const emarCarousel02: MediaItem = {
  id: "emar-carousel-02",
  title: {
    it: "Scegliere lo strumento giusto",
    en: "Choosing the Right Tool",
  },
  description: {
    it: "Carosello educativo che semplifica le differenze tra gli strumenti più comuni da officina e i relativi utilizzi, aiutando il cliente a scegliere in modo più consapevole e posizionando Emar come punto di riferimento pratico.",
    en: "Educational carousel simplifying the differences between common workshop tools and their use cases, helping customers make a more informed choice while positioning Emar as a practical point of reference.",
  },
  type: "carousel",
  slides: [
    "/media/work/emar/emar-carousel-02-1.jpg",
    "/media/work/emar/emar-carousel-02-2.jpg",
    "/media/work/emar/emar-carousel-02-3.jpg",
    "/media/work/emar/emar-carousel-02-4.jpg",
    "/media/work/emar/emar-carousel-02-5.jpg",
    "/media/work/emar/emar-carousel-02-6.jpg",
    "/media/work/emar/emar-carousel-02-7.jpg",
  ],
};

/* ========================================
   EMAR — WEBSITE
======================================== */

const emarWebsite: MediaItem = {
  id: "emar-website",
  title: {
    it: "Esperienza di vendita assistita",
    en: "Assisted Commerce Experience",
  },
  description: {
    it: "Un sito costruito intorno al reale comportamento d'acquisto dei clienti Emar, combinando una navigazione dei prodotti in stile e-commerce con l'assistenza diretta tramite WhatsApp per chi necessita di supporto tecnico prima dell'acquisto.",
    en: "A product-led website designed around Emar's real buying behaviour, combining e-commerce-style product discovery with direct WhatsApp assistance for customers who need technical guidance before purchasing.",
  },
  type: "carousel",
  highlight: {
    it: "Sito web / UX",
    en: "Website / UX",
  },
  slides: [
    "/media/work/emar/website/website-01.jpg",
    "/media/work/emar/website/website-02.png",
    "/media/work/emar/website/website-03.png",
    "/media/work/emar/website/website-04.png",
    "/media/work/emar/website/website-05.png",
    "/media/work/emar/website/website-06.png",
    "/media/work/emar/website/website-07.png",
    "/media/work/emar/website/website-08.png",
  ],
};

/* ========================================
   FOLDER CONTENT
======================================== */

const folderContent: Record<FolderName, MediaItem[]> = {
  Content: [
    emarVideo01,
    emarVideo02,
    emarVideo03,
    emarPost01,
    emarCarousel01,
    emarCarousel02,
  ],

  Social: [
    emarVideo01,
    emarVideo02,
    emarVideo03,
    emarPost01,
    emarCarousel01,
    emarCarousel02,
  ],

  Video: [emarVideo01, emarVideo02, emarVideo03],

  Carousel: [emarCarousel01, emarCarousel02],

  Website: [emarWebsite],
};

/* ========================================
   STRATEGY
======================================== */

const strategyItems: LocalizedItem[] = [
  {
    number: "01",
    title: {
      it: "Imparare prima di comunicare",
      en: "Learn before communicating",
    },
    description: {
      it: "Entrare in un mercato che non conoscevo significava partire dalla ricerca: comprendere il territorio, le abitudini dei clienti, le categorie di prodotto e le esigenze pratiche alla base delle decisioni d'acquisto.",
      en: "Entering a market I did not already know meant starting with research: understanding the territory, customer habits, product categories and the practical needs behind purchasing decisions.",
    },
  },
  {
    number: "02",
    title: {
      it: "Rendere i prodotti tecnici più comprensibili",
      en: "Make technical products easier to understand",
    },
    description: {
      it: "I contenuti non sono stati progettati soltanto per promuovere i prodotti, ma anche per spiegarli. I post educativi hanno aiutato un pubblico più giovane o meno esperto a comprendere strumenti, manutenzione e diversi casi d'uso prima dell'acquisto.",
      en: "Content was designed not only to promote products, but to explain them. Educational posts helped younger and less experienced audiences understand tools, maintenance and different use cases before making a purchase.",
    },
  },
  {
    number: "03",
    title: {
      it: "Usare la stagionalità per essere rilevanti",
      en: "Use seasonality as relevance",
    },
    description: {
      it: "La comunicazione ha seguito i cicli agricoli, le esigenze stagionali e i momenti in cui specifici prodotti diventavano naturalmente più rilevanti per il cliente.",
      en: "Communication followed agricultural cycles, seasonal needs and moments when specific products naturally became more relevant to the customer.",
    },
  },
  {
    number: "04",
    title: {
      it: "Promuovere quando l'offerta ha davvero senso",
      en: "Promote when the offer makes sense",
    },
    description: {
      it: "Sconti e meccaniche promozionali sono stati collegati a reali momenti d'acquisto, invece di essere utilizzati continuamente, preservando il valore del prodotto e supportando allo stesso tempo la conversione.",
      en: "Discounts and promotional mechanics were connected to real buying moments rather than being used continuously, helping maintain product value while supporting conversion.",
    },
  },
  {
    number: "05",
    title: {
      it: "Progettare intorno al comportamento reale del cliente",
      en: "Design around real customer behaviour",
    },
    description: {
      it: "L'esperienza del sito è stata strutturata attorno al modo in cui i clienti si approcciano realmente a Emar: prima esplorano in autonomia, poi richiedono una consulenza tecnica quando l'acquisto necessita di maggiore sicurezza.",
      en: "The website experience was structured around how customers actually approached Emar: explore independently first, then ask for technical advice when the purchase required additional confidence.",
    },
  },
];

/* ========================================
   ROLE
======================================== */

const roleItems: LocalizedItem[] = [
  {
    number: "01",
    title: {
      it: "Ricerca di mercato & pubblico",
      en: "Market & Audience Research",
    },
    description: {
      it: "Ho studiato un nuovo mercato, i comportamenti d'acquisto locali, le esigenze dei clienti e i diversi livelli di conoscenza tecnica presenti nel pubblico di Emar.",
      en: "Studied a new market, local purchasing behaviour, customer needs and the different levels of product knowledge across Emar's audience.",
    },
  },
  {
    number: "02",
    title: {
      it: "Strategia Social",
      en: "Social Strategy",
    },
    description: {
      it: "Ho costruito la comunicazione social attorno a educazione, scoperta dei prodotti, rilevanza locale, stagionalità e momenti promozionali selezionati.",
      en: "Built the social communication around education, product discovery, local relevance, seasonality and selected promotional moments.",
    },
  },
  {
    number: "03",
    title: {
      it: "Produzione Contenuti",
      en: "Content Production",
    },
    description: {
      it: "Ho gestito concept, copy, produzione visiva e contenuti video per comunicazioni educative, promozionali e orientate al prodotto.",
      en: "Managed concepts, copy, visual production and video content across educational, promotional and product-led communication.",
    },
  },
  {
    number: "04",
    title: {
      it: "Sito web & UX",
      en: "Website & UX",
    },
    description: {
      it: "Ho strutturato il sito, la navigazione e il percorso di scoperta dei prodotti affinché fossero comprensibili a clienti con età, competenze digitali e conoscenze tecniche molto diverse.",
      en: "Structured the website, navigation and product discovery journey to remain understandable for customers with very different ages, digital confidence and technical knowledge.",
    },
  },
  {
    number: "05",
    title: {
      it: "Brand & Offline",
      en: "Brand & Offline",
    },
    description: {
      it: "Ho sviluppato il logo di Emar e supportato la comunicazione offline attraverso materiali promozionali progettati per mantenere coerenza visiva tra i punti di contatto fisici e digitali.",
      en: "Developed Emar's logo and supported offline communication through promotional materials designed to keep physical and digital touchpoints visually consistent.",
    },
  },
  {
    number: "06",
    title: {
      it: "Percorso di conversione",
      en: "Conversion Journey",
    },
    description: {
      it: "Ho integrato WhatsApp nel sito come punto di contatto naturale per la conversione assistita, dedicato ai clienti che necessitano di supporto tecnico prima di scegliere un prodotto o una soluzione.",
      en: "Integrated WhatsApp into the website as a natural assisted-conversion touchpoint for customers who need technical guidance before choosing a product or solution.",
    },
  },
];

/* ========================================
   STACK
======================================== */

const stackGroups = [
  {
    title: {
      it: "Sito web",
      en: "Website",
    },
    tools: ["WordPress"],
  },
  {
    title: {
      it: "Creatività",
      en: "Creative",
    },
    tools: ["Adobe Creative Suite", "Canva"],
  },
  {
    title: {
      it: "AI & Produzione",
      en: "AI & Production",
    },
    tools: ["Midjourney", "ChatGPT", "Claude", "Higgsfield"],
  },
  {
    title: {
      it: "Marketing & Analytics",
      en: "Marketing & Analytics",
    },
    tools: [
      "Meta Business Suite",
      "Google Analytics",
      "Google Search Console",
    ],
  },
  {
    title: {
      it: "Produttività",
      en: "Productivity",
    },
    tools: ["Google Workspace", "Microsoft Office"],
  },
];

/* ========================================
   STANDARD CAROUSEL
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
        alt={`${item.title[language]} — slide ${currentSlide + 1}`}
        className="block h-auto w-full"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          previousSlide();
        }}
        aria-label={
          language === "it" ? "Slide precedente" : "Previous slide"
        }
        className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center border border-white/20 bg-black/75 text-sm text-white backdrop-blur-md transition md:h-10 md:w-10 md:opacity-0 md:group-hover/carousel:opacity-100"
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
          language === "it" ? "Slide successiva" : "Next slide"
        }
        className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center border border-white/20 bg-black/75 text-sm text-white backdrop-blur-md transition md:h-10 md:w-10 md:opacity-0 md:group-hover/carousel:opacity-100"
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
   WEBSITE CAROUSEL
======================================== */

function WebsiteCarousel({
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
    <div className="relative flex min-h-[420px] w-full items-center justify-center bg-[#050907] sm:min-h-[520px] md:min-h-[640px]">
      <img
        src={item.slides[currentSlide]}
        alt={`${item.title[language]} — ${
          language === "it" ? "schermata" : "screen"
        } ${currentSlide + 1}`}
        className="max-h-[640px] w-full object-contain"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          previousSlide();
        }}
        aria-label={
          language === "it"
            ? "Schermata precedente"
            : "Previous website screen"
        }
        className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center border border-white/20 bg-black/75 text-white backdrop-blur-md transition hover:bg-black sm:left-4"
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
          language === "it"
            ? "Schermata successiva"
            : "Next website screen"
        }
        className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center border border-white/20 bg-black/75 text-white backdrop-blur-md transition hover:bg-black sm:right-4"
      >
        →
      </button>

      <span className="pointer-events-none absolute right-3 top-3 z-30 border border-white/15 bg-black/75 px-3 py-2 text-[10px] text-white/70 backdrop-blur-md sm:right-4 sm:top-4">
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
          <span className="border border-[#75968c]/50 bg-black/75 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.1em] text-[#a9c2ba] backdrop-blur-md">
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
          ? "border-[#75968c]/50 bg-[#101a16]"
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
              active ? "text-[#8eaaa1]" : "text-white/25"
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

export default function EmarCaseStudy() {
  const { language } = useLanguage();

  const [activeFolder, setActiveFolder] =
    useState<FolderName>("Content");

  const activeItems = folderContent[activeFolder];

  const t =
    language === "it"
      ? {
          back: "← Torna ai progetti",
          caseStudy: "Case Study",

          heroLine1: "Strategia costruita intorno",
          heroLine2: "al comportamento locale reale.",
          timeframe: "Periodo",
          timeframeValue: "2023 — Oggi",
          business: "Attività",
          businessLine1: "Ricambi agricoli",
          businessLine2: "& attrezzature",
          focus: "Focus",
          focusLine1: "Sito web",
          focusLine2: "Social & Brand",
          heroMedia: "Emar Ricambi — Esperienza digitale",

          overview: "01 — Panoramica",
          overviewTitle1: "Comprendere il mercato",
          overviewTitle2: "prima di progettare la",
          overviewAccent: "comunicazione.",
          overviewP1:
            "Emar Ricambi opera in un mercato altamente specializzato che comprende ricambi agricoli, attrezzature, irrigazione, utensili da officina e soluzioni tecniche.",
          overviewP2:
            "È stato anche uno dei progetti che mi ha richiesto maggiore capacità di adattamento. Sono entrato in un settore che non conoscevo e ho dovuto comprendere nuovi prodotti, abitudini dei clienti e il rapporto tra l'azienda e il suo mercato locale prima di decidere come il brand dovesse comunicare.",
          overviewP3:
            "Il progetto si è sviluppato tra social media, sito web, branding e comunicazione offline, con l'obiettivo di rendere un'attività tecnica più semplice da comprendere, navigare e considerare affidabile.",

          challenge: "02 — La sfida",
          challengeTitle1: "Una sola attività.",
          challengeTitle2: "Livelli di conoscenza molto",
          challengeAccent: "diversi.",
          challengeP1:
            "Emar serve clienti con livelli di esperienza molto differenti: da chi conosce già esattamente il ricambio o lo strumento di cui ha bisogno, fino a clienti più giovani o meno esperti che si avvicinano per la prima volta al fai-da-te, alla manutenzione o ai prodotti per l'agricoltura.",
          challengeP2:
            "Questo significava che mostrare semplicemente i prodotti non era sufficiente. La comunicazione doveva spiegare a cosa servissero, quando fossero utili e come scegliere tra soluzioni differenti.",
          challengeQuote:
            "L'obiettivo era rendere accessibile la competenza tecnica senza semplificare eccessivamente il mercato.",

          strategy: "03 — La strategia",
          strategyTitle1: "Rilevanza locale,",
          strategyTitle2: "educazione pratica e",
          strategyAccent: "scelte consapevoli.",
          strategyIntro:
            "La strategia di comunicazione è stata costruita per aiutare i clienti a comprendere ciò di cui avevano realmente bisogno, collegando i prodotti alle abitudini locali, alla stagionalità agricola e a casi d'uso concreti.",

          role: "04 — Il mio ruolo",
          roleTitle1: "Dalla ricerca",
          roleTitle2: "all'esperienza finale",
          roleAccent: "del cliente.",
          roleIntro:
            "Ho gestito il progetto sia dal punto di vista strategico sia operativo, collegando ricerca di mercato, comunicazione social, UX del sito e identità visiva attorno alla stessa comprensione del cliente.",

          archive: "05 — Archivio lavori",
          archiveTitle1: "Formati diversi.",
          archiveTitle2: "Un unico",
          archiveAccent: "sistema di comunicazione.",
          archiveIntro:
            "Contenuti educativi, comunicazione di prodotto, visibilità locale e UX del sito sono stati progettati per lavorare insieme, rendendo le informazioni tecniche più accessibili nei diversi punti di contatto con il cliente.",
          openFolder: "Cartella aperta",
          item: "elemento",
          items: "elementi",

          assisted: "06 — Vendita assistita",
          assistedLabel: "Sito web / Customer Journey",
          assistedTitle1: "Progettare il percorso intorno",
          assistedTitle2: "al modo in cui i clienti",
          assistedAccent: "acquistano davvero.",
          assistedIntro:
            "Molti clienti Emar vogliono capire quale soluzione sia più adatta al proprio caso specifico prima di prendere una decisione finale. Il sito è stato quindi progettato per supportare sia l'esplorazione autonoma sia la consulenza diretta.",

          principle: "Il principio",
          principle1:
            "Invece di forzare i clienti all'interno di un checkout tradizionale,",
          principle2:
            "ho progettato il percorso di conversione intorno al modo in cui acquistano realmente.",

          stack: "07 — Stack",
          stackTitle: "Gli strumenti a supporto del",
          stackAccent: "progetto.",

          next: "Prossimo case study",
          backHome: "Torna alla home ↑",
        }
      : {
          back: "← Back to projects",
          caseStudy: "Case Study",

          heroLine1: "Strategy built around",
          heroLine2: "real local behaviour.",
          timeframe: "Timeframe",
          timeframeValue: "2023 — Present",
          business: "Business",
          businessLine1: "Agricultural parts",
          businessLine2: "& equipment",
          focus: "Focus",
          focusLine1: "Website",
          focusLine2: "Social & Brand",
          heroMedia: "Emar Ricambi — Digital Experience",

          overview: "01 — Overview",
          overviewTitle1: "Understanding the market",
          overviewTitle2: "before designing the",
          overviewAccent: "communication.",
          overviewP1:
            "Emar Ricambi operates in a highly specialised market covering agricultural spare parts, equipment, irrigation, workshop tools and technical solutions.",
          overviewP2:
            "It was also one of the projects that required me to adapt the most. I entered a sector I did not already know and had to understand new products, customer habits and the relationship between the business and its local market before deciding how the brand should communicate.",
          overviewP3:
            "The project developed across social media, website, branding and offline communication, with the objective of making a technical business easier to understand, navigate and trust.",

          challenge: "02 — The Challenge",
          challengeTitle1: "One business.",
          challengeTitle2: "Very different levels of",
          challengeAccent: "knowledge.",
          challengeP1:
            "Emar serves customers with very different levels of experience: from people who already know exactly which part or tool they need to younger or less experienced customers approaching DIY, maintenance or agricultural products for the first time.",
          challengeP2:
            "This meant that simply displaying products was not enough. The communication had to explain what products were for, when they were useful and how to choose between different solutions.",
          challengeQuote:
            "The goal was to make expertise accessible without oversimplifying the market.",

          strategy: "03 — The Strategy",
          strategyTitle1: "Local relevance,",
          strategyTitle2: "practical education and",
          strategyAccent: "conscious choice.",
          strategyIntro:
            "The communication strategy was built around helping customers understand what they actually needed, while connecting products with local habits, agricultural seasonality and real use cases.",

          role: "04 — My Role",
          roleTitle1: "From research",
          roleTitle2: "to the final",
          roleAccent: "customer experience.",
          roleIntro:
            "I managed the project across both strategy and execution, connecting market research, social communication, website UX and visual identity around the same customer understanding.",

          archive: "05 — Work Archive",
          archiveTitle1: "Different formats.",
          archiveTitle2: "One",
          archiveAccent: "communication system.",
          archiveIntro:
            "Educational content, product communication, local awareness and website UX were designed to work together, making technical information easier to access across different customer touchpoints.",
          openFolder: "Open folder",
          item: "item",
          items: "items",

          assisted: "06 — Assisted Commerce",
          assistedLabel: "Website / Customer Journey",
          assistedTitle1: "Design the journey around",
          assistedTitle2: "how customers",
          assistedAccent: "actually buy.",
          assistedIntro:
            "Many Emar customers want to understand which solution is best for their specific use case before making a final decision. The website was therefore designed to support both independent exploration and direct consultation.",

          principle: "The principle",
          principle1:
            "Rather than forcing customers into a conventional checkout,",
          principle2:
            "I designed the conversion journey around how they actually buy.",

          stack: "07 — Stack",
          stackTitle: "Tools supporting the",
          stackAccent: "project.",

          next: "Next case study",
          backHome: "Back home ↑",
        };

  const assistedSteps: LocalizedItem[] = [
    {
      number: "01",
      title: {
        it: "Esplora",
        en: "Explore",
      },
      description: {
        it: "Categorie chiare permettono ai clienti di capire rapidamente da dove iniziare.",
        en: "Clear categories allow customers to quickly understand where to start.",
      },
    },
    {
      number: "02",
      title: {
        it: "Comprendi",
        en: "Understand",
      },
      description: {
        it: "Prodotti, informazioni tecniche e indicazioni pratiche aiutano a ridurre l'incertezza.",
        en: "Products, technical information and practical guidance help reduce uncertainty.",
      },
    },
    {
      number: "03",
      title: {
        it: "Valuta",
        en: "Evaluate",
      },
      description: {
        it: "I clienti possono restringere in autonomia la scelta alle soluzioni più adatte alle proprie esigenze.",
        en: "Customers can independently narrow down the solutions that fit their needs.",
      },
    },
    {
      number: "04",
      title: {
        it: "Chiedi",
        en: "Ask",
      },
      description: {
        it: "Quando serve maggiore competenza tecnica, WhatsApp trasforma la consulenza in una parte naturale del percorso di conversione.",
        en: "When additional expertise is needed, WhatsApp turns consultation into a natural part of the conversion journey.",
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
          <span className="font-serif italic">00:02</span>
          <span className="h-px w-8 bg-white/20" />
          <span>{t.caseStudy}</span>
        </div>

        <h1 className="font-serif text-7xl leading-[0.85] tracking-tight md:text-[9rem]">
          Emar
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
              {t.timeframe}
            </p>
            <p className="text-sm text-white/65">
              {t.timeframeValue}
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

      {/* HERO MEDIA */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="group relative overflow-hidden border border-white/10 bg-[#0b1410]">
          <img
            src="/media/work/emar/website/website-01.jpg"
            alt="Emar Ricambi website homepage"
            className="block h-auto w-full transition duration-700 ease-out group-hover:scale-[1.015]"
          />

          <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

          <div className="pointer-events-none absolute bottom-5 left-5 border border-white/10 bg-[#08100d]/80 px-3 py-2 text-xs text-white/50 backdrop-blur-md">
            {t.heroMedia}
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
              {t.overviewTitle2}{" "}
              <span className="italic text-[#75968c]">
                {t.overviewAccent}
              </span>
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/50 md:text-lg">
              <p>{t.overviewP1}</p>
              <p>{t.overviewP2}</p>
              <p>{t.overviewP3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm text-white/30">{t.challenge}</p>
          </div>

          <div>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              {t.challengeTitle1}
              <br />
              {t.challengeTitle2}{" "}
              <span className="italic text-[#b86f45]">
                {t.challengeAccent}
              </span>
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/50 md:text-lg">
              <p>{t.challengeP1}</p>
              <p>{t.challengeP2}</p>

              <p className="font-serif text-2xl leading-relaxed text-white/75 md:text-3xl">
                {t.challengeQuote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">{t.strategy}</p>
            </div>

            <div>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                {t.strategyTitle1}
                <br />
                {t.strategyTitle2}{" "}
                <span className="italic text-[#75968c]">
                  {t.strategyAccent}
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
                {t.strategyIntro}
              </p>
            </div>
          </div>

          <div className="border-t border-white/10">
            {strategyItems.map((item) => (
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

      {/* MY ROLE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">{t.role}</p>
            </div>

            <div>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                {t.roleTitle1}
                <br />
                {t.roleTitle2}{" "}
                <span className="italic text-[#75968c]">
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
                <span className="font-serif text-sm italic text-[#75968c]">
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
                <span className="italic text-[#75968c]">
                  {t.archiveAccent}
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/45">
                {t.archiveIntro}
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
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
                {activeFolder === "Website" ? (
                  <div className="w-full">
                    <div className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden border border-white/10 bg-[#050907] md:min-h-[640px]">
                      <WebsiteCarousel
                        item={emarWebsite}
                        language={language}
                      />
                    </div>

                    <div className="border-x border-b border-white/10 bg-[#0b1410] p-6">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#75968c]">
                        {emarWebsite.highlight?.[language]}
                      </p>

                      <h3 className="mt-3 font-serif text-3xl text-white">
                        {emarWebsite.title[language]}
                      </h3>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                        {emarWebsite.description[language]}
                      </p>
                    </div>
                  </div>
                ) : (
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

      {/* ASSISTED COMMERCE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">{t.assisted}</p>
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#b86f45]">
                {t.assistedLabel}
              </p>

              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                {t.assistedTitle1}
                <br />
                {t.assistedTitle2}{" "}
                <span className="italic text-[#75968c]">
                  {t.assistedAccent}
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
                {t.assistedIntro}
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-l border-t border-white/10 md:grid-cols-4">
            {assistedSteps.map((step) => (
              <article
                key={step.number}
                className="min-h-[260px] border-b border-r border-white/10 p-7"
              >
                <span className="font-serif text-sm italic text-[#75968c]">
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

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="overflow-hidden border border-white/10 bg-[#0b1410]">
              <img
                src="/media/work/emar/website/website-02.png"
                alt={
                  language === "it"
                    ? "Navigazione per categorie del sito Emar"
                    : "Emar website category navigation"
                }
                className="block h-auto w-full"
              />
            </div>

            <div className="overflow-hidden border border-white/10 bg-[#0b1410]">
              <img
                src="/media/work/emar/website/website-04.png"
                alt={
                  language === "it"
                    ? "Conversione assistita tramite WhatsApp sul sito Emar"
                    : "Emar WhatsApp assisted conversion"
                }
                className="block h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-4 border border-[#75968c]/25 bg-[#0b1410] p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[0.4fr_1fr]">
              <p className="text-xs uppercase tracking-[0.18em] text-[#75968c]">
                {t.principle}
              </p>

              <p className="max-w-3xl font-serif text-3xl leading-relaxed text-white/75 md:text-4xl">
                {t.principle1}
                <br />
                <span className="italic text-[#75968c]">
                  {t.principle2}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">{t.stack}</p>
            </div>

            <div>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                {t.stackTitle}{" "}
                <span className="italic text-[#75968c]">
                  {t.stackAccent}
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
                      className="border border-white/10 px-4 py-2.5 text-sm text-white/50 transition hover:border-[#75968c]/50 hover:text-white/80"
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

      {/* NEXT PROJECT */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="mb-6 text-sm text-white/30">{t.next}</p>

          <a
            href="/case-studies/focus-ottica"
            className="group inline-block"
          >
            <h2 className="font-serif text-6xl italic leading-[0.95] transition group-hover:text-[#75968c] md:text-8xl">
              Focus Ottica
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