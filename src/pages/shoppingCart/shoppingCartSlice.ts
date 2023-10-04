import { createSlice } from '@reduxjs/toolkit';
interface ModalVision {
  isActive: boolean;
}

const initialState: ModalVision = { isActive: false };

const shoppingCartSlice = createSlice({
  name: 'shoppingCartSlice',
  initialState,
  reducers: {
    showShoppingCartModal: (state) => {
      state.isActive = true;
    },
    hideShoppingCartModal: (state) => {
      state.isActive = false;
    },
  },
});

export const { showShoppingCartModal, hideShoppingCartModal } = shoppingCartSlice.actions;

export const shoppingCartReducer = shoppingCartSlice.reducer;
