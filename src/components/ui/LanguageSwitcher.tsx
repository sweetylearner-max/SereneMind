'use client';
// src/components/ui/LanguageSwitcher.tsx
import { LANGUAGES } from '@/lib/i18n';
import { useLang } from '@/lib/LangContext';

interface Props {
  variant?: 'nav' | 'compact';
}

export function LanguageSwitcher({ variant = 'nav' }: Props) {
  const { locale, setLocale } = useLang();

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-1 flex-wrap">
        {LANGUAGES.map(lang => (
          <button
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            className={`lang-btn text-xs px-2 py-1 ${locale === lang.code ? 'active' : ''}`}
            title={lang.label}
          >
            {lang.nativeName}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5">
      {LANGUAGES.map(lang => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`lang-btn ${locale === lang.code ? 'active' : ''}`}
          title={lang.label}
        >
          {lang.nativeName}
        </button>
      ))}
    </div>
  );
}
