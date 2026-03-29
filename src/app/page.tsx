'use client';
// src/app/page.tsx — SereneMind Landing Page
// Designed & developed by Akanksha

import Link from 'next/link';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import {
  Brain, Users, ClipboardList, Wind, Smile, BookOpen,
  ArrowRight, Heart, Leaf, Star
} from 'lucide-react';

const FEATURES = [
  { key: 'featureAI',    icon: Brain,         color: '#7a9e7e' },
  { key: 'featurePeer',  icon: Users,         color: '#c4724a' },
  { key: 'featureScreen',icon: ClipboardList, color: '#7a9e7e' },
  { key: 'featureRelax', icon: Wind,          color: '#c4724a' },
  { key: 'featureExpr',  icon: Smile,         color: '#7a9e7e' },
  { key: 'featureBook',  icon: BookOpen,      color: '#c4724a' },
];

const MOOD_WORDS = ['Calm', 'Hopeful', 'Anxious', 'Tired', 'Motivated', 'Overwhelmed'];

export default function HomePage() {
  const { locale, dir } = useLang();
  const tx = (key: string) => t(locale, key);

  return (
    <div className="min-h-screen" dir={dir}>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-[#e8d5bb]/60">
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7a9e7e, #5c8063)' }}>
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: '#2c2420', letterSpacing: '-0.02em' }}>
              SereneMind
            </span>
          </div>

          {/* Lang switcher — hidden on mobile, shown md+ */}
          <div className="hidden md:flex">
            <LanguageSwitcher />
          </div>

          {/* Auth buttons */}
          <div className="flex gap-2.5">
            <Link href="/login">
              <button className="px-4 py-2 rounded-lg text-sm font-medium border border-[#d4b896] text-[#5c8063] hover:bg-[#f5ede0] transition-colors">
                {tx('signIn')}
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:shadow-md"
                style={{ background: 'linear-gradient(135deg, #7a9e7e, #5c8063)' }}>
                {tx('getStarted')}
              </button>
            </Link>
          </div>
        </div>

        {/* Lang switcher row on mobile */}
        <div className="md:hidden px-5 pb-2 flex">
          <LanguageSwitcher variant="compact" />
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-20 pb-24 px-5">

        {/* Background decorative orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-pulse-orb absolute -top-20 -right-20 w-96 h-96 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(122,158,126,0.15) 0%, transparent 70%)' }} />
          <div className="animate-pulse-orb absolute bottom-0 -left-16 w-72 h-72 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(196,114,74,0.10) 0%, transparent 70%)', animationDelay: '2s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Badge */}
          <div className="reveal reveal-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-8"
            style={{ background: 'rgba(122,158,126,0.12)', color: '#5c8063', border: '1px solid rgba(122,158,126,0.25)' }}>
            <Heart className="w-3.5 h-3.5" />
            <span>Mental Wellness for Students</span>
          </div>

          {/* Heading */}
          <h1 className="reveal reveal-2 text-5xl sm:text-7xl font-light mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: '#2c2420' }}>
            {tx('heroHeading')}
          </h1>

          {/* Sub */}
          <p className="reveal reveal-3 text-lg sm:text-xl text-[#7a6a5a] max-w-2xl mx-auto mb-10 leading-relaxed">
            {tx('heroSub')}
          </p>

          {/* CTAs */}
          <div className="reveal reveal-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/register">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #7a9e7e, #5c8063)' }}>
                {tx('getStarted')}
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/login">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium border transition-all hover:bg-[#f5ede0]"
                style={{ borderColor: '#d4b896', color: '#5c8063' }}>
                {tx('signIn')}
              </button>
            </Link>
          </div>

          {/* Mood preview chips */}
          <div className="reveal reveal-5 mt-14 flex flex-wrap justify-center gap-2">
            {MOOD_WORDS.map((w, i) => (
              <span key={w}
                className="px-4 py-1.5 rounded-full text-sm"
                style={{
                  background: i % 2 === 0 ? 'rgba(122,158,126,0.10)' : 'rgba(196,114,74,0.10)',
                  color: i % 2 === 0 ? '#5c8063' : '#a0552f',
                  border: `1px solid ${i % 2 === 0 ? 'rgba(122,158,126,0.2)' : 'rgba(196,114,74,0.2)'}`,
                  animationDelay: `${i * 0.1}s`
                }}>
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-5" style={{ background: 'rgba(255,255,255,0.5)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-center mb-3"
            style={{ fontFamily: 'var(--font-display)', color: '#2c2420' }}>
            {tx('featuresTitle')}
          </h2>
          <p className="text-center text-[#7a6a5a] mb-14">
            Available in English · తెలుగు · हिन्दी · Español · العربية
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ key, icon: Icon, color }, i) => (
              <div key={key} className="glass-card p-6 reveal" style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
                <div className="feature-icon-wrap mb-4">
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="font-medium text-[#2c2420] mb-1.5" style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}>
                  {tx(key)}
                </h3>
                <p className="text-sm text-[#7a6a5a] leading-relaxed">
                  {tx(key + 'Desc')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="py-14 px-5">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { num: '24/7', label: 'AI Support' },
            { num: '100%', label: 'Anonymous' },
            { num: '5',    label: 'Languages' },
            { num: '∞',    label: 'Resources' },
          ].map(item => (
            <div key={item.label}>
              <div className="text-3xl font-light mb-1" style={{ fontFamily: 'var(--font-display)', color: '#5c8063' }}>
                {item.num}
              </div>
              <div className="text-sm text-[#7a6a5a]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-5 border-t border-[#e8d5bb]/60">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + tagline */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7a9e7e, #5c8063)' }}>
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <div>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#2c2420' }}>
                SereneMind
              </span>
              <p className="text-xs text-[#b0a090]">{tx('footerTagline')}</p>
            </div>
          </div>

          {/* Dev credit — Akanksha */}
          <div className="text-center sm:text-right">
            <p className="dev-credit">{tx('footerCredit')}</p>
            <p className="text-xs text-[#b0a090] mt-0.5">
              Next.js · Supabase · Gemini AI
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
