import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './aboutpage';
import AccountPage from './accountpage';
import ProductPage from './productpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/account" element={<AccountPage />} />
       <Route path="/product" element={<ProductPage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

