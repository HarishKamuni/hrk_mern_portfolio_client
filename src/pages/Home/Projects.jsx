import React, { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData;

  return (
    <div>
      <SectionTitle title={'Projects'} />
      <div className="flex py-10 gap-40 max-sm:flex-col max-sm:gap-20">
        <div className="flex flex-col gap-10 border-l-2 border-[#06545490] w-1/3 max-sm:w-full max-sm:flex-row  max-sm:overflow-x-scroll max-sm:gap-3">
          {project.map((p, i) => {
            return (
              <div
                key={i}
                className="cursor-pointer flex items-center"
                onClick={() => setSelectedItemIndex(i)}
              >
                <h1
                  className={`text-lg max-sm:text-sm max-sm:font-light pl-5 w-40 ${
                    selectedItemIndex === i
                      ? 'text-tertiary border-l-4 -ml-[3px] bg-[#058a7442] py-2'
                      : 'text-white'
                  }`}
                >
                  {p.title}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex gap-10 items-center justify-center max-sm:flex-col">
          <img
            src={project[selectedItemIndex].image}
            alt=""
            className="h-60 w-2/3 object-contain max-sm:w-full"
          />
          <div className="flex flex-col gap-5 w-1/3 max-sm:w-full">
            <h1 className="text-secondary text-xl">
              {project[selectedItemIndex].title}
            </h1>
            <p className="text-tertiary max-sm:text-sm">
              {project[selectedItemIndex].link}
            </p>
            <div className="flex gap-5 cursor-pointer">
              {project[selectedItemIndex].technologies.map((t, i) => {
                return (
                  <span
                    key={i}
                    className="text-white  text-sm bg-[#763e0b] px-3 rounded-2xl hover:underline"
                  >
                    {t}
                  </span>
                );
              })}
            </div>
            <p className="text-white max-sm:text-sm">
              {project[selectedItemIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
