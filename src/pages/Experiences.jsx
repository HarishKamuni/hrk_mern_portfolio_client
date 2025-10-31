import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { experiences } from '../resources/experiences';
const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title={'Experience'} />
      <div className="flex py-10 gap-30 max-sm:flex-col max-sm:gap-20">
        <div className="flex flex-col gap-10 border-l-2 border-[#06545490] w-1/3 max-sm:w-full max-sm:flex-row  max-sm:overflow-x-scroll max-sm:gap-3">
          {experiences.map((e, i) => {
            return (
              <div
                className="cursor-pointer flex items-center"
                onClick={() => setSelectedItemIndex(i)}
              >
                <h1
                  className={`text-xl pl-5 w-40 ${
                    selectedItemIndex === i
                      ? 'text-tertiary border-l-4 -ml-[3px] bg-[#058a7442] py-2'
                      : 'text-white'
                  }`}
                >
                  {e.period}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary ">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            {experiences[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
