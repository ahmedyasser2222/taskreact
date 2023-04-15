import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  cartCount: number;
}

const initialState: CounterState = {
  cartCount: 0,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.cartCount += 1;
    },
    decrement: (state) => {
      state.cartCount -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
