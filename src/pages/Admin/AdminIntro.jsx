import { Form } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const AdminIntro = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.intro}
      >
        <Form.Item name={'welcomeText'} label="Welcome Text">
          <input placeholder="welcome text" />
        </Form.Item>
        <Form.Item name={'firstName'} label="First Name">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name={'lastName'} label="Last Name">
          <input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name={'caption'} label="Caption">
          <input placeholder="Caption" />
        </Form.Item>
        <Form.Item name={'description'} label="Description">
          <textarea placeholder="Description" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="text-white bg-primary py-2 px-10 font-extrabold cursor-pointer">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdminIntro;
