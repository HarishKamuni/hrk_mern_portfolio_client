import { Form, Modal, message } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';
import API from '../../utils/axiosInstance';

const AdminExperiences = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState('add');
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;

      if (selectedItemForEdit) {
        response = await API.post(`/api/portfolio/update-experience`, {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        const { title, image, description, technologies, link } = values;
        if (title !== undefined || description !== undefined)
          response = await API.post(`/api/portfolio/add-experience`, values);
      }

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      console.log(item);
      dispatch(ShowLoading());
      const response = await API.post(`/api/portfolio/delete-experience`, {
        _id: item._id,
      });
      dispatch(HideLoading());
      console.log(response);
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end py-3">
        <button
          className="bg-primary text-white font-bold py-2 px-6 cursor-pointer "
          onClick={() => {
            setType('add');
            setShowAddEditModal(true);
            setSelectedItemForEdit(null);
          }}
        >
          Add Experiences
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 max-sm:grid-cols-1">
        {experience.map((e, i) => {
          return (
            <div
              key={e._id}
              className="shadow border p-5 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-primary font-bold text-xl">{e.period}</h1>
                <hr />
                <h1>Company : {e.company}</h1>
                <h1>Role : {e.title}</h1>
                <p className="max-h-36 overflow-hidden mb-5">
                  {e.description.length > 200
                    ? `${e.description.slice(0, 180)}....`
                    : e.description}
                </p>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  className="text-white bg-secondary py-1 px-5 cursor-pointer hover:bg-red-700"
                  onClick={() => onDelete(experience[i])}
                >
                  Delete
                </button>
                <button
                  className="text-white bg-primary py-1 px-5 cursor-pointer hover:bg-blue-950"
                  onClick={() => {
                    setSelectedItemForEdit(experience[i]);
                    setShowAddEditModal(true);
                    setType('edit');
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {(type === 'add' || selectedItemForEdit) && (
        <Modal
          open={showAddEditModal}
          title={selectedItemForEdit ? 'Edit Experience' : 'Add Experience'}
          // onOk={handleOk}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
          footer={null}
        >
          <Form
            layout="vertical"
            initialValues={selectedItemForEdit}
            onFinish={onFinish}
          >
            <Form.Item name="period" label="Period">
              <input placeholder="Period" />
            </Form.Item>
            <Form.Item name="company" label="Company">
              <input placeholder="Company" />
            </Form.Item>
            <Form.Item name="title" label="Role">
              <input placeholder="Role" />
            </Form.Item>
            <Form.Item name="description" label="Job Description">
              <textarea placeholder="Job Description" />
            </Form.Item>
            <div className="flex justify-end gap-5">
              <button
                type="button"
                className="bg-red-800 text-white py-1 px-5 cursor-pointer"
                onClick={() => {
                  setShowAddEditModal(false);
                  setSelectedItemForEdit(null);
                }}
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
      )}
    </div>
  );
};

export default AdminExperiences;
