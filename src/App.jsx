import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ShowLoading, setPortfolioData } from './redux/rootSlice';

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      // setTimeout(() => {
      dispatch(setPortfolioData(response.data));
      dispatch(HideLoading());
      // }, 1000);
    } catch (error) {
      dispatch(ShowLoading());
      console.log(error);
    }
  };
  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
