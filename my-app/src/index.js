import React from 'react';
import Footer from './footer/footer';
import ReactDOM from 'react-dom/client';
import './index.css';
import Categories from './Categories/categories';
import Courses from './Categories/souCat/courses';
import Navbar from './Navbar/Navbar';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Kata from './Kata/Kata';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="/categories/:id" element={<Categories />} />
      <Route path="/categories/:id/:id" element={<Courses />} />
      <Route path='/kata' element={<Kata />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
