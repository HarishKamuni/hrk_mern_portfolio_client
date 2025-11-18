import { Form, message } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';

import API from '../../utils/axiosInstance';

const AdminIntro = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await API.post(`/api/portfolio/update-intro`, {
        ...values,
        _id: portfolioData.intro._id,
      });
      console.log(response);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    }
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
          <button
            className="text-white bg-primary py-2 px-10 font-extrabold cursor-pointer "
            type="submit"
          >
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AdminIntro;
