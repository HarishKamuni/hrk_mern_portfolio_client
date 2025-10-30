import React from 'react';

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi, I am</h1>
      <h1 className="text-7xl text-secondary font-semibold">
        Harish Radhesham Kamuni
      </h1>
      <h1 className="text-6xl text-white font-semibold">
        I build thing for web
      </h1>
      <p className="text-white w-2/3">
        I am Full Stack Web Developer. Currently I am working as a React
        Developer in India. Also, sharing my knowledge to the students that I
        have gained in my carrier through online teaching across the world.
      </p>
      <button className="border-2 border-tertiary px-10 py-3 rounded text-tertiary">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
