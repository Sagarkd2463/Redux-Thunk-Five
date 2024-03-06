import { configureStore, combineReducers, } from '@reduxjs/toolkit';
import { userReducer } from './Reducer';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    user: userReducer,
});

const userMiddleware = [thunk, logger];

const Store = configureStore({ 
    reducer: rootReducer, 
    middleware: () => userMiddleware,
});

export default Store;
