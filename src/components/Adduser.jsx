import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../redux/Action';

function Adduser() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('staff');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userobj = { name, email, phone, role };
    dispatch(addNewUser(userobj));
    navigate('/user');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='card'>
          <div className='card-header' style={{ textAlign: 'center' }}>
            <h2>Add User</h2>
          </div>

          <div className='card-body' style={{ textAlign: 'left' }}>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='form-group'>
                  <label htmlFor="name">Name</label>
                  <input type="text" value={name} className='form-control' placeholder='Enter Name'
                    onChange={(e) => { setName(e.target.value) }} />
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='form-group'>
                  <label htmlFor="email">Email</label>
                  <input type="email" value={email} className='form-control' placeholder='Enter Email'
                    onChange={(e) => { setEmail(e.target.value) }} />
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='form-group'>
                  <label htmlFor="phone">Phone</label>
                  <input type="text" value={phone} className='form-control' placeholder='Enter Phone'
                    onChange={(e) => { setPhone(e.target.value) }} />
                </div>
              </div>

              <div className='col-lg-12'>
                <div className='form-group'>
                  <label htmlFor="role">Role</label>
                  <select className='form-control' value={role} onChange={(e) => { setRole(e.target.value) }}>
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='card-footer' style={{ textAlign: 'left' }}>
            <button className='btn btn-primary me-2' type='submit'>Submit</button>
            <Link className='btn btn-danger' to='/user'>Back</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Adduser;