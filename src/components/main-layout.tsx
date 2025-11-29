"use client";

import React, { useState } from 'react';
import { usePathname, useRouter, Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('nav');
  const tFooter = useTranslations('footer');

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/skills', label: t('skills') },
    { href: '/projects', label: t('projects') },
  ];

  const isActive = (path: string) => pathname === path;

  const changeLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors duration-300">
              Portfolio
            </Link>

            {/* デスクトップメニュー */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 transition-all duration-300 hover:text-blue-400 ${
                    isActive(item.href) ? 'text-blue-400' : ''
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 animate-pulse"></span>
                  )}
                </Link>
              ))}

              {/* 言語切り替えボタン */}
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => changeLocale('ja')}
                  className={`px-3 py-1 rounded transition-all duration-300 ${
                    locale === 'ja' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  日本語
                </button>
                <button
                  onClick={() => changeLocale('en')}
                  className={`px-3 py-1 rounded transition-all duration-300 ${
                    locale === 'en' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* モバイルメニューボタン */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* モバイルメニュー */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pt-4 pb-2 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* モバイル用言語切り替え */}
              <div className="flex items-center space-x-2 pt-2 px-3">
                <button
                  onClick={() => {
                    changeLocale('ja');
                    setIsMenuOpen(false);
                  }}
                  className={`flex-1 px-3 py-2 rounded transition-all duration-300 ${
                    locale === 'ja' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:text-white'
                  }`}
                >
                  日本語
                </button>
                <button
                  onClick={() => {
                    changeLocale('en');
                    setIsMenuOpen(false);
                  }}
                  className={`flex-1 px-3 py-2 rounded transition-all duration-300 ${
                    locale === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 text-center">
        <p className="text-gray-400">{tFooter('copyright')}</p>
      </footer>
    </div>
  );
};

export default MainLayout;
