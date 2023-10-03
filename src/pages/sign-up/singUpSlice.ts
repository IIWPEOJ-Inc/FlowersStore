import { createSlice } from '@reduxjs/toolkit';
interface ModalVision {
  isActive: boolean;
}

const initialState: ModalVision = { isActive: false };

const signUpSlice = createSlice({
  name: 'signUpSlice',
  initialState,
  reducers: {
    showSignUpModal: (state) => {
      state.isActive = true;
    },
    hideSignUpModal: (state) => {
      state.isActive = false;
    },
  },
});

export const { showSignUpModal, hideSignUpModal } = signUpSlice.actions;

export const signUpReducer = signUpSlice.reducer;
