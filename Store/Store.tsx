import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "@/Store/Slices/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
