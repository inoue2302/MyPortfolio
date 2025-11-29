"use client";

import React, { useEffect, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="max-w-4xl mx-auto">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-2xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300 border border-blue-100">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            自己紹介 (Self-introduction)
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="text-lg">
              After working at a social game development company, I am now a freelance engineer. I can handle a wide range of tasks from server-side development to front-end and native app development. I often get involved from the product launch phase, so I excel at handling everything from requirements definition to design and development.
            </p>
            <p className="text-lg">
              Recently, I was responsible for the entire back-end development of payment features using Stripe and a complete infrastructure replatforming for a service using generative AI.
            </p>
          </div>
        </div>

        <div className={`bg-gradient-to-br from-white to-purple-50 shadow-xl rounded-2xl p-8 transition-all duration-1000 delay-200 hover:shadow-2xl border border-purple-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            今後の目標 (Future Goals)
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start group">
              <span className="text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">🎯</span>
              <span className="text-lg text-gray-700">I want to be involved in development methods and service development using generative AI.</span>
            </li>
            <li className="flex items-start group">
              <span className="text-2xl mr-3 group-hover:scale-125 transition-transform duration-300">🚀</span>
              <span className="text-lg text-gray-700">I want to release my own services leveraging my full-stack experience.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
