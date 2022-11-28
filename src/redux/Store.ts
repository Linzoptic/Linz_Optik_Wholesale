import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./CartSlice"


const Store = configureStore({
   reducer:{
      AddCart: createReducer,
   }
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
