'use client';
// src/app/login/page.tsx — SereneMind Login
// Developed by Akanksha

import Link from 'next/link';
import { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Leaf, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const { locale, dir } = useLang();
  const tx = (key: string) => t(locale, key);
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    borderRadius: 10,
    border: '1px solid #e8d5bb',
    background: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    color: '#2c2420',
    outline: 'none',
    fontFamily: 'var(--font-body)',
    transition: 'border-color 0.2s',
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" dir={dir}>

      {/* Background orb */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(122,158,126,0.10) 0%, transparent 70%)' }} />
      </div>

      <div className="w-full max-w-md relative z-10">

        {/* Card */}
        <div className="glass-card p-8">

          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
              style={{ background: 'linear-gradient(135deg, #7a9e7e, #5c8063)' }}>
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#2c2420', fontWeight: 400 }}>
              {tx('loginTitle')}
            </h1>
            <p className="text-sm text-[#7a6a5a] mt-1 text-center">{tx('loginSub')}</p>
          </div>

          {/* Lang switcher */}
          <div className="flex justify-center mb-6">
            <LanguageSwitcher variant="compact" />
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[#7a6a5a] mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@university.edu"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#7a9e7e'}
                onBlur={e => e.target.style.borderColor = '#e8d5bb'}
              />
            </div>

            <div>
              <label className="block text-sm text-[#7a6a5a] mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{ ...inputStyle, paddingRight: 44 }}
                  onFocus={e => e.target.style.borderColor = '#7a9e7e'}
                  onBlur={e => e.target.style.borderColor = '#e8d5bb'}
                />
                <button type="button"
                  onClick={() => setShowPw(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b0a090] hover:text-[#7a6a5a]">
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-xs text-[#7a9e7e] hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              className="w-full py-3 rounded-xl text-white font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #7a9e7e, #5c8063)' }}>
              {tx('signIn')}
            </button>
          </div>

          {/* Register link */}
          <p className="text-center text-sm text-[#7a6a5a] mt-6">
            New here?{' '}
            <Link href="/register" className="text-[#5c8063] font-medium hover:underline">
              {tx('getStarted')}
            </Link>
          </p>
        </div>

        {/* Dev credit */}
        <p className="text-center dev-credit mt-5">{tx('footerCredit')}</p>
      </div>
    </div>
  );
}
