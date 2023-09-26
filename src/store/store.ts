import { configureStore } from '@reduxjs/toolkit';
import { modalSliceReducer } from '../shared/components/modal/modalSlice';

export const store = configureStore({
  reducer: {
    modal: modalSliceReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
