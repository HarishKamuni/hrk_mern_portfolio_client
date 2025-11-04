import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [shaowLoading, setShowLoading] = useState(false);
  const getPortfolioData = async () => {
    try {
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      console.log(response);
    } catch (error) {}
  };
  useEffect(() => {
    getPortfolioData();
  }, []);
  return (
    <BrowserRouter>
      {shaowLoading ? <Loader /> : null}

      <Routes>
        <Route path="/" element={<Home shaowLoading={shaowLoading} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
