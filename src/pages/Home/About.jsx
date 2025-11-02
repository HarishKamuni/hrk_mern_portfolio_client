import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node',
    'Express',
    'MongoDB',
    'Firebase',
  ];
  return (
    <div>
      <SectionTitle title={'About'} />
      <div className="flex items-center max-sm:flex-col">
        <div className="h-[70vh] w-4xl -ml-30 max-sm:ml-0 max-sm:w-3xl">
          <DotLottieReact
            src="https://lottie.host/cee19b5c-a2f7-4aed-bb62-7b9b553e2265/egNbC0BVV3.lottie"
            loop
            autoplay
          />
        </div>
        <div className="flex flex-col gap-5 w-1/2 max-sm:w-full">
          <p className="text-white text-sm font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            eveniet, culpa ad quaerat odio laboriosam earum perspiciatis error
            obcaecati sapiente, doloremque velit suscipit sint voluptatem
            expedita, cupiditate numquam reiciendis aliquid repudiandae ullam.
            Distinctio a rerum error sed, laboriosam reprehenderit dolore.
          </p>
          <p className="text-white text-sm font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
            molestiae modi alias nihil deleniti quisquam quam ipsam! Explicabo,
            facere tempore placeat quia obcaecati ut nihil quaerat reiciendis
            hic voluptas officiis quae, accusamus at a eius laborum. Quibusdam
            doloremque architecto quas soluta nulla exercitationem, nam sed
            excepturi officia, culpa itaque assumenda incidunt hic consequuntur
            voluptate quod reiciendis non omnis perspiciatis illum.
          </p>
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
