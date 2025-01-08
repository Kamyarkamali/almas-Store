import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  memo,
} from "react";

// Context
const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addToFavorites = (item: string) => {
    if (!favorites.includes(item)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFromFavorites = (item: string) => {
    setFavorites(favorites.filter((fav) => fav !== item));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom Hook
export const useFavorites = () => useContext(FavoritesContext);

// Example: Button to Add to Favorites
const AddToFavoritesButton = memo(({ product }: { product: string }) => {
  const { addToFavorites } = useFavorites();

  return (
    <button onClick={() => addToFavorites(product)}>
      افزودن به علاقه‌مندی‌ها
    </button>
  );
});

export default AddToFavoritesButton;
