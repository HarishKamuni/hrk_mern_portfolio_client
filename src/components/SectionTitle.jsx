import React from 'react';

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-10 py-10 max-sm:gap-3">
      <h1 className="text-3xl text-white max-sm:text-xl max-sm:w-32 ">
        {title}
      </h1>
      <div className="w-60 h-px bg-tertiary max-sm:w-40"></div>
    </div>
  );
};

export default SectionTitle;
