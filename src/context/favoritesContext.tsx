import { createContext, useContext, useEffect, useState } from 'react';

import { Item } from '../types';

type FavoritesContextType = {
  favorites: Item[];
  addFavorite: (repo: Item) => void;
  removeFavorite: (repo: Item) => void;
  clearFavorites: () => void;
  setFavorites: (favorites: Item[]) => void;
  repoIsAlreadyFavorited: (repo: Item) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: (repo: Item) => {},
  removeFavorite: (repo: Item) => {},
  setFavorites: (favorites: Item[]) => {},
  clearFavorites: () => {},
  repoIsAlreadyFavorited: (repo: Item) => false
})

type ProviderProps = {
  children: React.ReactNode;
}

export const FavoritesContextProvider = ({ children }: ProviderProps) => {
  const [favorites, setFavorites] = useState<Item[]>([])

  useEffect(() => {
    const favorites = localStorage.getItem('favorites')
    if (favorites) setFavorites(JSON.parse(favorites))
  }, [])

  const repoIsAlreadyFavorited = (repo: Item) => {
    return favorites.some(favorite => favorite.id === repo.id)
  }

  const addFavorite = (repo: Item) => {
    if (repoIsAlreadyFavorited(repo)) return;
    setFavorites([...favorites, repo])
    localStorage.setItem('favorites', JSON.stringify([...favorites, repo]))
  }
  
  const removeFavorite = (repo: Item) => {
    const filteredFavorites = favorites.filter(favorite => favorite.id !== repo.id)
    setFavorites(filteredFavorites)
    localStorage.setItem('favorites', JSON.stringify(filteredFavorites))
  }

  const clearFavorites = () => {
    setFavorites([])
    localStorage.removeItem('favorites')
  }

  return (
    <FavoritesContext.Provider value={{ 
      favorites, 
      setFavorites, 
      addFavorite, 
      removeFavorite,
      clearFavorites, 
      repoIsAlreadyFavorited
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(FavoritesContext)