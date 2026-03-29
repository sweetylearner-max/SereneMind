'use client';
// src/app/dashboard/layout.tsx — SereneMind Dashboard
// Developed by Akanksha

import {
  Home, MessageCircle, Users, ClipboardList,
  Wind, Smile, BookOpen, Calendar, LogOut, Leaf, Settings
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { t } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

const NAV_ITEMS = [
  { key: 'navHome',      href: '/dashboard',                       icon: Home         },
  { key: 'navChat',      href: '/dashboard/chatbot',               icon: MessageCircle },
  { key: 'navPeer',      href: '/dashboard/peer-support',          icon: Users        },
  { key: 'navScreen',    href: '/dashboard/screening',             icon: ClipboardList },
  { key: 'navRelax',     href: '/dashboard/relax',                 icon: Wind         },
  { key: 'navExpr',      href: '/dashboard/expression-analysis',   icon: Smile        },
  { key: 'navBook',      href: '/dashboard/booking',               icon: Calendar     },
  { key: 'navResources', href: '/dashboard/resources',             icon: BookOpen     },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { locale, dir } = useLang();
  const tx = (key: string) => t(locale, key);
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen" dir={dir} style={{ background: 'var(--bg-primary)' }}>

      {/* ── SIDEBAR ── */}
      <aside
        className="hidden md:flex flex-col sticky top-0 h-screen border-r border-[#e8d5bb]/60 transition-all duration-300"
        style={{
          width: collapsed ? 64 : 240,
          background: 'rgba(253,248,240,0.95)',
          backdropFilter: 'blur(16px)',
        }}>

        {/* Logo */}
        <div className="flex items-center gap-2.5 px-4 py-5 border-b border-[#e8d5bb]/50">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #7a9e7e, #5c8063)' }}>
            <Leaf className="w-4 h-4 text-white" />
          </div>
          {!collapsed && (
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#2c2420', letterSpacing: '-0.02em' }}>
              SereneMind
            </span>
          )}
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto">
          {NAV_ITEMS.map(({ key, href, icon: Icon }) => {
            const active = pathname === href || (href !== '/dashboard' && pathname.startsWith(href));
            return (
              <Link key={key} href={href}
                className={`sidebar-nav-item ${active ? 'active' : ''}`}
                title={collapsed ? tx(key) : undefined}>
                <Icon className="w-4.5 h-4.5 flex-shrink-0" style={{ width: 18, height: 18 }} />
                {!collapsed && <span>{tx(key)}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Lang switcher in sidebar */}
        {!collapsed && (
          <div className="px-3 py-3 border-t border-[#e8d5bb]/50">
            <p className="text-[10px] uppercase tracking-wider text-[#b0a090] mb-2 px-1">Language</p>
            <LanguageSwitcher variant="compact" />
          </div>
        )}

        {/* Footer credit */}
        {!collapsed && (
          <div className="px-4 py-3 border-t border-[#e8d5bb]/50">
            <p className="dev-credit text-[11px]">{tx('footerCredit')}</p>
          </div>
        )}

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(c => !c)}
          className="m-2 p-2 rounded-lg text-[#7a6a5a] hover:bg-[#e8d5bb]/40 transition-colors text-xs"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
          {collapsed ? '›' : '‹'}
        </button>
      </aside>

      {/* ── MOBILE BOTTOM NAV ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-[#e8d5bb]/60 flex"
        style={{ background: 'rgba(253,248,240,0.97)', backdropFilter: 'blur(16px)' }}>
        {NAV_ITEMS.slice(0, 5).map(({ key, href, icon: Icon }) => {
          const active = pathname === href || (href !== '/dashboard' && pathname.startsWith(href));
          return (
            <Link key={key} href={href}
              className={`flex-1 flex flex-col items-center py-2 gap-0.5 text-[10px] transition-colors
                ${active ? 'text-[#5c8063]' : 'text-[#b0a090]'}`}>
              <Icon style={{ width: 20, height: 20 }} />
              <span>{tx(key).split(' ')[0]}</span>
            </Link>
          );
        })}
      </nav>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 min-w-0 pb-20 md:pb-0">
        {/* Top bar */}
        <div className="sticky top-0 z-40 flex items-center justify-between px-6 py-3.5 border-b border-[#e8d5bb]/50"
          style={{ background: 'rgba(253,248,240,0.9)', backdropFilter: 'blur(12px)' }}>

          <div className="flex items-center gap-2 md:hidden">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #7a9e7e, #5c8063)' }}>
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#2c2420' }}>
              SereneMind
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm text-[#7a6a5a]">
            <span>{tx('dashboardWelcome')}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex">
              <LanguageSwitcher variant="compact" />
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
              style={{ background: 'linear-gradient(135deg, #7a9e7e, #c4724a)' }}>
              A
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="p-5 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
