import { createSlice } from '@reduxjs/toolkit';

interface ActiveModal {
  isActive: boolean;
}

interface ModalVision {
  isActive: boolean;
}

const initialState: ModalVision = { isActive: false };

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    showModal: (state) => {
      state.isActive = true;
    },
    hideModal: (state) => {
      state.isActive = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export const modalSliceReducer = modalSlice.reducer;
