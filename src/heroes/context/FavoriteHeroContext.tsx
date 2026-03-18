import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContext {
  // State
  favorites: Hero[];
  favoriteCount: number;

  // Methods
  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

// export const FavoriteHeroContext = createContext<FavoriteHeroContext>({});
export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

  // Validad con ZOD
  const getFavoritesFromLocalStorage = () => {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites): [];
  }

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage());

  const isFavorite = (hero: Hero) => {
    return favorites.some(fav => fav.id === hero.id)
  }

  const toggleFavorite = (hero: Hero) => {
    const heroExist = favorites.find((h) => h.id === hero.id);

    // New Favorites
    if (heroExist) {
      setFavorites(favorites.filter((h) => h.id !== hero.id));
      return;
    }
    setFavorites([...favorites,hero])
  };

    useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
    

  }, [favorites])
  


  return (
    <FavoriteHeroContext
      value={{
        favorites: favorites,
        favoriteCount: favorites.length,
        // Methods
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorite
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
