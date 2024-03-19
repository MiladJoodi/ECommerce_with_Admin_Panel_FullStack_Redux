import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "./features/cartSlice";
import loadingSlice from "./features/loadingSlice";
import productSlice from "./features/productSlice";

export const store = configureStore({
  reducer: {
    cartSlice,
    productSlice,
    loadingSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch