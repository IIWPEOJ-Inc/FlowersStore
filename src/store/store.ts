import { configureStore } from '@reduxjs/toolkit';
import { shoppingCartReducer } from '../pages/shoppingCart/shoppingCartSlice';
import { signUpReducer } from '../pages/sign-up/singUpSlice';

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    shoppingCart: shoppingCartReducer,
    // users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
