import React from 'react';

const Skills: React.FC = () => {
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

  return (
    <section id="skills" className="my-8 p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">スキル (Skills)</h2>

      <h3 className="text-xl font-bold mb-3">経験言語 (Experienced Languages)</h3>
      <ul className="list-disc list-inside ml-4 mb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>

      <h3 className="text-xl font-bold mb-3">経験フレームワーク (Experienced Frameworks)</h3>
      <ul className="list-disc list-inside ml-4 mb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {frameworks.map((fw, index) => (
          <li key={index}>{fw}</li>
        ))}
      </ul>

      <h3 className="text-xl font-bold mb-3">経験インフラ (Experienced Infrastructure)</h3>
      <ul className="list-disc list-inside ml-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {infrastructure.map((infra, index) => (
          <li key={index}>{infra}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
