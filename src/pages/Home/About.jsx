import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useSelector } from 'react-redux';

const About = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, lottiUrl, description2, description } = about;
  return (
    <div>
      <SectionTitle title={'About'} />
      <div className="flex items-center max-sm:flex-col">
        <div className="h-[75vh] w-3xl -ml-30 max-sm:ml-0 max-sm:w-xl">
          <DotLottieReact src={lottiUrl} loop autoplay />
        </div>
        <div className="flex flex-col gap-5 w-1/2 max-sm:w-full">
          <p className="text-white text-sm font-light">{description || ''}</p>
          <p className="text-white text-sm font-light">{description2 || ''}</p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl max-sm:text-lg">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-5 mt-5">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="border border-tertiary px-10 py-2 max-sm:px-6 max-sm:py-1"
              >
                <h1 className="text-tertiary max-sm:text-sm">{skill}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
