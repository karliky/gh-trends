
import { useEffect } from 'react';

import RightSide from '@/components/header//rightSide';
import LeftSide from '@/components/header/leftSide';
import { useFavorites } from '@/context/favoritesContext';
import { useFilters } from '@/context/filtersContext';
import styles from '@/styles/header.module.css';
import { Repositories, Sections } from '@/types';

export default function Filter({
  setRepositories,
  repositoryList,
}: {
  setRepositories: Function;
  repositoryList: Repositories;
}) {
  const { favorites } = useFavorites();
  const { activeTab, setActiveTab, currentLanguage, setcurrentLanguage } = useFilters();
  
  useEffect(() => {
    if (activeTab === 'favorites') setFavoritesFilter(currentLanguage)
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
      setcurrentLanguage("All");
      setRepositories(repositoryList);
    }
    if (section === "favorites") {
      setcurrentLanguage("All");
      setRepositories({ items: favorites });
    }
  };

  const filterByLanguages = (language: string) => {
    setcurrentLanguage(language);
    setFavoritesFilter(language);
  };

  return (
    <section className={styles.filter}>
      <LeftSide handleTab={handleTab} favorites={favorites} />
      <RightSide
        currentLanguage={currentLanguage}
        filterByLanguages={filterByLanguages}
      />
    </section>
  );
}