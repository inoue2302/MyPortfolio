"use client";

import React, { useEffect, useState } from 'react';

interface ProjectEntryProps {
  title: string;
  period: string;
  role: string;
  responsibilities: string[];
  environment: string[];
  index: number;
  isVisible: boolean;
}

const ProjectEntry: React.FC<ProjectEntryProps> = ({ title, period, role, responsibilities, environment, index, isVisible }) => {
  return (
    <div
      className={`mb-8 p-6 border border-gray-200 rounded-2xl shadow-lg bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{title}</h3>
      <div className="flex flex-wrap gap-4 mb-3">
        <p className="text-sm text-gray-600 flex items-center">
          <span className="mr-2">📅</span>
          <strong className="mr-1">期間:</strong> {period}
        </p>
        <p className="text-sm text-gray-600 flex items-center">
          <span className="mr-2">👔</span>
          <strong className="mr-1">役割:</strong> {role}
        </p>
      </div>
      <div className="mb-4 bg-blue-50 p-4 rounded-lg">
        <h4 className="text-md font-semibold text-blue-900 mb-2 flex items-center">
          <span className="mr-2">📋</span>
          担当業務 (Responsibilities):
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
          開発環境 (Development Environment):
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workHistory = [
    {
      title: "生成AIを使用した議事録作成サービスのインフラ構築 (Infrastructure Construction for Meeting Minutes Creation Service Using Generative AI)",
      period: "2025年2月~現在",
      role: "Web Application Development Leader",
      responsibilities: [
        "Infrastructure design and construction for microservices of meeting minutes creation",
        "integration of microservices with web application",
        "redesign and IaC conversion of manually built web application infrastructure",
        "construction of deployment pipeline for IaC services",
        "monorepo conversion of meeting minutes creation and web application",
        "Git management of meeting minutes creation from SharePoint",
        "web application modifications",
        "technical support for team engineers and Git usage guidance for non-engineers."
      ],
      environment: [
        "Docker", "TypeScript (CDK, Frontend)", "Python (WebAPI, Meeting Minutes Processing)",
        "FastAPI", "NextJS", "CDKv2", "ECS", "RDS", "Cognito", "APIGateWay", "ALB",
        "NLB", "Codebuild", "Amplify", "CloudFront", "S3", "Lambda", "SQS"
      ]
    },
    {
      title: "LINE連携型ECサービスの開発 (Development of LINE-integrated EC Service)",
      period: "2024年1月~2025年1月",
      role: "Development Sub-Leader",
      responsibilities: [
        "Implementation of various functional WebAPIs and screen integration",
        "full back-end implementation of order payment (credit card, bank transfer) features",
        "full back-end implementation of subscription features",
        "implementation of email sending infrastructure",
        "message sending features to customers using LINE and Webhook",
        "implementation of segment delivery features using LINE and MessageAPI (mainly customer extraction)",
        "PR review",
        "CS inquiry support."
      ],
      environment: [
        "Docker", "TypeScript", "NextJS", "Vercel", "NestJS", "ECS", "RDS",
        "Stripe", "AWSCDkV2", "AWSCopilot", "LINELogin", "LINE", "MessageAPI"
      ]
    },
    {
      title: "医療関連サービス企業 (Medical-related Service Company)",
      period: "2022年5月~2023年12月",
      role: "Development Lead Engineer",
      responsibilities: [
        "Taking over outsourced online medical consultation system",
        "taking over outsourced vaccine questionnaire system",
        "functional improvements for online medical consultation system",
        "functional improvements for vaccine questionnaire system",
        "AWS operation improvements for ISMS acquisition",
        "operation improvements such as deployment automation to production and staging environments",
        "new development of pre-interview system linked to online medical consultation",
        "PR review and process management."
      ],
      environment: [
        "Docker", "VueJS2系, 3系 (Vue.js 2.x, 3.x)", "Vuetify", "Lambda (nodejs, python)",
        "Laravel8, 9系 (Laravel 8.x, 9.x)", "php7, php8 (PHP 7.x, 8.x)",
        "ECS for fargate", "RDS", "EC2", "DynamoDB", "Amplify", "AppSync"
      ]
    },
    {
      title: "人材紹介会社向けSAASビジネスシステムの運用開発 (Operation and Development of SAAS Business System for Recruitment Agencies)",
      period: "2020年11月~2022年5月",
      role: "Development Lead Engineer",
      responsibilities: [
        "Development of front-end and batch processing for KPI tools of recruitment system",
        "new development and major renewal of recruitment registration and interview scheduling app",
        "replatforming and functional improvements of automated matching system for recruitment",
        "functional improvements and bug investigation/fix for Saas system for recruitment agencies."
      ],
      environment: [
        "Docker", "React", "VueJS", "TypeScript", "TypeORM", "Nodejs", "Laravel",
        "php7系 (PHP 7.x)", "Yii", "es6", "jQuery", "Java", "Tomcat", "ECS for fargate", "RDS"
      ]
    },
    {
      title: "終活支援企業のWEBアプリケーション開発 (Web Application Development for End-of-Life Support Company)",
      period: "2020年1月~9月",
      role: "Development Leader",
      responsibilities: [
        "Design of complete replatforming for funeral home introduction site",
        "taking over infrastructure, server-side, and front-end from external vendors",
        "back-end and front-end development of new real estate buying/selling and brokerage site operated by end-of-life support company",
        "leading development team as Scrum Master using Shortcut for boards."
      ],
      environment: [
        "php7.3 (PHP 7.3)", "Laravel5系 (Laravel 5.x)", "VueJS", "ALB", "ECR",
        "ECS for fargate", "EC2", "ElasticBeansTalk", "RDS", "DynamoDB", "AppSync",
        "Amplify", "Cognito/UserPool", "cloud front", "S3", "GitHubActions"
      ]
    },
    {
      title: "看護師向けコミュニティーサイトの運用改修 (Operation and Improvement of Community Site for Nurses)",
      period: "2019年7月〜2019年12月",
      role: "Sub-Leader",
      responsibilities: [
        "Responsible for overall operation of the nurse community site.",
        "Mainly responsible for improving insurance services for nurses and nurse job review site.",
        "Developed a nurse job posting registration site for Indeed ads.",
        "Developed in 2-week agile sprints, using Shortcut for boards."
      ],
      environment: [
        "NextJS", "NuxtJS", "TypeScript", "Lumen", "Docker", "ECS", "Fargate",
        "AWSCodebuild", "S3", "ALB", "ElasticSearch", "API GateWay", "Lambda"
      ]
    },
    {
      title: "海外向けアイドルプラットフォームアプリ開発 (Overseas Idol Platform App Development)",
      period: "2019年3月〜2019年6月",
      role: "Project Manager & Development Engineer",
      responsibilities: [
        "As Project Manager, defined specifications, selected technologies, and supported members.",
        "As a programmer, developed WebAPIs and native apps.",
        "Led development team as Scrum Master, using Shortcut for boards."
      ],
      environment: [
        "Laravel5.8 (Laravel 5.8)", "php7.2 (PHP 7.2)", "ReactNative", "swageer",
        "EC2", "S3", "CloudFront", "ElasticBeansToken", "Rds for aurora", "ElastiCache"
      ]
    },
    {
      title: "飲食チェーンクーポンアプリサーバーサイド開発 (Server-side Development for Restaurant Chain Coupon App)",
      period: "2018年10月〜2019年2月",
      role: "Lead Engineer",
      responsibilities: [
        "Developed WebAPIs called from native apps and administration screens during the migration of the back-end from Firebase to AWS",
        "also performed data migration."
      ],
      environment: [
        "Laravel5.8 (Laravel 5.8)", "php7.2 (PHP 7.2)", "EC2", "S3", "CloudFront",
        "ElasticBeansToken", "Rds for aurora"
      ]
    },
    {
      title: "看護師国家試験対策アプリリプレイス開発 (Replacement Development for National Nursing Exam Preparation App)",
      period: "2017年11月〜2018年9月",
      role: "Lead Engineer",
      responsibilities: [
        "For an existing app replacement project, responsible for overall specification definition, technology selection, architecture design for server-side and native apps",
        "and partially handled iOS and Android development.",
        "Developed in 2-week agile sprints, using JIRA for boards."
      ],
      environment: [
        "Swift4.1", "Kotlin1.2", "RxSwift", "RxJava2", "RealmSwift", "Firebase",
        "BitBucket", "JIRA", "Confluence"
      ]
    },
    {
      title: "看護師向けシフト管理アプリ開発 (Nurse Shift Management App Development)",
      period: "2017年3月　〜 2017年10月",
      role: "Lead Engineer",
      responsibilities: [
        "Responsible for new development of a nurse shift management app, including specification creation, technology selection, architecture design, and iOS development.",
        "Introduced reactive programming and DDD concepts into the design.",
        "Developed in 2-week agile sprints, using JIRA for boards."
      ],
      environment: [
        "Swift3.1", "RxSwift", "RealmSwift", "BitBucket", "JIRA", "Confluence"
      ]
    },
    {
      title: "看護師向け生理日予測コンテンツ開発 (Nurse Period Prediction Content Development)",
      period: "2016年6月　〜　2017年2月",
      role: "Lead Engineer",
      responsibilities: [
        "Responsible for nurse period prediction content development, including technology selection, architecture design, and Web, iOS, and Android development.",
        "Introduced Xamarin, a hybrid app development tool, for the native side."
      ],
      environment: [
        "Xamarin.Forms", "C#", "php5.6 (PHP 5.6)", "php5.1.6 (PHP 5.1.6)",
        "fuelphp1.8 (FuelPHP 1.8)", "ethna", "MySql5.6", "centos"
      ]
    },
    {
      title: "看護師向けコミュニティーサイトの運営 (Operation of Community Site for Nurses)",
      period: "2016年4月 〜 2016年5月",
      role: "Programmer",
      responsibilities: [
        "As a programmer, responsible for modifying existing content and developing new features."
      ],
      environment: [
        "php5.1.6 (PHP 5.1.6)", "MySql5.6", "ethna", "centos"
      ]
    },
    {
      title: "ネイティブカードバトルゲームの運用 (Operation of Native Card Battle Game)",
      period: "2016年1月 〜 2016年3月",
      role: "Programmer",
      responsibilities: [
        "As an engineer, responsible for functional improvements, API development, and WebView development.",
        "Also handled operational tasks such as creating SQL for master data updates."
      ],
      environment: [
        "php5.6 (PHP 5.6)", "jQuery", "MySql5.6", "centos"
      ]
    },
    {
      title: "ネイティブ恋愛ゲームの開発運用 (Development and Operation of Native Romance Game)",
      period: "2015年6月　〜 2016年12月",
      role: "Programmer",
      responsibilities: [
        "As an engineer, responsible for new feature development across client, server, and batch processing.",
        "Developed an original batch framework from scratch for batch processing."
      ],
      environment: [
        "php5.3 (PHP 5.3)", "fuelphp1.7 (FuelPHP 1.7)", "unity4.3 (Unity 4.3)",
        "Mysql5.6", "centos"
      ]
    },
    {
      title: "ネイティブ野球ゲームの開発、運用 (Development and Operation of Native Baseball Game)",
      period: "2014年1月　〜 2015年3月",
      role: "Sub-Leader",
      responsibilities: [
        "As a project launch member, responsible for specification definition, server-side, and batch processing development.",
        "As a sub-leader, also handled code reviews, external vendor management, member support, line management, and specification adjustments.",
        "After launch, also handled master data updates and production deployments."
      ],
      environment: [
        "php5.3 (PHP 5.3)", "fuelphp1.7 (FuelPHP 1.7)", "unity4.3 (Unity 4.3)",
        "Mysql5.6", "centos"
      ]
    },
    {
      title: "ソーシャルカードバトル開発、運用 (Social Card Battle Development and Operation)",
      period: "2012年8月 〜 2013年12月",
      role: "Sub-Leader",
      responsibilities: [
        "As a project new feature development lead, responsible for server-side and batch processing development for raid events and tower-type mission events.",
        "Also handled client layout adjustments.",
        "In addition to development, also handled update tasks such as master data updates and production deployments."
      ],
      environment: [
        "php5.2 (PHP 5.2)", "symfony1.7 (Symfony 1.7)", "Mysql5.5", "centos"
      ]
    },
    {
      title: "ネイティブカジュアルアプリ開発 (Native Casual App Development)",
      period: "2012年3月 〜 2012年7月",
      role: "Programmer",
      responsibilities: [
        "As a development engineer, released three utility calculator apps and casual game apps.",
        "Primarily worked in a two-person team with an engineer and a designer, so also participated in specification definition meetings."
      ],
      environment: [
        "objective-C"
      ]
    },
    {
      title: "ガラケーWEBコンテンツ開発 (Feature Phone Web Content Development)",
      period: "2011年1月 〜 2012年2月",
      role: "Programmer, Infrastructure Engineer",
      responsibilities: [
        "As an engineer, responsible for modifying existing content and fixing bugs.",
        "Also handled new content for carrier official sites, including server-side, infrastructure design, and customer coordination.",
        "Additionally, as an infrastructure engineer, responsible for server construction and monitoring for new content."
      ],
      environment: [
        "php5.1 (PHP 5.1)", "ethna", "Mysql", "centos", "apache"
      ]
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          経歴 (Work History)
        </h2>
        {workHistory.map((project, index) => (
          <ProjectEntry key={index} {...project} index={index} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
