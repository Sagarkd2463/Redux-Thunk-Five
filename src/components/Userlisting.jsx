import React, { useEffect } from 'react';
import { fetchUserList, removeUser } from '../redux/Action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Userlisting(props) {

  useEffect(() => {
    props.loaduser();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Do you want to remove?')) {
      props.removeuser(id);
      props.loaduser();
      toast.success('User removed successfully.');
    }
  };

  return (

    props.user.loading ? <div><h2>Loading...</h2></div> :
      props.user.errormessage ? <div><h2>{props.user.errormessage}</h2></div> :

        <div>
          <div className='card'>
            <div className='card-header'>
              <Link to='/user/add' className='btn btn-success'>Add User</Link>
            </div>
            <div className='card-body'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.user.userlist && props.user.userlist.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.role}</td>
                          <td>
                            <Link to={`/user/edit/${item.id}`} className='btn btn-primary me-2'>Edit</Link>
                            <button onClick={() => { handleDelete(item.id) }} className='btn btn-danger'>Delete</button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(fetchUserList()),
    removeuser: (id) => dispatch(removeUser(id))
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);