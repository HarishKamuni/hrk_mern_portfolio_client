import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../resources/projects';

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title={'Projects'} />
      <div className="flex py-10 gap-40 max-sm:flex-col max-sm:gap-20">
        <div className="flex flex-col gap-10 border-l-2 border-[#06545490] w-1/3 max-sm:w-full max-sm:flex-row  max-sm:overflow-x-scroll max-sm:gap-3">
          {projects.map((p, i) => {
            return (
              <div
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
            src={projects[selectedItemIndex].image}
            alt=""
            className="h-60 w-2/3 max-sm:w-full"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {projects[selectedItemIndex].title}
            </h1>
            <p className="text-tertiary max-sm:text-sm">
              {projects[selectedItemIndex].description}
            </p>
            <div className="flex gap-5 cursor-pointer">
              {projects[selectedItemIndex].technologies.map((t, i) => {
                return (
                  <span className="text-white text-sm bg-[#763e0b] px-3 rounded-2xl hover:underline">
                    {t}
                  </span>
                );
              })}
            </div>
            <p className="text-white max-sm:text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias, aperiam dolorem. Esse assumenda aliquam quo natus
              molestias consequuntur, architecto nesciunt voluptatibus minima
              illo doloribus vitae et, tempora numquam. Iste repellendus,
              molestias eaque dolore a reprehenderit consequatur quibusdam nisi
              voluptate soluta nemo nam doloribus numquam tenetur quos sapiente
              natus, enim perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
