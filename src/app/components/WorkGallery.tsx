"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

type Category =
  | "Content"
  | "Video"
  | "Social"
  | "Ads"
  | "Website"
  | "Email"
  | "E-commerce";

type Filter = "All" | Category;

type WorkType = "image" | "video" | "carousel" | "email";

type LocalizedText = {
  it: string;
  en: string;
};

type WorkItem = {
  id: string;
  title: LocalizedText;
  brand: string;
  description: LocalizedText;
  categories: Category[];
  type: WorkType;
  media?: string;
  slides?: string[];
  emailImages?: string[];
  hideFromAll?: boolean;
  highlight?: LocalizedText;
  websitePreview?: boolean;
};

const filters: Filter[] = [
  "All",
  "Content",
  "Video",
  "Social",
  "Ads",
  "Website",
  "Email",
  "E-commerce",
];

const filterLabels: Record<Filter, LocalizedText> = {
  All: {
    it: "Tutti",
    en: "All",
  },
  Content: {
    it: "Contenuti",
    en: "Content",
  },
  Video: {
    it: "Video",
    en: "Video",
  },
  Social: {
    it: "Social",
    en: "Social",
  },
  Ads: {
    it: "Ads",
    en: "Ads",
  },
  Website: {
    it: "Sito web",
    en: "Website",
  },
  Email: {
    it: "Email",
    en: "Email",
  },
  "E-commerce": {
    it: "E-commerce",
    en: "E-commerce",
  },
};

/* ========================================
   WORKS
======================================== */

const works: WorkItem[] = [
  /* G3M */

  {
    id: "g3m-01",
    title: {
      it: "Campagna Made in Italy",
      en: "Made in Italy Campaign",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Creatività paid social dedicata a T-shirt in 100% cotone, interamente realizzate in Italia.",
      en: "Paid social creative highlighting 100% cotton T-shirts made entirely in Italy.",
    },
    categories: ["Ads", "Content", "Social"],
    type: "image",
    media: "/media/work/g3m/work-01.webp",
  },

  {
    id: "g3m-02",
    title: {
      it: "Cose che impariamo troppo tardi",
      en: "Things We Learn Too Late",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Carosello editoriale che unisce cura di sé, identità personale e abbigliamento consapevole attraverso lo storytelling del brand.",
      en: "Editorial social carousel connecting self-care, personal identity and conscious clothing through brand storytelling.",
    },
    categories: ["Content", "Social"],
    type: "carousel",
    slides: [
      "/media/work/g3m/carosello-1.webp",
      "/media/work/g3m/carosello-2.webp",
      "/media/work/g3m/carosello-3.webp",
      "/media/work/g3m/carosello-4.webp",
      "/media/work/g3m/carosello-5.webp",
      "/media/work/g3m/carosello-6.webp",
      "/media/work/g3m/carosello-7.webp",
    ],
  },

  {
    id: "g3m-03",
    title: {
      it: "2 T-shirt a €60",
      en: "2 T-Shirts for €60",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Reel organico dedicato alla promozione 2 T-shirt a €60, valorizzando allo stesso tempo il 100% cotone e il Made in Italy.",
      en: "Organic Reel communicating G3M's 2-for-€60 offer while reinforcing the 100% cotton and Made in Italy product value.",
    },
    categories: ["Video", "Content", "Social"],
    type: "video",
    media: "/media/work/g3m/work-03.mp4",
  },

  {
    id: "g3m-04",
    title: {
      it: "Campagna Saldi",
      en: "Sale Campaign",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Video promozionale creato per comunicare i saldi stagionali attraverso un formato social diretto e incentrato sul prodotto.",
      en: "Promotional video created to communicate the seasonal sale through a direct, product-led social format.",
    },
    categories: ["Video", "Content", "Social"],
    type: "video",
    media: "/media/work/g3m/work-04.mp4",
  },

  {
    id: "g3m-05",
    title: {
      it: 'La "V" di Venerdì',
      en: 'La "V" di Venerdì',
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Carosello social organico costruito su contenuti riconoscibili e condivisibili, pensato per stimolare condivisioni, commenti e salvataggi.",
      en: "Organic social carousel built around relatable content to encourage shares, comments and saves.",
    },
    categories: ["Content", "Social"],
    type: "carousel",
    slides: [
      "/media/work/g3m/carosello-05-1.jpg",
      "/media/work/g3m/carosello-05-2.jpg",
      "/media/work/g3m/carosello-05-3.jpg",
      "/media/work/g3m/carosello-05-4.jpg",
      "/media/work/g3m/carosello-05-5.jpg",
      "/media/work/g3m/carosello-05-6.jpg",
    ],
  },

  {
    id: "g3m-06",
    title: {
      it: "Remarketing — Riduzione di prezzo",
      en: "Remarketing — Price Drop",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Creatività di remarketing pensata per comunicare sconto e soglie di prezzo regalo attraverso un messaggio diretto sulla riduzione del prezzo.",
      en: "Remarketing creative communicating the discount and gift price thresholds through a direct price-drop hook.",
    },
    categories: ["Ads", "Content"],
    type: "image",
    media: "/media/work/g3m/work-06.webp",
  },

  {
    id: "g3m-07",
    title: {
      it: "Pubblico freddo — Problema / Soluzione",
      en: "Cold Audience — Problem / Solution",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Creatività di prospecting per pubblico freddo, costruita trasformando problemi comuni della categoria in benefici chiari del prodotto e chiudendo con social proof.",
      en: "Prospecting creative designed for cold audiences, turning common category pain points into clear product benefits and closing with social proof.",
    },
    categories: ["Ads", "Content"],
    type: "image",
    media: "/media/work/g3m/work-07.webp",
  },

  {
    id: "g3m-08",
    title: {
      it: "Pubblico caldo — Conversion Ad",
      en: "Warm Audience — Conversion Ad",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Creatività orientata alla conversione per pubblico caldo, combinando visibilità del prodotto, incentivo promozionale e una CTA diretta.",
      en: "Conversion-focused creative for warm audiences, combining product visibility and a clear promotional incentive with a direct CTA.",
    },
    categories: ["Ads", "Content"],
    type: "image",
    media: "/media/work/g3m/work-08.webp",
  },

  {
    id: "g3m-09",
    title: {
      it: "Serie di contenuti Zodiac",
      en: "Zodiac Content Series",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Format organico replicabile che associa i segni zodiacali alle frasi delle T-shirt G3M, generando con continuità una risposta più forte da parte del pubblico.",
      en: "A repeatable organic format matching zodiac signs with G3M T-shirt phrases, consistently generating stronger audience response.",
    },
    categories: ["Content", "Social"],
    type: "carousel",
    highlight: {
      it: "+65% visualizzazioni e interazioni",
      en: "+65% views & interactions",
    },
    slides: [
      "/media/work/g3m/carosello-09-1.jpg",
      "/media/work/g3m/carosello-09-2.jpg",
      "/media/work/g3m/carosello-09-3.jpg",
      "/media/work/g3m/carosello-09-4.jpg",
      "/media/work/g3m/carosello-09-5.jpg",
      "/media/work/g3m/carosello-09-6.jpg",
      "/media/work/g3m/carosello-09-7.jpg",
      "/media/work/g3m/carosello-09-8.jpg",
    ],
  },

  {
    id: "g3m-10",
    title: {
      it: "3 motivi per scegliere Ranpollo",
      en: "3 Reasons to Choose Ranpollo",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Reel per pubblico caldo che rafforza il valore del Made in Italy e il posizionamento delle T-shirt come mezzo per esprimere il proprio mood.",
      en: "Warm-audience Reel reinforcing Made in Italy quality and T-shirts designed to express your mood.",
    },
    categories: ["Video", "Ads", "Content"],
    type: "video",
    media: "/media/work/g3m/work-10.mp4",
  },

  /* EMAR */

  {
    id: "emar-store-reel",
    title: {
      it: "Promozione del punto vendita",
      en: "Local Store Promotion",
    },
    brand: "Emar Ricambi",
    description: {
      it: "Reel promozionale creato per rafforzare la notorietà locale e avvicinare il punto vendita fisico al suo pubblico.",
      en: "Promotional Reel created to strengthen local awareness and bring the physical store closer to its audience.",
    },
    categories: ["Video", "Social", "Content"],
    type: "video",
    media: "/media/work/emar/emarvd-2.mp4",
  },

  {
    id: "emar-carousel-01",
    title: {
      it: "Gli essenziali per l'officina",
      en: "Workshop Essentials",
    },
    brand: "Emar Ricambi",
    description: {
      it: "Carosello educativo pensato per aiutare i clienti meno esperti a comprendere gli strumenti essenziali per l'officina, collegando poi il contenuto a una promozione Makita pertinente.",
      en: "Educational carousel helping less experienced customers understand essential workshop tools before connecting product education with a relevant Makita promotion.",
    },
    categories: ["Content", "Social"],
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
  },

  {
    id: "emar-carousel-02",
    title: {
      it: "Scegliere lo strumento giusto",
      en: "Choosing the Right Tool",
    },
    brand: "Emar Ricambi",
    description: {
      it: "Contenuto social educativo che semplifica le differenze tra gli strumenti da officina e aiuta i clienti a fare una scelta più consapevole.",
      en: "Educational social content simplifying the differences between workshop tools and helping customers make a more informed choice.",
    },
    categories: ["Content", "Social"],
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
  },

  {
    id: "emar-website",
    title: {
      it: "Esperienza di vendita assistita",
      en: "Assisted Commerce Experience",
    },
    brand: "Emar Ricambi",
    description: {
      it: "Sito orientato al prodotto che combina una navigazione in stile e-commerce con assistenza diretta via WhatsApp per i clienti che necessitano di supporto tecnico prima dell'acquisto.",
      en: "A product-led website combining e-commerce-style discovery with direct WhatsApp assistance for customers who need technical guidance before purchasing.",
    },
    categories: ["Website"],
    type: "carousel",
    hideFromAll: true,
    websitePreview: true,
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
  },

  /* FOCUS OTTICA */

  {
    id: "focus-positioning",
    title: {
      it: "Stop Looking, Start Seeing",
      en: "Stop Looking, Start Seeing",
    },
    brand: "Focus Ottica",
    description: {
      it: "Creatività social iniziale pensata per presentare Focus Ottica come una boutique eyewear più giovane e orientata alla moda, distinguendola dal tradizionale negozio di ottica.",
      en: "Early social creative introducing Focus Ottica as a younger, fashion-oriented eyewear boutique rather than another traditional optical store.",
    },
    categories: ["Content", "Social"],
    type: "image",
    media: "/media/work/focus-ottica/focus-social-03.jpg",
    highlight: {
      it: "Posizionamento",
      en: "Positioning",
    },
  },

  {
    id: "focus-store-reveal",
    title: {
      it: "Store Reveal",
      en: "Store Reveal",
    },
    brand: "Focus Ottica",
    description: {
      it: "Reel post-lancio che mostra la boutique fisica e collega l'identità introdotta online con l'esperienza reale del punto vendita Focus Ottica.",
      en: "Post-launch Reel revealing the physical boutique and connecting the identity introduced online with the real Focus Ottica retail experience.",
    },
    categories: ["Video", "Social", "Content"],
    type: "video",
    media: "/media/work/focus-ottica/focus-reel-02.mp4",
    highlight: {
      it: "Lancio",
      en: "Launch",
    },
  },

  {
    id: "focus-editorial-shoot",
    title: {
      it: "Shooting editoriale eyewear",
      en: "Eyewear Editorial Shooting",
    },
    brand: "Focus Ottica",
    description: {
      it: "Direzione creativa e produzione di uno shooting editoriale eyewear, presentando il prodotto attraverso un linguaggio visivo fashion-first invece della tradizionale fotografia da ottica.",
      en: "Creative direction and production of an editorial eyewear shoot presenting the product through a fashion-first visual language rather than traditional optical retail photography.",
    },
    categories: ["Content", "Social"],
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
  },

  /* G3M — E-COMMERCE */

  {
    id: "g3m-ecommerce-01",
    title: {
      it: "Homepage E-commerce",
      en: "E-commerce Homepage",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Homepage progettata e realizzata end-to-end: struttura e navigazione e-commerce, direzione visiva e mockup prodotto su modelli generati con AI.",
      en: "Homepage designed and built end-to-end, from e-commerce structure and navigation to visual direction and AI-generated product model mockups.",
    },
    categories: ["E-commerce"],
    type: "image",
    media: "/media/work/g3m/website-01.jpg",
    hideFromAll: true,
  },

  {
    id: "g3m-ecommerce-02",
    title: {
      it: "Selettore categorie in Homepage",
      en: "Homepage Category Selector",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Modulo interattivo in homepage progettato per migliorare la scoperta dei prodotti attraverso una navigazione visiva.",
      en: "Interactive homepage selection module designed to improve product discovery through visual navigation.",
    },
    categories: ["E-commerce"],
    type: "image",
    media: "/media/work/g3m/website-02.jpg",
    hideFromAll: true,
  },

  {
    id: "g3m-ecommerce-03",
    title: {
      it: "Pagina Collezione E-commerce",
      en: "E-commerce Collection Page",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Pagina collezione che integra filtri, ordinamento, varianti colore e una griglia prodotto coerente con immagini dei modelli generate tramite AI.",
      en: "Collection page combining filtering, sorting, colour variants and a consistent product grid with AI-generated model imagery.",
    },
    categories: ["E-commerce"],
    type: "image",
    media: "/media/work/g3m/website-03.jpg",
    hideFromAll: true,
  },

  {
    id: "g3m-ecommerce-04",
    title: {
      it: "Pagina Prodotto",
      en: "Product Detail Page",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Pagina prodotto orientata alla conversione che combina immagini, social proof, opzioni di pagamento e selezione delle varianti.",
      en: "Conversion-focused product page combining product imagery, social proof, payment options and variant selection.",
    },
    categories: ["E-commerce"],
    type: "image",
    media: "/media/work/g3m/website-04.jpg",
    hideFromAll: true,
  },

  /* G3M — EMAIL */

  {
    id: "g3m-email-01",
    title: {
      it: "Segmento Curvy — Brand Positioning",
      en: "Curvy Segment — Brand Positioning",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Email segmentata che parte da un messaggio di brand inclusivo per guidare successivamente i lettori verso le collezioni Regular e Curvy.",
      en: "Segmented email using an inclusive brand message before guiding readers toward Regular and Curvy collections.",
    },
    categories: ["Email"],
    type: "email",
    hideFromAll: true,
    media: "/media/work/g3m/email-01.jpg",
    emailImages: ["/media/work/g3m/email-01.jpg"],
  },

  {
    id: "g3m-email-02",
    title: {
      it: "Festa della Mamma — Campagna promozionale",
      en: "Mother's Day — Promotional Campaign",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Campagna stagionale orientata alla conversione che combina urgenza, incentivo a tempo, scoperta di prodotti da regalo e social proof.",
      en: "Seasonal conversion campaign combining urgency, a time-limited incentive, gift-oriented discovery and social proof.",
    },
    categories: ["Email"],
    type: "email",
    hideFromAll: true,
    media: "/media/work/g3m/email-02.jpg",
    emailImages: ["/media/work/g3m/email-02.jpg"],
  },

  {
    id: "g3m-email-03",
    title: {
      it: "Clienti VIP — Selezione curata",
      en: "VIP Customers — Curated Selection",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Email di retention per clienti ad alta affinità, costruita attorno a riconoscimento, valori del brand e scoperta di una selezione curata di prodotti.",
      en: "Retention email for high-affinity customers built around recognition, brand values and curated product discovery.",
    },
    categories: ["Email"],
    type: "email",
    hideFromAll: true,
    media: "/media/work/g3m/email-03.jpg",
    emailImages: ["/media/work/g3m/email-03.jpg"],
  },

  {
    id: "g3m-email-04",
    title: {
      it: "Estate 2026 — Accesso anticipato",
      en: "Summer 2026 — Early Access",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Campagna di lancio riservata agli iscritti che combina accesso anticipato, incentivo dedicato alla prevendita e scoperta dei prodotti per categoria.",
      en: "Subscriber-exclusive launch campaign combining early access, a dedicated presale incentive and category-led product discovery.",
    },
    categories: ["Email"],
    type: "email",
    hideFromAll: true,
    media: "/media/work/g3m/email-04-1.jpg",
    emailImages: [
      "/media/work/g3m/email-04-1.jpg",
      "/media/work/g3m/email-04-2.jpg",
    ],
  },

  {
    id: "g3m-email-05",
    title: {
      it: "Oltre le T-shirt — Espansione di categoria",
      en: "Beyond T-Shirts — Category Expansion",
    },
    brand: "G3M / Ranpollo",
    description: {
      it: "Campagna di cross-selling dedicata agli accessori, pensata per ampliare la scoperta dei prodotti oltre la categoria principale delle T-shirt.",
      en: "Cross-selling campaign introducing accessories and expanding product discovery beyond the core T-shirt category.",
    },
    categories: ["Email"],
    type: "email",
    hideFromAll: true,
    media: "/media/work/g3m/email-05.jpg",
    emailImages: ["/media/work/g3m/email-05.jpg"],
  },
];

/* ========================================
   CAROUSEL
======================================== */

function CarouselMedia({
  work,
  language,
}: {
  work: WorkItem;
  language: "it" | "en";
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!work.slides?.length) {
    return null;
  }

  const previous = () => {
    setCurrentSlide((current) =>
      current === 0 ? work.slides!.length - 1 : current - 1,
    );
  };

  const next = () => {
    setCurrentSlide((current) =>
      current === work.slides!.length - 1 ? 0 : current + 1,
    );
  };

  const controls = (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          previous();
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
          next();
        }}
        aria-label={
          language === "it" ? "Slide successiva" : "Next slide"
        }
        className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center border border-white/20 bg-black/75 text-sm text-white backdrop-blur-md transition md:h-10 md:w-10 md:opacity-0 md:group-hover/carousel:opacity-100"
      >
        →
      </button>

      <span className="pointer-events-none absolute right-3 top-3 z-30 border border-white/15 bg-black/75 px-3 py-2 text-[10px] text-white/70 backdrop-blur-md md:opacity-0 md:transition md:group-hover/carousel:opacity-100">
        {currentSlide + 1} / {work.slides.length}
      </span>
    </>
  );

  if (work.websitePreview) {
    return (
      <div className="group/carousel relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#050907]">
        <img
          src={work.slides[currentSlide]}
          alt={`${work.title[language]} — ${
            language === "it" ? "schermata" : "screen"
          } ${currentSlide + 1}`}
          className="h-full w-full object-contain"
        />

        {controls}
      </div>
    );
  }

  return (
    <div className="group/carousel relative overflow-hidden bg-black">
      <img
        src={work.slides[currentSlide]}
        alt={`${work.title[language]} — slide ${currentSlide + 1}`}
        className="block h-auto w-full"
      />

      {controls}
    </div>
  );
}

/* ========================================
   WORK CARD
======================================== */

function WorkCard({
  work,
  language,
  onOpenEmail,
}: {
  work: WorkItem;
  language: "it" | "en";
  onOpenEmail: (work: WorkItem) => void;
}) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const hideOverlay = work.type === "video" && videoPlaying;

  const typeLabels: Record<WorkType, LocalizedText> = {
    image: {
      it: "Immagine",
      en: "Image",
    },
    video: {
      it: "Video",
      en: "Video",
    },
    carousel: {
      it: "Carosello",
      en: "Carousel",
    },
    email: {
      it: "Email",
      en: "Email",
    },
  };

  return (
    <article className="group relative w-full self-start overflow-hidden border border-white/10 bg-[#0b1410]">
      {work.type === "carousel" ? (
        <CarouselMedia work={work} language={language} />
      ) : work.type === "video" && work.media ? (
        <video
          controls
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setVideoPlaying(true)}
          onPause={() => setVideoPlaying(false)}
          onEnded={() => setVideoPlaying(false)}
          className="relative z-0 block h-auto w-full bg-black"
        >
          <source src={work.media} type="video/mp4" />
          {language === "it"
            ? "Il tuo browser non supporta i video HTML5."
            : "Your browser does not support HTML5 video."}
        </video>
      ) : work.type === "email" && work.media ? (
        <button
          type="button"
          onClick={() => onOpenEmail(work)}
          aria-label={
            language === "it"
              ? `Apri ${work.title.it}`
              : `Open ${work.title.en}`
          }
          className="block w-full cursor-zoom-in bg-[#050907] text-left"
        >
          <div className="aspect-square w-full overflow-hidden">
            <img
              src={work.media}
              alt={work.title[language]}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </button>
      ) : work.media ? (
        <img
          src={work.media}
          alt={work.title[language]}
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
          {typeLabels[work.type][language]}
        </span>
      </div>

      {work.highlight && (
        <div
          className={`pointer-events-none absolute right-4 top-4 z-20 transition duration-300 md:group-hover:-translate-y-2 md:group-hover:opacity-0 ${
            hideOverlay ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="border border-[#75968c]/50 bg-black/75 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.1em] text-[#a9c2ba] backdrop-blur-md">
            {work.highlight[language]}
          </span>
        </div>
      )}

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4 transition duration-300 sm:p-5 md:group-hover:translate-y-4 md:group-hover:opacity-0 ${
          hideOverlay ? "translate-y-4 opacity-0" : "opacity-100"
        }`}
      >
        <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-white/40">
          {work.brand}
        </p>

        <h3 className="font-serif text-lg font-bold leading-tight text-white sm:text-xl">
          {work.title[language]}
        </h3>

        <p className="mt-3 text-xs leading-5 text-white/75">
          {work.description[language]}
        </p>
      </div>
    </article>
  );
}

/* ========================================
   MAIN
======================================== */

export default function WorkGallery() {
  const { language } = useLanguage();

  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [openEmail, setOpenEmail] = useState<WorkItem | null>(null);

  const filteredWorks =
    activeFilter === "All"
      ? works.filter((work) => !work.hideFromAll)
      : works.filter((work) => work.categories.includes(activeFilter));

  useEffect(() => {
    if (!openEmail) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenEmail(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [openEmail]);

  return (
    <>
      <section>
        {/* FILTERS */}
        <div className="-mx-1 mb-10 overflow-x-auto px-1 pb-2 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3">
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={active}
                  className={`shrink-0 touch-manipulation border px-3 py-2 text-xs transition sm:border-0 sm:px-0 sm:py-0 sm:text-sm ${
                    active
                      ? "border-[#75968c]/50 bg-[#75968c]/10 text-[#e8e5dc]"
                      : "border-white/10 text-white/40 hover:text-white/70"
                  }`}
                >
                  {filterLabels[filter][language]}
                </button>
              );
            })}
          </div>
        </div>

        {/* GALLERY */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              language={language}
              onOpenEmail={setOpenEmail}
            />
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <div className="mx-auto max-w-5xl border border-white/10 py-20 text-center">
            <p className="font-serif text-2xl text-white/35">
              {language === "it"
                ? "Altri lavori in arrivo."
                : "More work coming soon."}
            </p>
          </div>
        )}
      </section>

      {/* EMAIL MODAL */}
      {openEmail && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 px-3 py-5 backdrop-blur-md sm:px-4 sm:py-10 md:px-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setOpenEmail(null);
            }
          }}
        >
          <div className="mx-auto max-w-[680px]">
            <div className="sticky top-3 z-20 mb-3 flex justify-end sm:top-4 sm:mb-4">
              <button
                type="button"
                onClick={() => setOpenEmail(null)}
                className="flex h-11 w-11 touch-manipulation items-center justify-center border border-white/15 bg-black/90 text-xl text-white/70 backdrop-blur-md transition hover:border-white/40 hover:text-white"
                aria-label={
                  language === "it" ? "Chiudi email" : "Close email"
                }
              >
                ×
              </button>
            </div>

            <div className="overflow-hidden border border-white/10 bg-white">
              {openEmail.emailImages?.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${openEmail.title[language]} — ${
                    language === "it" ? "parte" : "part"
                  } ${index + 1}`}
                  className="block h-auto w-full"
                />
              ))}
            </div>

            <div className="border-x border-b border-white/10 bg-[#08100d] p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#75968c]">
                {openEmail.brand}
              </p>

              <h3 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
                {openEmail.title[language]}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                {openEmail.description[language]}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}