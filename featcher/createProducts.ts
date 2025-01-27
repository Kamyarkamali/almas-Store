// store/slices/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  nameProduct: string;
  price: number;
  category1: string;
  category: string;
  slug: string;
  images: string[]; // تغییر به آرایه‌ای از رشته‌ها برای تصاویر
  description: string;
  status: "active" | "inactive";
  discount: boolean;
  inventory: number;
  thumbnail: string; // اضافه کردن ویژگی thumbnail برای تصویر شاخص
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    updateProductStatus: (
      state,
      action: PayloadAction<{ id: string; status: "active" | "inactive" }>
    ) => {
      const { id, status } = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product) {
        product.status = status;
      }
    },
    moveToTrash: (state, action: PayloadAction<string>) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.status = "inactive"; // تغییر وضعیت به "غیرفعال" به جای حذف کامل
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateProduct,
  updateProductStatus,
  moveToTrash,
} = productSlice.actions;
export default productSlice.reducer;
