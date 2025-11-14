import React from 'react';
import Header from '../../components/Header';
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminExperiences from './AdminExperiences';
import AdminProjects from './AdminProjects';
import AdminCourses from './AdminCourses';
import AdminContact from './AdminContact';

const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);

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
      <h1 className="text-3xl font-bold text-primary  px-5 py-5">
        Portfolio Admin
      </h1>
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
