import Image from 'next/image';

import { useFavorites } from '@/context/favoritesContext';
import styles from '@/styles/Home.module.css';
import { Item } from '@/types';

export default function RepositoryHeader({ repo, index }: { repo: Item, index: number }) {
    const { addFavorite, removeFavorite, repoIsAlreadyFavorited } = useFavorites()

    return <div className={`${styles.repository__header} ${styles.inline_items} ${styles.inline__between}`}>
        <span>{repo.name}</span>
        <span>
            {repoIsAlreadyFavorited(repo) ?
                <Image data-testid={`bookmark-${index}`} onClick={() => removeFavorite(repo)} className={styles.pointer} src="/bookmark_marked.svg" height={18} width={18} alt='Mark as favorite' /> :
                <Image data-testid={`bookmark-${index}`} onClick={() => addFavorite(repo)} className={styles.pointer} src="/bookmark.svg" height={18} width={18} alt='Mark as favorite' />
            }
        </span>
    </div>
}