import React from 'react';
import { Link } from 'react-router-dom';

const LeftSider = () => {
  return (
    <div className="fixed left-7 bottom-0 max-sm:static">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col gap-3 text-gray-500 opacity-80 text-lg max-sm:flex-row max-sm:pb-5">
          <Link to={'/'}>
            <i class="ri-facebook-circle-fill "></i>
          </Link>
          <Link to={'/'}>
            <i class="ri-mail-fill "></i>
          </Link>
          <Link to={'/'}>
            <i class="ri-instagram-fill "></i>
          </Link>
          <Link to={'/'}>
            {' '}
            <i class="ri-linkedin-box-fill "></i>
          </Link>
          <Link to={'/'}>
            <i class="ri-github-fill "></i>
          </Link>
        </div>
        <div className="flex max-sm:hidden">
          <p className="w-px h-[150px] bg-gray-500 opacity-80"></p>
        </div>
      </div>
    </div>
  );
};

export default LeftSider;
