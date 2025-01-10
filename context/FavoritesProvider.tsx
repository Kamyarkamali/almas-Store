"use client";
import { Altet } from "@/types/enums";
import { Product } from "@/types/interFace";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { toast } from "react-hot-toast";

interface FavoritesContextType {
  favorites: Product[];
  addFavorite: (item: any) => void;
  removeFavorite: (item: any) => void;
}

interface Productadd {
  id: string;
  nameProduct: string;
  description: string;
  price: number;
  image: string;
  image2?: string;
  Inventory: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false); // بررسی برای محیط مرورگر

  useEffect(() => {
    setIsClient(true);
  }, []);

  // بارگذاری داده‌ها از localStorage
  useEffect(() => {
    if (isClient) {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        try {
          const parsedFavorites = JSON.parse(storedFavorites);
          if (Array.isArray(parsedFavorites)) {
            setFavorites(parsedFavorites);
          }
        } catch (error) {
          console.error("Error parsing favorites from localStorage", error);
        }
      }
    }
  }, [isClient]);

  // ذخیره داده‌ها در localStorage
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, isClient]);

  const addFavorite = (item: Productadd) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.includes(item)) {
        toast.success(Altet.ADDEDTOFAIVERITS);
        return [...prevFavorites, item];
      }
      return prevFavorites;
    });
  };

  const removeFavorite = (item: any) => {
    toast.error(Altet.REMOVEDFROMFAIVERITS);
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav !== item)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
