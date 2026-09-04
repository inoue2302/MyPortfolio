"use client";

import React, { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { worksJa } from '@/data/works-ja';
import { worksEn } from '@/data/works-en';

interface Work {
  name: string;
  description: string;
  techStack: string[];
  siteUrl: string;
  githubUrl?: string;
  youtubeUrl?: string;
  articleUrl?: string;
  status: string;
}

const Works: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('works');
  const locale = useLocale();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const works: Work[] = locale === 'ja' ? worksJa : worksEn;

  return (
    <section id="works" className="max-w-5xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('title')}
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {works.map((work, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{work.name}</h3>
                <span className="text-sm font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full whitespace-nowrap ml-3">
                  {work.status}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{work.description}</p>

              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 mb-2">{t('techStack')}</p>
                <ul className="flex flex-wrap gap-2">
                  {work.techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={work.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  {t('visitSite')} ↗
                </a>
                {work.githubUrl && (
                  <a
                    href={work.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    GitHub ↗
                  </a>
                )}
                {work.youtubeUrl && (
                  <a
                    href={work.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    YouTube ↗
                  </a>
                )}
                {work.articleUrl && (
                  <a
                    href={work.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    {t('article')} ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
