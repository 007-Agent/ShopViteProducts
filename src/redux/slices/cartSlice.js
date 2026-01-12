import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemPrice: 0, // начальное состояние значения!
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
