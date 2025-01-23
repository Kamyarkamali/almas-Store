import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  addToCompare,
  removeFromCompare,
  resetCompare,
} from "@/featcher/compareSlice"; // Redux actions

interface Product {
  id: string;
  image: string;
  nameProduct: string;
  price: number;
  category: string;
  description: string;
}

function useLocalStorage<T extends Product[]>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const dispatch = useDispatch();
  const isFirstRender = useRef(true); // برای جلوگیری از اجرای اثر در بارگذاری اول

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);

      // در بارگذاری اول اگر داده‌ای در localStorage نباشد، مقدار اولیه را استفاده کن
      if (storedValue) {
        const parsedValue = JSON.parse(storedValue);
        setValue(parsedValue);
      } else if (isFirstRender.current) {
        // فقط در بارگذاری اول از مقدار اولیه استفاده کن
        isFirstRender.current = false;
      }
    }
  }, [key]); // این‌جا فقط به 'key' وابسته است

  // همزمان با تغییر value، مقادیر را در Redux بروزرسانی می‌کنیم
  useEffect(() => {
    if (value) {
      dispatch(resetCompare()); // ریست کردن لیست مقایسه در ریداکس
      value.forEach((product) => {
        dispatch(addToCompare(product));
      });
    }
  }, [value, dispatch]);

  // ذخیره‌سازی مقدار جدید در localStorage
  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  };

  return [value, setStoredValue] as const;
}

export default useLocalStorage;
