import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminExperiences from './AdminExperiences';
import AdminProjects from './AdminProjects';
import AdminCourses from './AdminCourses';
import AdminContact from './AdminContact';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const navigate = useNavigate();

  const adminLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin-login');
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/admin-login');
    }
  }, []);

  const items = [
    {
      key: '1',
      label: 'Intro',
      children: <AdminIntro />,
    },
    {
      key: '2',
      label: 'About',
      children: <AdminAbout />,
    },
    {
      key: '3',
      label: 'Experiences',
      children: <AdminExperiences />,
    },
    {
      key: '4',
      label: 'Projects',
      children: <AdminProjects />,
    },
    {
      key: '5',
      label: 'Courses',
      children: <AdminCourses />,
    },
    {
      key: '6',
      label: 'Contact',
      children: <AdminContact />,
    },
  ];
  return (
    <div>
      {/* <Header /> */}
      <div className="flex items-center justify-between max-sm:gap-3 px-5 py-5">
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-bold text-primary max-sm:text-xl max-sm:w-32 ">
            Portfolio Admin
          </h1>
          <div className="w-60 h-px bg-gray-500 max-sm:w-40"></div>
        </div>
        <button
          className="cursor-pointer font-medium text-white bg-primary py-1 px-4 hover:text-red-500 uppercase"
          onClick={adminLogout}
        >
          Logout
        </button>
      </div>
      {/* <h1 className="text-3xl font-bold text-primary  px-5 py-5">
        Portfolio Admin
      </h1> */}
      <hr className="opacity-5 mx-5" />
      {portfolioData && (
        <div className="px-5">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      )}
    </div>
  );
};

export default Admin;
