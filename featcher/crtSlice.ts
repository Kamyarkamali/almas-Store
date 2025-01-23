// redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  nameProduct: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
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
      const { id, nameProduct, price, description, quantity, image } =
        action.payload;

      // برای  quantity یک مقدار پیش فرض  قرار میدیک
      const validQuantity = quantity > 0 ? quantity : 1;

      const existingProduct = state.products.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        existingProduct.quantity += validQuantity;
      } else {
        state.products.push({
          id,
          nameProduct,
          image,
          description,
          price,
          quantity: validQuantity,
        });
      }
    },
    // redux/cartSlice.ts
    removeFromCart: (state, action: PayloadAction<string>) => {
      const updatedProducts = state.products.filter(
        (product) => product.id !== action.payload
      );

      state.products = updatedProducts;

      // به‌روزرسانی localStorage پس از حذف محصول
      localStorage.setItem("cart", JSON.stringify(updatedProducts));
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
    return total;
  }, 0);
};

export default cartSlice.reducer;
