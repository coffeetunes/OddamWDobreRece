import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './scss/main.scss';
import Home from "./Pages/Home/Home";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
      <Router>
        <div className="app-container">
            <Menu />
            <div className="content">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
            </div>
            <Footer />
        </div>
      </Router>
  );
}

export default App;
