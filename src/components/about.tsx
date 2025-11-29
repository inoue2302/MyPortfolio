import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="my-8 p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">自己紹介 (Self-introduction)</h2>
      <p className="mb-4">
        After working at a social game development company, I am now a freelance engineer. I can handle a wide range of tasks from server-side development to front-end and native app development. I often get involved from the product launch phase, so I excel at handling everything from requirements definition to design and development. Recently, I was responsible for the entire back-end development of payment features using Stripe and a complete infrastructure replatforming for a service using generative AI.
      </p>

      <h3 className="text-xl font-bold mb-3">今後の目標 (Future Goals)</h3>
      <ul className="list-disc list-inside ml-4">
        <li>I want to be involved in development methods and service development using generative AI.</li>
        <li>I want to release my own services leveraging my full-stack experience.</li>
      </ul>
    </section>
  );
};

export default About;
