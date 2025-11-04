import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useSelector } from 'react-redux';

const Contact = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  console.log(contact);
  return (
    <div className="pb-5">
      <SectionTitle title="Say Hello" />
      <div className="flex items-center justify-between -pt-5 max-sm:flex-col">
        <div>
          <p className="text-tertiary">{'{'}</p>
          {Object.keys(contact).map((key) => {
            return (
              <p key={key} className="flex gap-1 ml-5">
                <span className="text-tertiary">"{key}" :</span>
                <span className="text-tertiary"> "{contact[key]}"</span>
              </p>
            );
          })}
          <p className="text-tertiary">{'}'}</p>
        </div>
        <div className="h-[400px] py-5 -mr-30 max-sm:mr-0 max-sm:w-full max-sm:h-80">
          <DotLottieReact
            src="https://lottie.host/63e989d4-d2d1-49d5-b55b-49144d4beba6/QMHWIrqcca.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
