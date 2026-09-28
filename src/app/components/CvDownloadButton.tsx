"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function CvDownloadButton() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const t =
    language === "it"
      ? {
          button: "Scarica CV",
          title: "Scarica il CV",
          subtitle: "Scegli la lingua del documento.",
          italian: "Scarica il CV in italiano",
          english: "Scarica il CV in inglese",
          close: "Chiudi",
          italianLabel: "Italiano",
          englishLabel: "Inglese",
        }
      : {
          button: "Download CV",
          title: "Download CV",
          subtitle: "Choose the language of the document.",
          italian: "Download CV in Italian",
          english: "Download CV in English",
          close: "Close",
          italianLabel: "Italian",
          englishLabel: "English",
        };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="border border-white/20 px-3 py-2 text-xs text-white/70 transition hover:border-white/40 hover:text-white sm:px-4"
      >
        <span className="sm:hidden">CV</span>
        <span className="hidden sm:inline">{t.button}</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-5 backdrop-blur-md"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-download-title"
            className="relative w-full max-w-lg border border-white/15 bg-[#0b1410] p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={t.close}
              className="absolute right-5 top-5 flex h-10 w-10 touch-manipulation items-center justify-center border border-white/10 text-xl text-white/45 transition hover:border-white/30 hover:text-white"
            >
              ×
            </button>

            <div className="pr-14">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#75968c]">
                Curriculum Vitae
              </p>

              <h2
                id="cv-download-title"
                className="font-serif text-4xl leading-tight text-[#e8e5dc] sm:text-5xl"
              >
                {t.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/45">
                {t.subtitle}
              </p>
            </div>

            <div className="mt-8 border-t border-white/10">
              <a
                href="/cv/antonio-lorusso-cv-it.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between gap-6 border-b border-white/10 py-6 transition hover:border-white/25"
              >
                <div>
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/30">
                    {t.italianLabel}
                  </span>

                  <span className="font-serif text-xl text-white/80 transition group-hover:text-white sm:text-2xl">
                    {t.italian}
                  </span>
                </div>

                <span className="shrink-0 font-serif text-2xl text-[#75968c] transition group-hover:translate-x-1">
                  ↓
                </span>
              </a>

              <a
                href="/cv/antonio-lorusso-cv-en.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between gap-6 border-b border-white/10 py-6 transition hover:border-white/25"
              >
                <div>
                  <span className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/30">
                    {t.englishLabel}
                  </span>

                  <span className="font-serif text-xl text-white/80 transition group-hover:text-white sm:text-2xl">
                    {t.english}
                  </span>
                </div>

                <span className="shrink-0 font-serif text-2xl text-[#75968c] transition group-hover:translate-x-1">
                  ↓
                </span>
              </a>
            </div>

            <p className="mt-6 text-[10px] uppercase tracking-[0.14em] text-white/20">
              PDF · Antonio Lorusso
            </p>
          </div>
        </div>
      )}
    </>
  );
}