import React from 'react';
import Header from '../../components/Header';
import Intro from './Intro';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Courses from './Courses';
import Contact from './Contact';
import Footer from './Footer';
import LeftSider from './LeftSider';

const Home = ({ shaowLoading }) => {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 max-sm:px-10">
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Courses />
        <Contact />
        <Footer />
        {shaowLoading ? null : <LeftSider />}
      </div>
    </div>
  );
};

export default Home;
