'use client';
// src/app/dashboard/page.tsx — SereneMind Dashboard Home
// Developed by Akanksha

import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import {
  Brain, Users, ClipboardList, Wind, Smile,
  BookOpen, Calendar, ArrowRight, Sparkles
} from 'lucide-react';
import { useState } from 'react';

const MOODS = [
  { emoji: '😊', label: 'Great',        color: '#7a9e7e' },
  { emoji: '🙂', label: 'Okay',         color: '#a0b880' },
  { emoji: '😐', label: 'Neutral',      color: '#b0a090' },
  { emoji: '😔', label: 'Low',          color: '#c4724a' },
  { emoji: '😰', label: 'Anxious',      color: '#a05538' },
];

const QUICK_LINKS = [
  { key: 'navChat',      href: '/dashboard/chatbot',             icon: Brain,         color: '#7a9e7e' },
  { key: 'navPeer',      href: '/dashboard/peer-support',        icon: Users,         color: '#c4724a' },
  { key: 'navScreen',    href: '/dashboard/screening',           icon: ClipboardList, color: '#7a9e7e' },
  { key: 'navRelax',     href: '/dashboard/relax',               icon: Wind,          color: '#c4724a' },
  { key: 'navExpr',      href: '/dashboard/expression-analysis', icon: Smile,         color: '#7a9e7e' },
  { key: 'navBook',      href: '/dashboard/booking',             icon: Calendar,      color: '#c4724a' },
];

const AFFIRMATIONS: Record<string, string[]> = {
  en: ["You don't have to do everything today.", "Your feelings are valid.", "Small steps are still progress.", "You deserve kindness — especially from yourself."],
  te: ["మీరు నేడు అన్నీ చేయవలసిన అవసరం లేదు.", "మీ భావాలు చెల్లుబాటు అవుతాయి.", "చిన్న అడుగులు కూడా ముందుకు వేసినట్లే.", "మీరు దయకు అర్హులు."],
  hi: ["आपको आज सब कुछ करने की जरूरत नहीं है।", "आपकी भावनाएं मायने रखती हैं।", "छोटे कदम भी प्रगति है।", "आप दया के पात्र हैं।"],
  es: ["No tienes que hacer todo hoy.", "Tus sentimientos son válidos.", "Los pequeños pasos siguen siendo progreso.", "Mereces amabilidad."],
  ar: ["لا يجب عليك فعل كل شيء اليوم.", "مشاعرك صالحة.", "الخطوات الصغيرة لا تزال تقدماً.", "أنت تستحق اللطف."],
};

export default function DashboardPage() {
  const { locale, dir } = useLang();
  const tx = (key: string) => t(locale, key);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const affs = AFFIRMATIONS[locale] ?? AFFIRMATIONS['en'];
  const affirmation = affs[Math.floor((Date.now() / 86400000)) % affs.length];

  return (
    <div className="max-w-5xl mx-auto space-y-7" dir={dir}>

      {/* ── WELCOME CARD ── */}
      <div className="glass-card p-7 relative overflow-hidden">
        {/* Decorative orb */}
        <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(122,158,126,0.15) 0%, transparent 70%)' }} />
        <div className="absolute -left-4 -bottom-4 w-32 h-32 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(196,114,74,0.10) 0%, transparent 70%)' }} />

        <div className="relative z-10">
          <p className="text-sm text-[#7a6a5a] mb-1">{greeting} 👋</p>
          <h1 className="text-3xl font-light mb-3" style={{ fontFamily: 'var(--font-display)', color: '#2c2420' }}>
            {tx('dashboardWelcome')}
          </h1>
          <div className="flex items-start gap-2 max-w-lg">
            <Sparkles className="w-4 h-4 text-[#7a9e7e] mt-0.5 flex-shrink-0" />
            <p className="text-[#7a6a5a] italic text-sm" style={{ fontFamily: 'var(--font-display)' }}>
              {affirmation}
            </p>
          </div>
        </div>
      </div>

      {/* ── MOOD CHECK-IN ── */}
      <div className="glass-card p-6">
        <h2 className="font-medium text-[#2c2420] mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
          {tx('moodQuestion')}
        </h2>
        <div className="flex gap-3 flex-wrap">
          {MOODS.map(m => (
            <button key={m.label}
              onClick={() => setSelectedMood(m.label)}
              className="flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl border transition-all"
              style={{
                borderColor: selectedMood === m.label ? m.color : '#e8d5bb',
                background: selectedMood === m.label ? `${m.color}18` : 'white',
                transform: selectedMood === m.label ? 'translateY(-2px)' : 'none',
              }}>
              <span className="text-2xl">{m.emoji}</span>
              <span className="text-xs text-[#7a6a5a]">{m.label}</span>
            </button>
          ))}
        </div>
        {selectedMood && (
          <p className="mt-3 text-sm text-[#5c8063]">
            ✓ Noted — thank you for checking in.
          </p>
        )}
      </div>

      {/* ── QUICK LINKS ── */}
      <div>
        <h2 className="font-medium text-[#2c2420] mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
          What would you like to do?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {QUICK_LINKS.map(({ key, href, icon: Icon, color }) => (
            <Link key={key} href={href}>
              <div className="glass-card p-5 cursor-pointer group">
                <div className="feature-icon-wrap mb-3">
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <p className="text-sm font-medium text-[#2c2420] group-hover:text-[#5c8063] transition-colors">
                  {tx(key)}
                </p>
                <ArrowRight className="w-3.5 h-3.5 text-[#b0a090] mt-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── FOOTER CREDIT ── */}
      <div className="text-center py-4">
        <p className="dev-credit">{tx('footerCredit')} · SereneMind</p>
      </div>

    </div>
  );
}
