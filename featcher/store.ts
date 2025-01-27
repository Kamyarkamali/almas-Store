// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/featcher/crtSlice";
import compareReducer from "@/featcher/compareSlice";
import blogsSlice from "@/featcher/blogsSlice";
import productSlice from "@/featcher/createProducts";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    compare: compareReducer,
    posts: blogsSlice,
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
