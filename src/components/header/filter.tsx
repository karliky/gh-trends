
import { useEffect } from 'react';

import { useFavorites } from '@/context/favoritesContext';
import { useFilters } from '@/context/filtersContext';
import styles from '@/styles/header.module.css';

import { Repositories, Sections } from '@/types';
import LeftSide from '@/components/header/leftSide';
import RightSide from '@/components/header//rightSide';

export default function Filter({
  setRepositories,
  repositoryList,
}: {
  setRepositories: Function;
  repositoryList: Repositories;
}) {
  const { favorites } = useFavorites();
  const { activeTab, setActiveTab, filteredLanguage, setFilteredLanguage } = useFilters();
  
  useEffect(() => {
    if (activeTab === 'favorites') setFavoritesFilter(filteredLanguage)
  }, [favorites])

  const setFavoritesFilter = (language: string) => {
    if (language === "All" && activeTab === "favorites") return setRepositories({ items: favorites });
    if (activeTab === "favorites") {
      const filteredFavorites = favorites.filter((favorite) => favorite.language === language);
      setRepositories({ items: filteredFavorites });
    }
  }

  const handleTab = (section: Sections) => {
    setActiveTab(section);
    if (section === "trending") {
      setFilteredLanguage("All");
      setRepositories(repositoryList);
    }
    if (section === "favorites") {
      setFilteredLanguage("All");
      setRepositories({ items: favorites });
    }
  };

  const filterByLanguages = (language: string) => {
    setFilteredLanguage(language);
    setFavoritesFilter(language);
  };

  return (
    <section className={styles.filter}>
      <LeftSide handleTab={handleTab} favorites={favorites} />
      <RightSide
        filteredLanguage={filteredLanguage}
        filterByLanguages={filterByLanguages}
      />
    </section>
  );
}