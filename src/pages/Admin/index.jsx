import React from 'react';
import Header from '../../components/Header';
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminExperiences from './AdminExperiences';
import AdminProjects from './AdminProjects';
import AdminCourses from './AdminCourses';

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
  ];
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="p-10">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      )}
    </div>
  );
};

export default Admin;
