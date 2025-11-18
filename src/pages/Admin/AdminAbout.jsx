import { Form, message } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import API from '../../utils/axiosInstance';

const AdminAbout = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const tempSkills = values.skills.split(',');
      values.skills = tempSkills;
      dispatch(ShowLoading());
      const response = await API.post(`/api/portfolio/update-about`, {
        ...values,
        _id: portfolioData.about._id,
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
        initialValues={{
          ...portfolioData.about,
          skills: portfolioData.about.skills.join(' , '),
        }}
      >
        <Form.Item name={'lottiUrl'} label="Lottie URL">
          <input placeholder="Lottie URL" />
        </Form.Item>

        <Form.Item name={'description'} label="Description 1">
          <textarea placeholder="Description 1 " />
        </Form.Item>
        <Form.Item name={'description2'} label="Description 2">
          <textarea placeholder="Description 2" />
        </Form.Item>
        <Form.Item name={'skills'} label="Skills">
          <textarea placeholder="Skills" />
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

export default AdminAbout;
