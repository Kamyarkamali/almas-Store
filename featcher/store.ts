// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/featcher/crtSlice";
import compareReducer from "@/featcher/compareSlice";
import blogsSlice from "@/featcher/blogsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    compare: compareReducer,
    posts: blogsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
