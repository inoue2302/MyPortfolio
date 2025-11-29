"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
          ポートフォリオ
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          フルスタックエンジニア
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <Link
            href="/about"
            className="group relative overflow-hidden bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4">👤</div>
              <h2 className="text-2xl font-bold mb-2">自己紹介</h2>
              <p className="text-gray-600">経歴と目標</p>
            </div>
          </Link>

          <Link
            href="/skills"
            className="group relative overflow-hidden bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4">⚡</div>
              <h2 className="text-2xl font-bold mb-2">スキル</h2>
              <p className="text-gray-600">技術スタック</p>
            </div>
          </Link>

          <Link
            href="/projects"
            className="group relative overflow-hidden bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl mb-4">💼</div>
              <h2 className="text-2xl font-bold mb-2">案件</h2>
              <p className="text-gray-600">プロジェクト履歴</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
