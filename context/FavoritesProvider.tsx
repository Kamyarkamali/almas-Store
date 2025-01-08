import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

// تعریف نوع داده برای مقادیر Context
interface FavoritesContextProps {
  favorites: string[]; // آرایه‌ای از علاقه‌مندی‌ها
  addToFavorites: (item: string) => void; // تابع افزودن به علاقه‌مندی‌ها
  removeFromFavorites: (item: string) => void; // تابع حذف از علاقه‌مندی‌ها
}

// ایجاد Context و مقدار اولیه
const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

// فراهم کردن Context
export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addToFavorites = useCallback((item: string) => {
    setFavorites((prev) => [...prev, item]);
  }, []);

  const removeFromFavorites = useCallback((item: string) => {
    setFavorites((prev) => prev.filter((fav) => fav !== item));
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// هوک برای استفاده از Context
export const useFavorites = (): FavoritesContextProps => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites باید در داخل FavoritesProvider استفاده شود.");
  }
  return context;
};
