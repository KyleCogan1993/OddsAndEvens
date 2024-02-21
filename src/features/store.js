import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./sortSlice" 

export const store = configureStore({
    reducer: {
        slice: sliceReducer}
});