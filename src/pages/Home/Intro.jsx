import React from 'react';
import { useSelector } from 'react-redux';

const Intro = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { welcomeText, firstName, lastName, caption, description } = intro;
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">{welcomeText || 'Hi, I am'}</h1>
      <h1 className="text-7xl max-sm:text-3xl text-secondary font-semibold">
        {firstName || 'firstName'} {lastName || 'lastName'}
      </h1>
      <h1 className="text-6xl max-sm:text-2xl text-white font-semibold">
        {caption || 'caption'}
      </h1>
      <p className="text-white w-2/3 max-sm:font-light max-sm:text-sm">
        {description || 'desc'}
      </p>
      <button className="border-2 border-tertiary px-10 py-3 rounded text-tertiary max-sm:py-2 max-sm:text-sm">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
