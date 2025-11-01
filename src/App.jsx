import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Loader from './components/Loader';
import { useState } from 'react';

function App() {
  const [shaowLoading, setShowLoading] = useState(false);
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
