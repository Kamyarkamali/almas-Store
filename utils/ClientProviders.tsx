"use client";

import { Provider } from "react-redux";
import { FavoritesProvider } from "@/context/FavoritesProvider";
import { store } from "@/featcher/store";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <FavoritesProvider>
      <Provider store={store}>{children}</Provider>
    </FavoritesProvider>
  );
}
