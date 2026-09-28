"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Language = "it" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("it");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(
      "portfolio-language",
    );

    if (savedLanguage === "it" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
      return;
    }

    document.documentElement.lang = "it";
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);

    window.localStorage.setItem(
      "portfolio-language",
      newLanguage,
    );

    document.documentElement.lang = newLanguage;
  };

  const toggleLanguage = () => {
    setLanguage(language === "it" ? "en" : "it");
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider",
    );
  }

  return context;
}