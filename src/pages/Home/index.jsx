import React from 'react';
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Experiences from '../Experiences';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 max-sm:px-10">
        <Intro />
        <About />
        <Experiences />
      </div>
    </div>
  );
};

export default Home;
