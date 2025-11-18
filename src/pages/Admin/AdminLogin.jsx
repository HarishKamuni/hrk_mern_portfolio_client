import { message } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import { useNavigate } from 'react-router-dom';
import API from '../../utils/axiosInstance';

const AdminLogin = () => {
  const [userData, setUserData] = useState({
    userName: '',
    passward: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = async (e) => {
    e.preventDefault();
    try {
      dispatch(ShowLoading());
      const response = await API.post(`/api/portfolio/admin-login`, userData);
      dispatch(HideLoading());

      if (response.data.success) {
        console.log(response.data.message);
        message.success(response.data.message);
        localStorage.setItem('token', JSON.stringify(response.data));
        // window.location.href = '/admin';
        navigate('/admin');
      } else {
        console.log(response.data.message);
        message.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      message.error(error.message);
      dispatch(HideLoading());
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="w-96 flex flex-col gap-5  p-5 shadow border border-gray-500 bg-white">
        <h1 className="text-xl text-primary font-semibold text-center uppercase">
          Portfolio - Admin Login
        </h1>
        <hr className="opacity-15" />
        <form onSubmit={(e) => login(e)} className="flex flex-col gap-5">
          <label htmlFor="userName" className="-mb-4">
            ENTER USERNAME :
          </label>
          <input
            type="text"
            name="userName"
            value={userData.userName}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, userName: e.target.value }))
            }
            placeholder="username"
          />
          <label htmlFor="passward" className="-mb-4">
            ENTER PASSWARD :
          </label>
          <input
            type="passward"
            name="passward"
            value={userData.passward}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, passward: e.target.value }))
            }
            placeholder="passward"
          />
          <button
            type="submit"
            className="bg-primary text-white py-2 text-xl font-semibold cursor-pointer hover:bg-[#1f233bec]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
