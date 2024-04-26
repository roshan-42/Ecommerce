import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface counter {
  value: number;
}
const initialState: counter = {
  value: 0,
};
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = CounterSlice.actions;
export default CounterSlice.reducer;
