import { useFilters } from '@/context/filtersContext';
import styles from '@/styles/Home.module.css';
import { Item, Sections } from '@/types';

interface LeftSideProps {
  handleTab: (section: Sections) => void;
  favorites: Item[];
}

const LeftSide: React.FC<LeftSideProps> = ({  handleTab, favorites }) => {
  const { activeTab } = useFilters(); 
  return <div className={styles.tabs}>
    <div
      data-testid="trending"
      className={`${styles.tab} ${styles.pointer} ${activeTab === "trending" ? styles.active : ""}`}
      onClick={() => handleTab("trending")}
    >
      Trending
    </div>
    <div
      data-testid="favorites"
      className={`${styles.tab} ${styles.pointer} ${activeTab === "favorites" ? styles.active : ""}`}
      onClick={() => handleTab("favorites")}
    >
      Favorites
      {favorites.length > 0 && (
        <span className={styles.badge} data-testid="favorites-badge">
          <span className={styles.badge__content}>{favorites.length}</span>
        </span>
      )}
    </div>
  </div>
};

export default LeftSide;