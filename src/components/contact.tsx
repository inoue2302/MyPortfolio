import React from 'react';

interface ContactLinkProps {
  label: string;
  url: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ label, url }) => {
  return (
    <li className="mb-2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {label}: {url}
      </a>
    </li>
  );
};

const Contact: React.FC = () => {
  const socialLinks = [
    { label: "GitHub", url: "https://github.com/ShotaWeb3" },
    { label: "GitHub", url: "https://github.com/inoue2302" },
    { label: "Zenn", url: "https://zenn.dev/shota_web305" },
    { label: "Qiita", url: "https://qiita.com/inoue2355" },
    { label: "AWS認定 DevOps Engineer Professional", url: "https://www.credly.com/badges/72383b84-8321-4e51-a2d6-423ec23a8d5a/public_url" },
    { label: "AWSソリューションアーキテクトアソシエート認定バッチ", url: "https://www.youracclaim.com/badges/04b41705-9e59-43da-85a2-4654a88af245/linked_in_profile" },
    { label: "AWSデベロッパーアソシエート認定バッチ", url: "https://www.credly.com/badges/ffc659dd-bdcb-4452-8968-85619276005f?source=linked_in_profile" },
    { label: "AWS SysOpsアドミニストレーター認定バッチ", url: "https://www.credly.com/badges/b03deb49-349b-487a-ab62-42585d25e0df?source=linked_in_profile" },
    { label: "フルスタック＜上級＞（ver.2）Test受験 Track Works", url: "https://job.tracks.run/share/tIBdacXx3/0aa203b2-1948-488c-b69a-bc4607bd2e92" },
  ];

  return (
    <section id="contact" className="my-8 p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">関連URL (Related URLs)</h2>
      <ul>
        {socialLinks.map((link, index) => (
          <ContactLink key={index} label={link.label} url={link.url} />
        ))}
      </ul>
    </section>
  );
};

export default Contact;
