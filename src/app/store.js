import { configureStore } from '@reduxjs/toolkit';
import plateItemReducer from '../features/plateSlice';

export default configureStore({
  reducer: {
    plateItems: plateItemReducer,
  },
});
