import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import LoginEmailPass from './pages/update/LoginEmailPass';
import UpdatePassword from './pages/update/UpdatePassword';

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/updatePass' element={<UpdatePassword/>}/>
        <Route path='/emailPass' element={<LoginEmailPass/>}/>
      </Routes>
    </div>
  );
};

export default App;
