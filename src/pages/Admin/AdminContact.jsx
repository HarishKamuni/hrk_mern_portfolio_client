import { Form, message } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import API from '../../utils/axiosInstance';

const AdminContact = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await API.post(`/api/portfolio/update-contact`, {
        ...values,
        _id: portfolioData.contact._id,
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
        initialValues={portfolioData.contact}
        className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 max-sm:gap-0"
      >
        <Form.Item name={'name'} label="Name">
          <input placeholder="Name" />
        </Form.Item>
        <Form.Item name={'gender'} label="Gender">
          <input placeholder="Gender" />
        </Form.Item>
        <Form.Item name={'age'} label="Age">
          <input placeholder="Age" />
        </Form.Item>
        <Form.Item name={'email'} label="Email">
          <input placeholder="Email" />
        </Form.Item>
        <Form.Item name={'mobile'} label="Mobile">
          <input placeholder="Mobile" />
        </Form.Item>
        <Form.Item name={'address'} label="Address">
          <textarea placeholder="Address" />
        </Form.Item>
        <div></div>
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

export default AdminContact;
