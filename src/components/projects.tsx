"use client";

import React, { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { workHistoryJa } from '@/data/projects-ja';
import { workHistoryEn } from '@/data/projects-en';

interface ProjectEntryProps {
  title: string;
  period: string;
  role: string;
  responsibilities: string[];
  environment: string[];
  index: number;
  isVisible: boolean;
  t: any;
}

const ProjectEntry: React.FC<ProjectEntryProps> = ({ title, period, role, responsibilities, environment, index, isVisible, t }) => {
  return (
    <div
      className={`mb-8 p-6 border border-gray-200 rounded-2xl shadow-lg bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{title}</h3>
      <div className="flex flex-wrap gap-4 mb-3">
        <p className="text-sm text-gray-600 flex items-center">
          <span className="mr-2">📅</span>
          <strong className="mr-1">{t('period')}:</strong> {period}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <span className="mr-2">👔</span>
          <strong className="mr-1">{t('role')}:</strong> {role}
        </p>
      </div>
      <div className="mb-4 bg-blue-50 p-4 rounded-lg">
        <h4 className="text-md font-semibold text-blue-900 mb-2 flex items-center">
          <span className="mr-2">📋</span>
          {t('responsibilities')}:
        </h4>
        <ul className="space-y-1 ml-6">
          {responsibilities.map((item, idx) => (
            <li key={idx} className="text-gray-700 text-sm flex items-start">
              <span className="mr-2 text-blue-500">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="text-md font-semibold text-purple-900 mb-2 flex items-center">
          <span className="mr-2">🛠️</span>
          {t('environment')}:
        </h4>
        <div className="flex flex-wrap gap-2">
          {environment.map((item, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('projects');
  const locale = useLocale();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workHistory = locale === 'ja' ? workHistoryJa : workHistoryEn;

  return (
    <section id="projects" className="max-w-6xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('title')}
        </h2>
        {workHistory.map((project, index) => (
          <ProjectEntry key={index} {...project} index={index} isVisible={isVisible} t={t} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
