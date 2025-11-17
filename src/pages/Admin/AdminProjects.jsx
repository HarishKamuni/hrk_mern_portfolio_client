import { Form, Modal, message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice';

const AdminProjects = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState('add');

  const onFinish = async (values) => {
    try {
      const tempTechnologies = values.technologies.split(',');
      values.technologies = tempTechnologies;
      dispatch(ShowLoading());
      let response;

      if (selectedItemForEdit) {
        response = await axios.post('/api/portfolio/update-project', {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        console.log('values', values);
        const { title, period, description, company } = values;
        if (
          title !== undefined ||
          period !== undefined ||
          description !== undefined ||
          company !== undefined
        )
          response = await axios.post('/api/portfolio/add-project', values);
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
      const response = await axios.post('/api/portfolio/delete-project', {
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
          className="bg-primary text-white font-bold py-2 px-6 cursor-pointer"
          onClick={() => {
            setType('add');
            setShowAddEditModal(true);
            setSelectedItemForEdit(null);
          }}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
        {project.map((e, i) => {
          return (
            <div
              key={e._id}
              className="shadow border p-5 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-primary font-semibold text-xl">
                  {e.title}
                </h1>
                <hr />
                <img
                  src={e.image}
                  alt=""
                  className="w-full h-40 object-contain"
                />
                <p>{e.link}</p>
                <h1>{e.technologies.join(', ')}</h1>
                <p className="max-h-36 overflow-hidden mb-5">
                  {e.description.length > 200
                    ? `${e.description.slice(0, 180)}....`
                    : e.description}
                </p>
              </div>
              <div className="flex gap-3 justify-end ">
                <button
                  className="text-white bg-secondary py-1 px-5 cursor-pointer hover:bg-red-700"
                  onClick={() => onDelete(project[i])}
                >
                  Delete
                </button>
                <button
                  className="text-white bg-primary py-1 px-5 cursor-pointer hover:bg-blue-950"
                  onClick={() => {
                    setSelectedItemForEdit(project[i]);
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
          title={selectedItemForEdit ? 'Edit Project' : 'Add Project'}
          // onOk={handleOk}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
          footer={null}
        >
          <Form
            layout="vertical"
            initialValues={
              {
                ...selectedItemForEdit,
                technologies: selectedItemForEdit?.technologies.join(', '),
              } || {}
            }
            onFinish={onFinish}
          >
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="image" label="Image URL">
              <input placeholder="image" />
            </Form.Item>
            <Form.Item name="link" label="Link">
              <input placeholder="Link" />
            </Form.Item>
            <Form.Item name="technologies" label="TechStack">
              <input placeholder="TechStack" />
            </Form.Item>
            <Form.Item name="description" label="Project Description">
              <textarea placeholder="Project Description" />
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

export default AdminProjects;
