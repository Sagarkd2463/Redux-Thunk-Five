import {
    MAKE_REQUEST,
    FAIL_REQUEST,
    GET_USER_LIST,
    DELETE_USER,
    ADD_USER,
    UPDATE_USER,
    GET_USER_OBJ
} from './Actiontype';
import axios from 'axios';
import { toast } from 'react-toastify';

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
};

export const failRequest = (error) => {
    return {
        type: FAIL_REQUEST,
        payload: error
    }
};

export const getUserList = (data) => {
    return {
        type: GET_USER_LIST,
        payload: data
    }
};

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
};

export const addUser = () => {
    return {
        type: ADD_USER
    }
};

export const updateUser = () => {
    return {
        type: UPDATE_USER
    }
};

export const getUserObj = (data) => {
    return {
        type: GET_USER_OBJ,
        payload: data
    }
};

export const fetchUserList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        setTimeout(() => {
            axios.get('http://localhost:8000/user')
                .then((res) => {
                    const userList = res.data;
                    dispatch(getUserList(userList));
                })
                .catch((err) => {
                    dispatch(failRequest(err.message));
                })
        }, 2000);
    }
};

export const removeUser = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.delete('http://localhost:8000/user/' + id)
            .then(() => {
                dispatch(deleteUser());
            })
            .catch((err) => {
                dispatch(failRequest(err.message));
            })
    }
};

export const addNewUser = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.post('http://localhost:8000/user', data)
            .then((res) => {
                dispatch(addUser());
                toast.success('User Added successfully.')
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
    }
}

export const updateExistingUser = (data, id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.put('http://localhost:8000/user/' + id, data)
            .then((res) => {
                dispatch(updateUser());
                toast.success('User Updated successfully.')
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
    }
}
export const fetchUserObj = (id) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:8000/user/' + id)
            .then((res) => {
                const userlist = res.data;
                dispatch(getUserObj(userlist));
            }).catch(err => {
                dispatch(failRequest(err.message))
            })
    }
};
