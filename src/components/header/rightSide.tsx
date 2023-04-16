import React from 'react';

import { languages } from '@/constants';
import { useFavorites } from '@/context/favoritesContext';
import { useFilters } from '@/context/filtersContext';
import styles from '@/styles/header.module.css';

interface RightSideProps {
  filteredLanguage: string;
  filterByLanguages: (language: string) => void;
}

const RightSide: React.FC<RightSideProps> = ({ filteredLanguage, filterByLanguages }) => {
  const { activeTab } = useFilters();
  const { favorites, clearFavorites } = useFavorites();

  return <div className={styles.filters}>
    {activeTab === "favorites" && favorites.length > 0 && (
      <div className={`${styles.pointer} ${styles.clear_button}`} onClick={clearFavorites}>
        Clear favorites
      </div>
    )}
    <div className={styles.filter}>
      Filter {activeTab === 'trending' ? activeTab : 'favorite'} repositories by language:
      <label>
        <select onChange={(e) => filterByLanguages(e.target.value)} value={filteredLanguage} className={styles.select}>
          <option value="All">All</option>
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select></label>
    </div>
  </div>
};

export default RightSide;