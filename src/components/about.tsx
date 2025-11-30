"use client";

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('about');
  type LinkCategory = { title: string; items: { label: string; url: string }[] };
  const linkCategories = (t.raw('links.categories') as LinkCategory[]) ?? [];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="max-w-4xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300 border border-blue-100">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              {t('intro.text1')}
            </p>
            <p className="text-lg">
              {t('intro.text2')}
            </p>
            <p className="text-lg">
              {t('intro.text3')}
            </p>
          </div>
        </div>

        <div className={`bg-gradient-to-br from-white to-purple-50 shadow-xl rounded-2xl p-8 transition-all duration-1000 delay-200 hover:shadow-2xl border border-purple-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('goals.title')}
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start group">
              <span className="text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">🎯</span>
              <span className="text-lg text-gray-700">{t('goals.goal1')}</span>
            </li>
            <li className="flex items-start group">
              <span className="text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">🚀</span>
              <span className="text-lg text-gray-700">{t('goals.goal2')}</span>
            </li>
          </ul>
        </div>

        <div className={`bg-gradient-to-br from-white to-indigo-50 shadow-xl rounded-2xl p-8 mt-8 transition-all duration-1000 delay-300 hover:shadow-2xl border border-indigo-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            {t('links.title')}
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {linkCategories.map((category) => (
              <div key={category.title}>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h4>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.url}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-blue-600 hover:text-blue-800 transition-colors group"
                      >
                        <span>{item.label}</span>
                        <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
