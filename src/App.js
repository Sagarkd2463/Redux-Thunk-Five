import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Adduser from './components/Adduser';
import Updateuser from './components/Updateuser';
import Userlisting from './components/Userlisting';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='header'>
          <Link to='/'>Home</Link>
          <Link to='/user'>User</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/user' element={<Userlisting></Userlisting>}></Route>
          <Route path='/user/add' element={<Adduser></Adduser>}></Route>
          <Route path='/user/edit/:code' element={<Updateuser></Updateuser>}></Route>
        </Routes>
      </Router>
      <ToastContainer className="toast-position" position='bottom-right'></ToastContainer>
    </div>

  );
}

export default App;
