import React from 'react';

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary">
      <div className="flex gap-5 text-4xl font-semibold">
        <h1 className="text-secondary h">H</h1>
        <h1 className="text-white r">R</h1>
        <h1 className="text-tertiary k">K</h1>
      </div>
    </div>
  );
};

export default Loader;
