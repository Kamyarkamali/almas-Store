import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast"; // اضافه کردن هات توس
import useLocalStorage from "@/hooks/useLocalStorage"; // مسیر هوک

interface Product {
  id: string;
  image: string;
  nameProduct: string;
  price: number;
  category: string;
  description: string;
}

interface CompareState {
  compareList: Product[];
  error?: string;
}

// خواندن داده‌ها از localStorage هنگام بارگذاری صفحه
const initialState: CompareState = {
  compareList: [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state, action: PayloadAction<Product>) => {
      // بررسی که آیا دسته‌بندی‌ها برابر هستند
      if (state.compareList.length > 0) {
        const existingCategory = state.compareList[0].category;
        toast.success("اضافه شدن محصول به لیست مقایسه");
        if (existingCategory !== action.payload.category) {
          state.error = "دسته‌بندی محصولات باهم برابر نیستند!";
          toast.error(state.error);
          return;
        }
      }
      // اضافه کردن محصول به لیست مقایسه
      state.compareList.push(action.payload);
      state.error = undefined; // اگر مشکلی نباشد خطا را پاک می‌کنیم

      // ذخیره‌سازی داده‌ها در localStorage بعد از تغییر
      localStorage.setItem("compareList", JSON.stringify(state.compareList));
    },
    removeFromCompare: (state, action: PayloadAction<string>) => {
      // حذف محصول از لیست مقایسه
      state.compareList = state.compareList.filter(
        (item) => item.id !== action.payload
      );

      // ذخیره‌سازی داده‌ها در localStorage بعد از تغییر
      localStorage.setItem("compareList", JSON.stringify(state.compareList));
    },
    resetCompare: (state) => {
      // ریست کردن لیست مقایسه
      state.compareList = [];
      state.error = undefined;

      // پاک کردن localStorage
      localStorage.removeItem("compareList");
    },
  },
});

export const { addToCompare, removeFromCompare, resetCompare } =
  compareSlice.actions;
export default compareSlice.reducer;
