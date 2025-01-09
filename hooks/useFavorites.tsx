import { useEffect, useState } from "react";

const useFavorites = (Altet: any, toast: any) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (productName: string) => {
    if (!favorites.includes(productName)) {
      const updatedFavorites = [...favorites, productName];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      toast.success(`${productName} ${Altet.ADDEDTOFAIVERITS}`);
    } else {
      toast.error(`${productName} ${Altet.ADDED}`);
    }
  };

  return { favorites, addToFavorites };
};
