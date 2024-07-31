import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import emotionReducer from './slices/emotionSlice';

export default configureStore({
  reducer:{
    user: userReducer,
    emotion: emotionReducer,
  }
})