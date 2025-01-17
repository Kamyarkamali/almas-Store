// hooks/useCart.ts
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, AppDispatch } from "@/featcher/store";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  setCartFromLocalStorage,
} from "@/featcher/crtSlice";

export const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart.products);

  // hooks/useCart.ts

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      // فیلتر کردن محصولات غیر معتبر قبل از ذخیره در Redux
      const validCart = parsedCart.filter(
        (product: any) =>
          typeof product.price === "number" &&
          typeof product.quantity === "number"
      );
      dispatch(setCartFromLocalStorage(validCart));
    }
  }, [dispatch]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addProduct = (product: any) => {
    dispatch(addToCart(product));
  };

  const removeProduct = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const updateProductQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return {
    cart,
    addProduct,
    removeProduct,
    updateProductQuantity,
  };
};
