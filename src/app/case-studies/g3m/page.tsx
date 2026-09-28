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
  | "Ads"
  | "E-commerce"
  | "Email"
  | "Video"
  | "Carousel";

type MediaItem = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  type: "image" | "video" | "carousel" | "stacked";
  media?: string;
  slides?: string[];
  mediaParts?: string[];
  highlight?: LocalizedText;
};

type StrategyItem = {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
  link?: boolean;
};

type RoleItem = {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
  link?: boolean;
};

const folderLabels: Record<FolderName, LocalizedText> = {
  Content: {
    it: "Contenuti",
    en: "Content",
  },
  Social: {
    it: "Social",
    en: "Social",
  },
  Ads: {
    it: "Ads",
    en: "Ads",
  },
  "E-commerce": {
    it: "E-commerce",
    en: "E-commerce",
  },
  Email: {
    it: "Email",
    en: "Email",
  },
  Video: {
    it: "Video",
    en: "Video",
  },
  Carousel: {
    it: "Caroselli",
    en: "Carousel",
  },
};

const folders: {
  name: FolderName;
  number: string;
}[] = [
  { name: "Content", number: "01" },
  { name: "Social", number: "02" },
  { name: "Ads", number: "03" },
  { name: "E-commerce", number: "04" },
  { name: "Email", number: "05" },
  { name: "Video", number: "06" },
  { name: "Carousel", number: "07" },
];

/* ========================================
   CONTENT / SOCIAL / ADS
======================================== */

const work01: MediaItem = {
  id: "work-01",
  title: {
    it: "Campagna Made in Italy",
    en: "Made in Italy Campaign",
  },
  description: {
    it: "Creatività paid social dedicata a T-shirt in 100% cotone, interamente realizzate in Italia.",
    en: "Paid social creative highlighting 100% cotton T-shirts made entirely in Italy.",
  },
  type: "image",
  media: "/media/work/g3m/work-01.webp",
};

const work02: MediaItem = {
  id: "work-02",
  title: {
    it: "Cose che impariamo troppo tardi",
    en: "Things We Learn Too Late",
  },
  description: {
    it: "Carosello editoriale che collega cura di sé, identità personale e abbigliamento consapevole attraverso lo storytelling del brand.",
    en: "Editorial social carousel connecting self-care, personal identity and conscious clothing through brand storytelling.",
  },
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
};

const work03: MediaItem = {
  id: "work-03",
  title: {
    it: "2 T-shirt a €60",
    en: "2 T-Shirts for €60",
  },
  description: {
    it: "Reel organico dedicato all'offerta 2 T-shirt a €60, rafforzando allo stesso tempo il valore del 100% cotone e del Made in Italy.",
    en: "Organic Reel communicating G3M's 2-for-€60 offer while reinforcing the 100% cotton and Made in Italy product value.",
  },
  type: "video",
  media: "/media/work/g3m/work-03.mp4",
};

const work04: MediaItem = {
  id: "work-04",
  title: {
    it: "Campagna Saldi",
    en: "Sale Campaign",
  },
  description: {
    it: "Video promozionale creato per comunicare i saldi stagionali attraverso un formato social diretto e incentrato sul prodotto.",
    en: "Promotional video created to communicate the seasonal sale through a direct, product-led social format.",
  },
  type: "video",
  media: "/media/work/g3m/work-04.mp4",
};

const work05: MediaItem = {
  id: "work-05",
  title: {
    it: 'La "V" di Venerdì',
    en: 'La "V" di Venerdì',
  },
  description: {
    it: "Carosello social organico costruito su contenuti riconoscibili e condivisibili, pensato per stimolare condivisioni, commenti e salvataggi.",
    en: "Organic social carousel built around relatable content to encourage shares, comments and saves.",
  },
  type: "carousel",
  slides: [
    "/media/work/g3m/carosello-05-1.jpg",
    "/media/work/g3m/carosello-05-2.jpg",
    "/media/work/g3m/carosello-05-3.jpg",
    "/media/work/g3m/carosello-05-4.jpg",
    "/media/work/g3m/carosello-05-5.jpg",
    "/media/work/g3m/carosello-05-6.jpg",
  ],
};

const work06: MediaItem = {
  id: "work-06",
  title: {
    it: "Remarketing — Riduzione di prezzo",
    en: "Remarketing — Price Drop",
  },
  description: {
    it: "Creatività di remarketing che comunica lo sconto e le soglie di prezzo regalo attraverso un messaggio diretto sulla riduzione del prezzo.",
    en: "Remarketing creative communicating the discount and gift price thresholds through a direct price-drop hook.",
  },
  type: "image",
  media: "/media/work/g3m/work-06.webp",
};

const work07: MediaItem = {
  id: "work-07",
  title: {
    it: "Pubblico freddo — Problema / Soluzione",
    en: "Cold Audience — Problem / Solution",
  },
  description: {
    it: "Creatività di prospecting per pubblico freddo, trasformando problemi comuni della categoria in benefici chiari del prodotto e chiudendo con social proof.",
    en: "Prospecting creative designed for cold audiences, turning common category pain points into clear product benefits and closing with social proof.",
  },
  type: "image",
  media: "/media/work/g3m/work-07.webp",
};

const work08: MediaItem = {
  id: "work-08",
  title: {
    it: "Pubblico caldo — Conversion Ad",
    en: "Warm Audience — Conversion Ad",
  },
  description: {
    it: "Creatività orientata alla conversione per pubblico caldo, combinando visibilità del prodotto, messaggi differenziati e uno sconto del 20% con una CTA diretta.",
    en: "Conversion-focused creative for warm audiences, combining product visibility, gender-based messaging and a clear 20% discount with a direct CTA.",
  },
  type: "image",
  media: "/media/work/g3m/work-08.webp",
};

const work09: MediaItem = {
  id: "work-09",
  title: {
    it: "Serie di contenuti Zodiac",
    en: "Zodiac Content Series",
  },
  description: {
    it: "Format organico replicabile che associa i segni zodiacali alle frasi delle T-shirt G3M. Dopo aver validato l'idea, la serie ha generato con continuità +65% di visualizzazioni e interazioni per post.",
    en: "A repeatable organic content format matching zodiac signs with G3M T-shirt phrases. After validating the angle, the series consistently generated +65% views and interactions per post.",
  },
  type: "carousel",
  highlight: {
    it: "+65% visualizzazioni e interazioni",
    en: "+65% views & interactions",
  },
  slides: [
    "/media/work/g3m/carosello-09-1.webp",
    "/media/work/g3m/carosello-09-2.webp",
    "/media/work/g3m/carosello-09-3.webp",
    "/media/work/g3m/carosello-09-4.webp",
    "/media/work/g3m/carosello-09-5.webp",
    "/media/work/g3m/carosello-09-6.webp",
    "/media/work/g3m/carosello-09-7.webp",
    "/media/work/g3m/carosello-09-8.webp",
  ],
};

const work10: MediaItem = {
  id: "work-10",
  title: {
    it: "3 motivi per scegliere Ranpollo",
    en: "3 Reasons to Choose Ranpollo",
  },
  description: {
    it: "Reel per pubblico caldo costruito attorno a tre motivi per scegliere Ranpollo, rafforzando il valore del Made in Italy e delle T-shirt pensate per esprimere il proprio mood.",
    en: "Warm-audience Reel built around three reasons to choose Ranpollo, reinforcing Made in Italy quality and T-shirts designed to express your mood.",
  },
  type: "video",
  media: "/media/work/g3m/work-10.mp4",
};

/* ========================================
   E-COMMERCE
======================================== */

const ecommerce01: MediaItem = {
  id: "ecommerce-01",
  title: {
    it: "Homepage E-commerce",
    en: "E-commerce Homepage",
  },
  description: {
    it: "Homepage progettata e realizzata end-to-end: struttura e navigazione e-commerce, direzione visiva e mockup prodotto su modelli generati con AI.",
    en: "Homepage designed and built end-to-end, from e-commerce structure and navigation to visual direction and AI-generated product model mockups.",
  },
  type: "image",
  media: "/media/work/g3m/website-01.jpg",
};

const ecommerce02: MediaItem = {
  id: "ecommerce-02",
  title: {
    it: "Selettore categorie in Homepage",
    en: "Homepage Category Selector",
  },
  description: {
    it: "Modulo interattivo in homepage progettato per guidare gli utenti verso le principali categorie e migliorare la scoperta dei prodotti attraverso una navigazione visiva.",
    en: "Interactive homepage selection module designed to guide users toward key product categories and improve product discovery through visual navigation.",
  },
  type: "image",
  media: "/media/work/g3m/website-02.jpg",
};

const ecommerce03: MediaItem = {
  id: "ecommerce-03",
  title: {
    it: "Pagina Collezione E-commerce",
    en: "E-commerce Collection Page",
  },
  description: {
    it: "Pagina collezione progettata per favorire la scoperta dei prodotti, combinando filtri, ordinamento, varianti colore e una griglia coerente con immagini dei modelli generate tramite AI.",
    en: "Collection page designed and built to support product discovery, combining filtering, sorting, colour variants and a consistent product grid with AI-generated model imagery.",
  },
  type: "image",
  media: "/media/work/g3m/website-03.jpg",
};

const ecommerce04: MediaItem = {
  id: "ecommerce-04",
  title: {
    it: "Pagina Prodotto",
    en: "Product Detail Page",
  },
  description: {
    it: "Pagina prodotto progettata attorno alla conversione, combinando immagini, social proof, opzioni di pagamento flessibili, selezione delle varianti e un percorso d'acquisto chiaro.",
    en: "Product page designed and built around conversion, combining product imagery, social proof, flexible payment options, variant selection and a clear purchase flow.",
  },
  type: "image",
  media: "/media/work/g3m/website-04.jpg",
};

/* ========================================
   EMAIL
======================================== */

const email01: MediaItem = {
  id: "email-01",
  title: {
    it: "Segmento Curvy — Posizionamento del brand",
    en: "Curvy Segment — Brand Positioning",
  },
  description: {
    it: "Email segmentata rivolta a clienti con uno storico di acquisti Curvy, utilizzando un messaggio inclusivo per spostare l'attenzione dalla taglia all'espressione personale e guidare poi verso le collezioni Regular e Curvy.",
    en: "Segmented email targeting customers with a history of curvy-size purchases, using an inclusive brand message to shift the focus from body size to self-expression before guiding readers toward the Regular and Curvy collections.",
  },
  type: "image",
  media: "/media/work/g3m/email-01.jpg",
};

const email02: MediaItem = {
  id: "email-02",
  title: {
    it: "Festa della Mamma — Campagna promozionale",
    en: "Mother's Day — Promotional Campaign",
  },
  description: {
    it: "Campagna stagionale orientata alla conversione per la Festa della Mamma, combinando urgenza, incentivo a tempo, scoperta di prodotti da regalo e social proof.",
    en: "Seasonal conversion campaign built around Mother's Day, combining urgency, a time-limited incentive, gift-oriented product discovery and social proof to guide customers from occasion awareness to purchase.",
  },
  type: "image",
  media: "/media/work/g3m/email-02.jpg",
};

const email03: MediaItem = {
  id: "email-03",
  title: {
    it: "Clienti VIP — Selezione curata",
    en: "VIP Customers — Curated Selection",
  },
  description: {
    it: "Email di retention rivolta ai clienti ad alta affinità con una selezione esclusiva di prodotti, utilizzando riconoscimento, valori del brand e rilevanza personale per favorire il riacquisto senza dipendere dagli sconti.",
    en: "Retention email targeting high-affinity customers with an exclusive curated product selection, using recognition, brand values and personal relevance to drive repeat purchase without relying on discounts.",
  },
  type: "image",
  media: "/media/work/g3m/email-03.jpg",
};

const email04: MediaItem = {
  id: "email-04",
  title: {
    it: "Estate 2026 — Accesso anticipato",
    en: "Summer 2026 — Early Access",
  },
  description: {
    it: "Campagna di lancio riservata agli iscritti con accesso anticipato alla collezione Estate 2026, incentivo dedicato alla prevendita e scoperta dei prodotti per categoria.",
    en: "Subscriber-exclusive launch campaign giving early access to the Summer 2026 collection, combining exclusivity, a dedicated presale incentive and category-led product discovery to drive first-wave sales.",
  },
  type: "stacked",
  mediaParts: [
    "/media/work/g3m/email-04-1.jpg",
    "/media/work/g3m/email-04-2.jpg",
  ],
};

const email05: MediaItem = {
  id: "email-05",
  title: {
    it: "Oltre le T-shirt — Espansione di categoria",
    en: "Beyond T-Shirts — Category Expansion",
  },
  description: {
    it: "Campagna di cross-selling che introduce gli accessori ai clienti esistenti, utilizzando storytelling e product education per ampliare la scoperta oltre le T-shirt.",
    en: "Cross-selling campaign introducing accessories to existing customers, using brand storytelling and product education to expand discovery beyond T-shirts and increase the range of products considered.",
  },
  type: "image",
  media: "/media/work/g3m/email-05.jpg",
};

/* ========================================
   FOLDER CONTENT
======================================== */

const folderContent: Record<FolderName, MediaItem[]> = {
  Content: [
    work01,
    work02,
    work03,
    work04,
    work05,
    work06,
    work07,
    work08,
    work09,
    work10,
  ],
  Social: [work01, work02, work03, work04, work05, work09],
  Ads: [work01, work06, work07, work08, work10],
  "E-commerce": [
    ecommerce01,
    ecommerce02,
    ecommerce03,
    ecommerce04,
  ],
  Email: [email01, email02, email03, email04, email05],
  Video: [work03, work04, work10],
  Carousel: [work02, work05, work09],
};

/* ========================================
   STRATEGY
======================================== */

const strategyItems: StrategyItem[] = [
  {
    number: "01",
    title: {
      it: "Costruire le fondamenta del brand",
      en: "Build the brand foundation",
    },
    description: {
      it: "Ho definito buyer personas, posizionamento, identità visiva, palette colori, tipografia e tone of voice per creare una base riconoscibile in ogni punto di contatto con il cliente.",
      en: "Defined buyer personas, positioning, visual identity, colour palette, typography and tone of voice to create a recognisable foundation across every customer touchpoint.",
    },
  },
  {
    number: "02",
    title: {
      it: "Collegare l'ecosistema",
      en: "Connect the ecosystem",
    },
    description: {
      it: "Ho allineato contenuti organici, creatività paid, email ed e-commerce agli stessi principi visivi e comunicativi, riducendo la distanza tra acquisizione e l'esperienza incontrata dal cliente dopo il click.",
      en: "Aligned organic content, paid creative, email and e-commerce around the same visual and communication principles, reducing the gap between acquisition and the experience customers encountered after the click.",
    },
  },
  {
    number: "03",
    title: {
      it: "Trasformare i lanci in percorsi",
      en: "Turn launches into journeys",
    },
    description: {
      it: "Ho ricostruito il processo di lancio attorno alla creazione di attesa nel pre-lancio, utilizzando teaser, sondaggi, partecipazione della community e incentivi per gli iscritti prima della fase di lancio e conversione.",
      en: "Rebuilt the launch process around pre-launch anticipation, using teasers, polls, community participation and subscriber incentives before moving into launch and conversion communication.",
    },
  },
  {
    number: "04",
    title: {
      it: "Lasciare che il comportamento del pubblico guidi le decisioni",
      en: "Let audience behaviour shape decisions",
    },
    description: {
      it: "Ho utilizzato performance dei contenuti e risposta dei clienti per individuare pattern replicabili. Il testing è diventato uno strumento per validare le idee prima di trasformarle in decisioni creative e di prodotto più ampie.",
      en: "Used content performance and customer response to identify repeatable patterns. Testing became a way to validate ideas before turning them into larger creative and product decisions.",
    },
    link: true,
  },
  {
    number: "05",
    title: {
      it: "Costruire per la retention, non solo per l'acquisizione",
      en: "Build for retention, not only acquisition",
    },
    description: {
      it: "Ho riprogettato il CRM attorno a segmentazione e customer journey omnicanale, collegando interazioni social, acquisizione newsletter, accesso anticipato, meccaniche di voto, scoperta prodotto e comunicazioni di riacquisto senza dipendere esclusivamente dagli sconti.",
      en: "Reworked CRM around segmentation and omnichannel journeys, connecting social interactions with newsletter acquisition, early access, voting mechanics, product discovery and repeat-purchase communication rather than relying exclusively on discounts.",
    },
  },
];

/* ========================================
   ROLE
======================================== */

const roleItems: RoleItem[] = [
  {
    number: "01",
    title: {
      it: "Strategia Marketing & Brand",
      en: "Marketing Strategy & Brand",
    },
    description: {
      it: "Struttura marketing, buyer personas, posizionamento, direzione del brand, strategia di lancio e pianificazione cross-channel.",
      en: "Marketing structure, buyer personas, positioning, brand direction, launch strategy and cross-channel planning.",
    },
  },
  {
    number: "02",
    title: {
      it: "Creative & Content",
      en: "Creative & Content",
    },
    description: {
      it: "Direzione creativa e produzione operativa per social organico, paid media, email ed e-commerce, inclusi concept, copy, graphic design, scripting video, registrazione ed editing.",
      en: "Creative direction and hands-on production across organic social, paid media, email and e-commerce — including concepts, copy, graphic design, video scripting, recording and editing.",
    },
  },
  {
    number: "03",
    title: {
      it: "E-commerce & CRO",
      en: "E-commerce & CRO",
    },
    description: {
      it: "Redesign completo di Shopify: architettura dell'informazione, navigazione, copy, sistema visivo, scoperta prodotto ed esperienza di conversione, insieme a produzione di immagini assistita dall'AI e integrata con Adobe Photoshop.",
      en: "Complete Shopify redesign covering information architecture, navigation, copy, visual system, product discovery and conversion experience, alongside AI-assisted image production integrated with Adobe Photoshop.",
    },
  },
  {
    number: "04",
    title: {
      it: "CRM & Retention",
      en: "CRM & Retention",
    },
    description: {
      it: "Ristrutturazione dei flow Klaviyo, strategia campagne, segmentazione e meccaniche di acquisizione omnicanale progettate per migliorare engagement, conversione e riacquisto.",
      en: "Klaviyo flow restructuring, campaign strategy, segmentation and omnichannel acquisition mechanics designed to improve engagement, conversion and repeat purchase.",
    },
  },
  {
    number: "05",
    title: {
      it: "Prodotto & Customer Insights",
      en: "Product & Customer Insights",
    },
    description: {
      it: "Ho utilizzato insight comportamentali e dati dei contenuti per orientare decisioni di prodotto, tra cui nuove colorazioni, varianti di T-shirt, la proposta Curvy con scollo a V e nuovi concept di collezione.",
      en: "Used behavioural and content insights to inform product decisions, including new colourways, T-shirt variants, the V-neck Curvy proposition and new collection concepts.",
    },
    link: true,
  },
  {
    number: "06",
    title: {
      it: "Team & Creative Leadership",
      en: "Team & Creative Leadership",
    },
    description: {
      it: "Collaborazione continuativa con il team paid media per allineare strategia e produzione creativa, insieme alla gestione e direzione di una risorsa dedicata all'email marketing durante l'espansione della struttura marketing.",
      en: "Ongoing collaboration with the paid media team to align strategy and creative production, alongside the management and direction of a dedicated email marketing resource as the marketing structure expanded.",
    },
  },
];

/* ========================================
   STACK
======================================== */

const stackGroups = [
  {
    title: {
      it: "E-commerce & Analytics",
      en: "E-commerce & Analytics",
    },
    tools: [
      "Shopify",
      "Google Analytics",
      "Google Search Console",
      "Microsoft Clarity",
    ],
  },
  {
    title: {
      it: "CRM & Marketing",
      en: "CRM & Marketing",
    },
    tools: ["Klaviyo", "Meta Business Suite", "TikTok Studio"],
  },
  {
    title: {
      it: "Creatività",
      en: "Creative",
    },
    tools: ["Adobe Creative Suite", "Figma", "Canva", "CapCut"],
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
      it: "Collaborazione & Produttività",
      en: "Collaboration & Productivity",
    },
    tools: ["Slack", "Google Workspace", "Microsoft Office"],
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
          stacked: "email",
        }[item.type]
      : {
          image: "image",
          video: "video",
          carousel: "carousel",
          stacked: "email",
        }[item.type];

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
      ) : item.type === "stacked" && item.mediaParts ? (
        <div className="w-full">
          {item.mediaParts.map((part, index) => (
            <img
              key={part}
              src={part}
              alt={`${item.title[language]} — ${
                language === "it" ? "parte" : "part"
              } ${index + 1}`}
              className="block h-auto w-full"
            />
          ))}
        </div>
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

export default function G3MCaseStudy() {
  const { language } = useLanguage();

  const [activeFolder, setActiveFolder] =
    useState<FolderName>("Content");

  const activeItems = folderContent[activeFolder];

  const t =
    language === "it"
      ? {
          back: "← Torna ai progetti",
          caseStudy: "Case Study",
          heroTitle1: "Crescita, e-commerce",
          heroTitle2: "& retention.",
          timeframe: "Periodo",
          timeframeValue: "2024 — Oggi",
          brand: "Brand",
          brandValue: "Moda femminile",
          role: "Ruolo",
          overview: "01 — Panoramica",
          overviewTitle1: "Da un marketing frammentato a un",
          overviewTitleAccent: "sistema di crescita connesso.",
          overviewP1:
            "G3M è l'azienda dietro Ranpollo, brand italiano di moda femminile e-commerce costruito attorno a capi espressivi e a una forte identità Made in Italy.",
          overviewP2:
            "Sono entrato in una fase in cui il brand aveva un buon potenziale di prodotto, ma mancava una struttura marketing coerente. La visibilità social era limitata, la comunicazione tra i canali era frammentata, le performance CRM erano deboli e l'esperienza e-commerce doveva essere ricostruita attorno a un brand e a un customer journey più chiari.",
          overviewP3:
            "Il mio ruolo si è evoluto dall'esecuzione operativa alla definizione e al coordinamento dell'intero ecosistema marketing, collegando brand, contenuti, e-commerce, CRM, paid media e sviluppo prodotto all'interno di un'unica strategia di crescita.",
          challenge: "02 — La sfida",
          challengeTitle1: "Il problema non era un singolo canale.",
          challengeTitle2: "Era l'assenza di un",
          challengeAccent: "sistema.",
          challengeP1:
            "Le attività marketing di Ranpollo esistevano, ma non lavoravano ancora come un unico ecosistema. Gli account social soffrivano di una visibilità limitata a seguito di pratiche precedenti, il brand non aveva un'identità visiva e verbale definita, la produzione di contenuti non seguiva un processo coerente, le performance email erano deboli e l'esperienza Shopify non era strutturata attorno a SEO, scoperta prodotto e conversione.",
          challengeP2:
            "Anche i lanci di prodotto mancavano di una struttura di comunicazione coordinata, rendendo difficile creare attesa prima dell'uscita e mantenere il momentum nelle fasi successive.",
          challengeQuote:
            "La sfida andava oltre il miglioramento dei singoli canali: significava creare le fondamenta di un sistema marketing coerente, misurabile e scalabile.",
          strategy: "03 — La strategia",
          strategyTitle1: "Costruire le fondamenta.",
          strategyTitle2: "Poi",
          strategyAccent: "collegare i punti.",
          strategyIntro:
            "Invece di trattare social, CRM, paid media ed e-commerce come attività separate, ho strutturato la strategia attorno a una comprensione condivisa del cliente e a un'esperienza di brand coerente.",
          goToSection: "Vai alla sezione 08",
          zodiacDeepDive: "Approfondimento Zodiac",
          myRole: "04 — Il mio ruolo",
          roleTitle1: "Strategia quando serve.",
          roleTitle2: "Esecuzione quando necessario.",
          roleTitle3: "Leadership lungo tutto il percorso.",
          roleIntro:
            "La mia responsabilità ha incluso sia la direzione strategica sia l'esecuzione operativa, coordinando progressivamente persone e team specialistici attorno a una visione marketing condivisa.",
          exploreSection: "Esplora la sezione 08",
          archive: "05 — Archivio lavori",
          archiveTitle1: "La strategia trasformata in",
          archiveAccent: "esecuzione.",
          archiveIntro:
            "Dai contenuti organici e dalle creatività paid fino al CRM e all'esperienza e-commerce, l'archivio mostra come la stessa direzione strategica sia stata tradotta nei diversi punti di contatto con il cliente.",
          openFolder: "Cartella aperta",
          item: "elemento",
          items: "elementi",
          results: "06 — Risultati",
          resultsTitle1: "Un brand più forte.",
          resultsTitle2: "Una crescita misurabile.",
          resultsIntro:
            "Con un maggiore coordinamento tra brand, contenuti, CRM ed esperienza e-commerce, i miglioramenti hanno iniziato a emergere sia nell'acquisizione sia nella retention.",
          socialVisibility: "Visibilità social",
          avgViews: "Visualizzazioni medie per post",
          avgViewsDesc:
            "Partendo da una base iniziale di circa 100–200 visualizzazioni sui contenuti social.",
          conversion: "Conversione",
          conversions: "Conversioni",
          conversionsDesc:
            "Crescita registrata mentre brand, comunicazione ed esperienza e-commerce diventavano più coerenti lungo il customer journey.",
          retention: "Retention",
          repeatPurchases: "Acquisti ripetuti",
          repeatDesc:
            "Aumento degli acquisti ripetuti da parte dei clienti esistenti attraverso email marketing e comunicazioni orientate alla retention.",
          beyondMetrics: "Oltre le metriche",
          ecosystem:
            "Da canali isolati a un unico ecosistema di brand.",
          ecosystemDesc:
            "Organico, paid, CRM ed e-commerce condividono oggi una struttura visiva e comunicativa più chiara, creando un'esperienza cliente più riconoscibile e fondamenta più solide per continuare a crescere.",
          stack: "07 — Stack",
          stackTitle1: "Gli strumenti a supporto del",
          stackAccent: "sistema.",
          deepDive: "08 — Approfondimento",
          capsule: "Zodiac Capsule / Dall'insight al prodotto",
          deepTitle1: "Quando i dati dei contenuti diventano una",
          deepAccent: "decisione di prodotto.",
          deepIntro:
            "I contenuti organici sono diventati un terreno di test per comprendere cosa risuonasse davvero con il pubblico di Ranpollo. Un segnale ricorrente si è distinto: i contenuti legati ai segni zodiacali generavano costantemente reazioni più forti.",
          validatedSignal: "Segnale validato dai contenuti",
          viewsInteractions: "Visualizzazioni & interazioni",
          validatedDesc:
            "Il format Zodiac validato ha mantenuto performance superiori nei post successivi costruiti sullo stesso angolo comunicativo.",
          decision: "La decisione",
          decisionTitle:
            "Invece di fermarsi a un format di contenuto di successo, l'insight è stato trasformato in prodotto.",
          decisionP1:
            "Dopo quattro mesi di test su approcci differenti, la continuità della risposta ha indicato che i segni zodiacali rappresentavano per questo pubblico qualcosa di più di un trend temporaneo.",
          decisionP2:
            "Il tema validato è diventato la base di una capsule collection dedicata, collegando direttamente il comportamento del pubblico allo sviluppo prodotto.",
          decisionP3:
            "Ho gestito il processo dall'insight marketing iniziale fino alla direzione creativa della collezione, incluso lo sviluppo delle grafiche utilizzate sulle T-shirt.",
          phase: "Fase 01",
          contentResearch: "Il contenuto come ricerca.",
          takeaway: "Il punto chiave",
          takeaway1:
            "I dati non hanno soltanto ottimizzato la comunicazione.",
          takeaway2:
            "Hanno contribuito a decidere cosa creare dopo.",
          projectMind: "Hai un progetto in mente?",
          wantSomething1: "Vuoi costruire",
          wantSomething2: "qualcosa di simile?",
          talk: "Parliamone →",
          backHome: "Torna alla home ↑",
        }
      : {
          back: "← Back to projects",
          caseStudy: "Case Study",
          heroTitle1: "Growth, e-commerce",
          heroTitle2: "& retention.",
          timeframe: "Timeframe",
          timeframeValue: "2024 — Present",
          brand: "Brand",
          brandValue: "Women's Fashion",
          role: "Role",
          overview: "01 — Overview",
          overviewTitle1: "From fragmented marketing to one",
          overviewTitleAccent: "connected growth system.",
          overviewP1:
            "G3M is the company behind Ranpollo, an Italian women's fashion e-commerce brand built around expressive apparel and a strong Made in Italy identity.",
          overviewP2:
            "I joined at a stage where the brand had product potential but lacked a consistent marketing structure. Social visibility was limited, communication across channels was fragmented, CRM performance was weak and the e-commerce experience needed to be rebuilt around a clearer brand and customer journey.",
          overviewP3:
            "My role evolved from hands-on execution into shaping and coordinating the broader marketing ecosystem — connecting brand, content, e-commerce, CRM, paid media and product development around one consistent growth strategy.",
          challenge: "02 — The Challenge",
          challengeTitle1: "The problem wasn't one channel.",
          challengeTitle2: "It was the lack of a",
          challengeAccent: "system.",
          challengeP1:
            "Ranpollo's marketing activities existed, but they were not yet working as one ecosystem. Social accounts were suffering from limited visibility following previous practices, the brand lacked a defined visual and verbal identity, content production had no consistent process, email performance was weak and the Shopify experience was not structured around SEO, discovery and conversion.",
          challengeP2:
            "Product launches also lacked a coordinated communication framework, making it difficult to build anticipation before a release and maintain momentum afterwards.",
          challengeQuote:
            "The challenge was bigger than improving individual channels: it was about creating the foundations for a marketing operation that could become consistent, measurable and scalable.",
          strategy: "03 — The Strategy",
          strategyTitle1: "Build the foundation.",
          strategyTitle2: "Then",
          strategyAccent: "connect the dots.",
          strategyIntro:
            "Instead of treating social, CRM, paid media and e-commerce as separate activities, I structured the strategy around a shared understanding of the customer and a consistent brand experience.",
          goToSection: "Go to section 08",
          zodiacDeepDive: "Zodiac Deep Dive",
          myRole: "04 — My Role",
          roleTitle1: "Strategy when needed.",
          roleTitle2: "Execution when required.",
          roleTitle3: "Leadership throughout.",
          roleIntro:
            "My responsibility has spanned both strategic direction and hands-on execution, while progressively coordinating people and specialist teams around a shared marketing vision.",
          exploreSection: "Explore section 08",
          archive: "05 — Work Archive",
          archiveTitle1: "Strategy turned into",
          archiveAccent: "execution.",
          archiveIntro:
            "From organic content and paid creative to CRM and the e-commerce experience, the archive shows how the same strategic direction was translated across different customer touchpoints.",
          openFolder: "Open folder",
          item: "item",
          items: "items",
          results: "06 — Results",
          resultsTitle1: "A stronger brand.",
          resultsTitle2: "Measurable momentum.",
          resultsIntro:
            "As the brand, content, CRM and e-commerce experience became more coordinated, improvements started appearing across both acquisition and retention.",
          socialVisibility: "Social visibility",
          avgViews: "Average views per post",
          avgViewsDesc:
            "Up from an initial baseline of roughly 100–200 views across social content.",
          conversion: "Conversion",
          conversions: "Conversions",
          conversionsDesc:
            "Growth as the brand, communication and e-commerce experience became more consistent across the customer journey.",
          retention: "Retention",
          repeatPurchases: "Repeat purchases",
          repeatDesc:
            "Increase in repeat purchases from existing customers through email marketing and retention-focused communication.",
          beyondMetrics: "Beyond the metrics",
          ecosystem:
            "From isolated channels to one brand ecosystem.",
          ecosystemDesc:
            "Organic, paid, CRM and e-commerce now share a clearer visual and communication framework, creating a more recognisable customer experience and a stronger foundation for continued growth.",
          stack: "07 — Stack",
          stackTitle1: "Tools supporting the",
          stackAccent: "system.",
          deepDive: "08 — Deep Dive",
          capsule: "Zodiac Capsule / From Insight to Product",
          deepTitle1: "When content data becomes a",
          deepAccent: "product decision.",
          deepIntro:
            "Organic content became a testing ground for understanding what genuinely resonated with the Ranpollo audience. One recurring signal stood out: content built around zodiac signs consistently generated stronger reactions.",
          validatedSignal: "Validated content signal",
          viewsInteractions: "Views & interactions",
          validatedDesc:
            "The validated zodiac format maintained stronger performance across subsequent posts using the same communication angle.",
          decision: "The decision",
          decisionTitle:
            "Instead of stopping at a successful content format, the insight was brought into the product.",
          decisionP1:
            "After four months of testing different approaches, the consistency of the response suggested that zodiac signs were more than a temporary content trend for this audience.",
          decisionP2:
            "The validated theme became the foundation for a dedicated capsule collection, connecting audience behaviour directly with product development.",
          decisionP3:
            "I managed the process from the original marketing insight through the creative direction of the collection, including the development of the graphics used on the T-shirts.",
          phase: "Phase 01",
          contentResearch: "Content as research.",
          takeaway: "The takeaway",
          takeaway1:
            "Data did not just optimise the communication.",
          takeaway2: "It helped decide what to create next.",
          projectMind: "Have a project in mind?",
          wantSomething1: "Want something",
          wantSomething2: "like this?",
          talk: "Let's talk →",
          backHome: "Back home ↑",
        };

  const zodiacSteps =
    language === "it"
      ? [
          {
            number: "01",
            label: "Segnale",
            text: "Il comportamento del pubblico ha rivelato un interesse ricorrente per contenuti identitari legati ai segni zodiacali.",
          },
          {
            number: "02",
            label: "Test",
            text: "Il concept è stato testato per quattro mesi attraverso formati e angoli comunicativi differenti.",
          },
          {
            number: "03",
            label: "Validazione",
            text: "Un format creativo replicabile ha generato con continuità visualizzazioni e interazioni superiori.",
          },
          {
            number: "04",
            label: "Traduzione",
            text: "Il segnale emerso dai contenuti è diventato la prova di un'opportunità di prodotto più ampia.",
          },
          {
            number: "05",
            label: "Sviluppo",
            text: "L'insight validato è stato trasformato in una collezione Zodiac Capsule dedicata.",
          },
        ]
      : [
          {
            number: "01",
            label: "Signal",
            text: "Audience behaviour revealed a recurring interest in zodiac-led identity content.",
          },
          {
            number: "02",
            label: "Test",
            text: "The concept was explored for four months across different formats and communication angles.",
          },
          {
            number: "03",
            label: "Validate",
            text: "A repeatable creative format consistently generated stronger views and interactions.",
          },
          {
            number: "04",
            label: "Translate",
            text: "The content signal became evidence of a broader product opportunity.",
          },
          {
            number: "05",
            label: "Build",
            text: "The validated insight was turned into a dedicated Zodiac Capsule collection.",
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
          <span className="font-serif italic">00:01</span>
          <span className="h-px w-8 bg-white/20" />
          <span>{t.caseStudy}</span>
        </div>

        <h1 className="font-serif text-7xl leading-[0.85] tracking-tight md:text-[9rem]">
          G3M
        </h1>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="max-w-md font-serif text-2xl leading-tight text-white/75 md:text-3xl">
              {t.heroTitle1}
              <br />
              {t.heroTitle2}
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
              {t.brand}
            </p>
            <p className="text-sm text-white/65">
              Ranpollo
              <br />
              {t.brandValue}
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/25">
              {t.role}
            </p>
            <p className="text-sm text-white/65">
              Digital Marketing
              <br />
              & E-commerce
            </p>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="group relative overflow-hidden border border-white/10 bg-[#0b1410]">
          <img
            src="/media/g3m/g3m-homepage.webp"
            alt="Ranpollo e-commerce homepage"
            className="block h-auto w-full transition duration-700 ease-out group-hover:scale-[1.015]"
          />

          <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

          <div className="pointer-events-none absolute bottom-5 left-5 border border-white/10 bg-[#08100d]/80 px-3 py-2 text-xs text-white/50 backdrop-blur-md">
            G3M — Ranpollo
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
              {t.overviewTitle1}{" "}
              <span className="italic text-[#75968c]">
                {t.overviewTitleAccent}
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

                <div>
                  <p className="max-w-xl text-sm leading-7 text-white/45">
                    {item.description[language]}
                  </p>

                  {item.link && (
                    <a
                      href="#zodiac-deep-dive"
                      className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#75968c] transition hover:text-white"
                    >
                      {t.goToSection}
                      <span>→</span>
                      {t.zodiacDeepDive}
                    </a>
                  )}
                </div>
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
              <p className="text-sm text-white/30">{t.myRole}</p>
            </div>

            <div>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                {t.roleTitle1}
                <br />
                {t.roleTitle2}
                <br />
                <span className="italic text-[#75968c]">
                  {t.roleTitle3}
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
                className="min-h-[260px] border-b border-r border-white/10 p-7 md:p-9"
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

                {item.link && (
                  <a
                    href="#zodiac-deep-dive"
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#75968c] transition hover:text-white"
                  >
                    {t.exploreSection}
                    <span>→</span>
                  </a>
                )}
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
                {t.archiveTitle1}{" "}
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
                <div className="columns-1 gap-4 md:columns-2">
                  {activeItems.map((item) => (
                    <MediaCard
                      key={item.id}
                      item={item}
                      language={language}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-white/30">{t.results}</p>
            </div>

            <div>
              <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                {t.resultsTitle1}
                <br />
                <span className="italic text-[#75968c]">
                  {t.resultsTitle2}
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/45">
                {t.resultsIntro}
              </p>
            </div>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-3">
            <article className="border-b border-r border-white/10 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                {t.socialVisibility}
              </p>

              <div className="mt-8 font-serif text-6xl md:text-7xl">
                ~15K
              </div>

              <h3 className="mt-5 font-serif text-xl text-white/75">
                {t.avgViews}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                {t.avgViewsDesc}
              </p>
            </article>

            <article className="border-b border-r border-white/10 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                {t.conversion}
              </p>

              <div className="mt-8 font-serif text-6xl md:text-7xl">
                +50%
              </div>

              <h3 className="mt-5 font-serif text-xl text-white/75">
                {t.conversions}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                {t.conversionsDesc}
              </p>
            </article>

            <article className="border-b border-r border-white/10 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                {t.retention}
              </p>

              <div className="mt-8 font-serif text-6xl md:text-7xl">
                +70%
              </div>

              <h3 className="mt-5 font-serif text-xl text-white/75">
                {t.repeatPurchases}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                {t.repeatDesc}
              </p>
            </article>
          </div>

          <div className="mt-4 border border-white/10 p-8 md:flex md:items-center md:justify-between md:gap-12 md:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#75968c]">
                {t.beyondMetrics}
              </p>

              <h3 className="mt-4 font-serif text-3xl text-white/80">
                {t.ecosystem}
              </h3>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/45 md:mt-0">
              {t.ecosystemDesc}
            </p>
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
                {t.stackTitle1}{" "}
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

      {/* ZODIAC DEEP DIVE */}
      <section
        id="zodiac-deep-dive"
        className="scroll-mt-24 border-t border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">{t.deepDive}</p>
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#b86f45]">
                {t.capsule}
              </p>

              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                {t.deepTitle1}{" "}
                <span className="italic text-[#75968c]">
                  {t.deepAccent}
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
                {t.deepIntro}
              </p>
            </div>
          </div>

          {/* PROCESS */}
          <div className="mt-20 grid border-l border-t border-white/10 md:grid-cols-5">
            {zodiacSteps.map((step) => (
              <article
                key={step.number}
                className="min-h-[280px] border-b border-r border-white/10 p-6"
              >
                <span className="font-serif text-sm italic text-[#75968c]">
                  {step.number}
                </span>

                <h3 className="mt-8 font-serif text-2xl text-white/80">
                  {step.label}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/40">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          {/* METRIC + STORY */}
          <div className="mt-4 grid border border-white/10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                {t.validatedSignal}
              </p>

              <div className="mt-8 font-serif text-6xl text-[#e8e5dc] md:text-8xl">
                +65%
              </div>

              <p className="mt-5 font-serif text-2xl text-white/70">
                {t.viewsInteractions}
              </p>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
                {t.validatedDesc}
              </p>
            </div>

            <div className="p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-[#75968c]">
                {t.decision}
              </p>

              <h3 className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-white/85 md:text-4xl">
                {t.decisionTitle}
              </h3>

              <div className="mt-8 max-w-2xl space-y-5 text-sm leading-7 text-white/45">
                <p>{t.decisionP1}</p>
                <p>{t.decisionP2}</p>
                <p>{t.decisionP3}</p>
              </div>
            </div>
          </div>

          {/* VISUAL EVIDENCE */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="group relative overflow-hidden border border-white/10 bg-[#0b1410]">
              <img
                src="/media/work/g3m/carosello-09-1.jpg"
                alt={
                  language === "it"
                    ? "Test dei contenuti Zodiac per Ranpollo"
                    : "Zodiac content testing for Ranpollo"
                }
                className="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="pointer-events-none absolute bottom-0 left-0 p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  {t.phase}
                </p>

                <p className="mt-2 font-serif text-2xl text-white">
                  {t.contentResearch}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "/media/work/g3m/carosello-09-2.jpg",
                "/media/work/g3m/carosello-09-3.jpg",
                "/media/work/g3m/carosello-09-4.jpg",
                "/media/work/g3m/carosello-09-5.jpg",
              ].map((image, index) => (
                <div
                  key={image}
                  className="group relative overflow-hidden border border-white/10 bg-[#0b1410]"
                >
                  <img
                    src={image}
                    alt={
                      language === "it"
                        ? `Test contenuto Zodiac ${index + 2}`
                        : `Zodiac content test ${index + 2}`
                    }
                    className="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* TAKEAWAY */}
          <div className="mt-4 border border-[#75968c]/25 bg-[#0b1410] p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[0.4fr_1fr]">
              <p className="text-xs uppercase tracking-[0.18em] text-[#75968c]">
                {t.takeaway}
              </p>

              <p className="max-w-3xl font-serif text-3xl leading-relaxed text-white/75 md:text-4xl">
                {t.takeaway1}
                <br />
                <span className="italic text-[#75968c]">
                  {t.takeaway2}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="mb-6 text-sm text-white/30">
            {t.projectMind}
          </p>

          <h2 className="font-serif text-6xl italic leading-[0.95] md:text-8xl">
            {t.wantSomething1}
            <br />
            {t.wantSomething2}
          </h2>

          <a
            href="/#contact"
            className="portfolio-button mt-12 inline-block border border-white/15 px-6 py-3 text-sm text-white/75 transition hover:border-white/40 hover:text-white"
          >
            {t.talk}
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