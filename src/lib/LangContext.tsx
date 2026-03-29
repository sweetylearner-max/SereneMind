'use client';
// src/lib/LangContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Locale, LANGUAGES } from './i18n';

interface LangContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  dir: 'ltr' | 'rtl';
}

const LangContext = createContext<LangContextType>({
  locale: 'en',
  setLocale: () => {},
  dir: 'ltr',
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const saved = localStorage.getItem('serenemind_lang') as Locale;
    if (saved && LANGUAGES.find(l => l.code === saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('serenemind_lang', l);
    // Set dir on html element for RTL support
    const lang = LANGUAGES.find(x => x.code === l);
    document.documentElement.dir = lang?.rtl ? 'rtl' : 'ltr';
    document.documentElement.lang = l;
  };

  const lang = LANGUAGES.find(x => x.code === locale);
  const dir = lang?.rtl ? 'rtl' : 'ltr';

  return (
    <LangContext.Provider value={{ locale, setLocale, dir }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
