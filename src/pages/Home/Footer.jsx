import React from 'react';

const Footer = () => {
  return (
    <div className="py-5 max-sm:py-0">
      <div className="h-px bg-gray-700"></div>
      <div className="flex flex-col gap-2 justify-center items-center py-5 text-gray-500 opacity-40">
        <h1>Designed and Developed By</h1>
        <h1 className="underline underline-offset-2 text-white">
          @ HARISH R. KAMUNI
        </h1>
      </div>
    </div>
  );
};

export default Footer;
