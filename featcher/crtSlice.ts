// redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const { id, name, price, quantity } = action.payload;

      // برای  quantity یک مقدار پیش فرض  قرار میدیک
      const validQuantity = quantity > 0 ? quantity : 1;

      const existingProduct = state.products.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        existingProduct.quantity += validQuantity;
      } else {
        state.products.push({ id, name, price, quantity: validQuantity });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
    setCartFromLocalStorage: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  setCartFromLocalStorage,
} = cartSlice.actions;

// redux/cartSlice.ts

// اضافه کردن یک selector برای محاسبه قیمت کل
export const selectCartTotalPrice = (state: { cart: CartState }) => {
  return state.cart.products.reduce((total, product) => {
    // بررسی اینکه قیمت و تعداد عددی هستند
    if (
      typeof product.price === "number" &&
      typeof product.quantity === "number"
    ) {
      return total + product.price * product.quantity;
    }
    return total; // در صورتی که مقادیر غیر عددی بودند، آنها را نادیده بگیریم
  }, 0);
};

export default cartSlice.reducer;
