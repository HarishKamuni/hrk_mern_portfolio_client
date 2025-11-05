import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Loader from './components/Loader';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  HideLoading,
  ReloadData,
  ShowLoading,
  setPortfolioData,
} from './redux/rootSlice';
import Admin from './pages/Admin';

function App() {
  const { loading, portfolioData, reloadData } = useSelector(
    (state) => state.root
  );
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      // console.log(response);
      // setTimeout(() => {
      dispatch(setPortfolioData(response.data));
      dispatch(ReloadData(false));
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

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData]);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
