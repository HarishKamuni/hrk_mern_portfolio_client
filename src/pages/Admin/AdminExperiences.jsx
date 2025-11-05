import { Button, Form, Modal, message } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';

const AdminExperiences = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        '/api/portfolio/add-experience',
        values
      );
      console.log(response);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end py-3">
        <button
          className="bg-primary text-white font-bold py-2 px-6 cursor-pointer"
          onClick={() => setShowAddEditModal(true)}
        >
          Add Experiences
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {experience.map((e, i) => {
          return (
            <div key={e._id} className="shadow border p-5 flex flex-col gap-2">
              <h1 className="text-primary font-bold text-xl">{e.period}</h1>
              <hr />
              <h1>Company : {e.company}</h1>
              <h1>Role : {e.title}</h1>
              <h1>{e.description}</h1>
              <div className="flex gap-3 justify-end ">
                <button className="text-white bg-secondary py-1 px-5 cursor-pointer hover:bg-red-700">
                  Delete
                </button>
                <button className="text-white bg-primary py-1 px-5 cursor-pointer hover:bg-blue-950">
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        open={showAddEditModal}
        title={selectedItemForEdit ? 'Edit Experience' : 'Add Experience'}
        // onOk={handleOk}
        onCancel={() => setShowAddEditModal(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name={'period'} label="Period">
            <input placeholder="Period" />
          </Form.Item>
          <Form.Item name={'company'} label="Company">
            <input placeholder="Company" />
          </Form.Item>
          <Form.Item name={'title'} label="Role">
            <input placeholder="Role" />
          </Form.Item>
          <Form.Item name={'description'} label="Job Description">
            <textarea placeholder="Job Description" />
          </Form.Item>
          <div className="flex justify-end gap-5">
            <button
              type="button"
              className="bg-red-800 text-white py-1 px-5 cursor-pointer"
              onClick={() => setShowAddEditModal(false)}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-primary text-white py-1 px-5 cursor-pointer rounded-md"
            >
              {selectedItemForEdit ? 'update' : 'add'}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminExperiences;
