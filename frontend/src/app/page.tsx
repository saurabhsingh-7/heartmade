// ./components/HeroSection.tsx
import React from 'react';

interface Props {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  sections: { title: string; description: string; ctaText: string; ctaLink: string }[];
}

const HeroSection: React.FC<Props> = ({
  title,
  description,
  buttonText,
  buttonLink,
  sections,
}) => {
  return (
    <div className="hero bg-gray-100">
      <div className="hero-container container mx-auto flex flex-col justify-center h-screen px-4 lg:px-14">
        <h1 className="text-4xl font-bold leading-tight text-gray-900">{title}</h1>
        <p className="text-xl mt-4 text-gray-700">{description}</p>
        <div className="mt-8">
          <a href={buttonLink} className="btn btn-primary">
            {buttonText}
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 container mx-auto px-4 lg:px-14">
        {sections?.map((section) => (
          <div key={section.title} className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
            <p className="text-gray-700 mt-2">{section.description}</p>
            <a href={section.ctaLink} className="btn btn-outline mt-4">
              {section.ctaText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
