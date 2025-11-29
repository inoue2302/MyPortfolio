"use client";

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('skills');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const languages = [
    "TypeScript", "php5系 (PHP 5.x)", "php7,8系 (PHP 7.x, 8.x)", "es6系 (ES6+)", "python",
    "HTML", "SCSS", "jQuery", "swift", "c#", "objective-c", "kotlin", "Java"
  ];

  const frameworks = [
    "NestJS", "Laravel", "Lumen", "FastAPI", "Yii", "NuxtJS2.9系 (Nuxt.js 2.9.x)",
    "VueJS", "NextJS", "ReactNative"
  ];

  const infrastructure = [
    "EC2", "S3", "CloudFront", "RDS", "RDS for Aurora", "ElasticSearch",
    "API Gateway", "Lambda", "ElastiCache", "ECS", "Docker", "AWSConfig",
    "AWSWAF", "Amazon CloudWatch Synthetics", "SendGrid", "AWSCdkV2",
    "AWSCopilot", "Vercel"
  ];

  const SkillBadge = ({ skill, index }: { skill: string; index: number }) => (
    <li
      className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {skill}
    </li>
  );

  return (
    <section id="skills" className="max-w-6xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {t('title')}
        </h2>

        <div className="bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl p-8 mb-8 border border-blue-100">
          <h3 className="text-2xl font-bold mb-6 text-blue-900 flex items-center">
            <span className="text-3xl mr-3">💻</span>
            {t('languages')}
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {languages.map((lang, index) => (
              <SkillBadge key={index} skill={lang} index={index} />
            ))}
          </ul>
        </div>

        <div className={`bg-gradient-to-br from-white to-purple-50 shadow-xl rounded-2xl p-8 mb-8 transition-all duration-1000 delay-200 border border-purple-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold mb-6 text-purple-900 flex items-center">
            <span className="text-3xl mr-3">⚡</span>
            {t('frameworks')}
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {frameworks.map((fw, index) => (
              <li
                key={index}
                className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${(index + languages.length) * 50}ms` }}
              >
                {fw}
              </li>
            ))}
          </ul>
        </div>

        <div className={`bg-gradient-to-br from-white to-green-50 shadow-xl rounded-2xl p-8 transition-all duration-1000 delay-300 border border-green-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold mb-6 text-green-900 flex items-center">
            <span className="text-3xl mr-3">☁️</span>
            {t('infrastructure')}
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {infrastructure.map((infra, index) => (
              <li
                key={index}
                className={`bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${(index + languages.length + frameworks.length) * 50}ms` }}
              >
                {infra}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
