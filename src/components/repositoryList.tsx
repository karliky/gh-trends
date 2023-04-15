
import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import { Item, Repositories } from '@/types';

import RepositoryCard from './repositoryCard';

export default function RepositoryList({ repositories, isLoading }: { repositories: Repositories, isLoading: boolean }) {
    if (isLoading) return <section className={styles.spinner} data-testid="spinner">
        <span className={styles.loader}></span>
    </section>

    const noRepositories = repositories.items.length === 0;
    if (noRepositories) return (<div className={styles.inline_center_column}>
        <h2>No repositories found.</h2>
        <Image src="/undraw_not_found_re_bh2e.svg" alt="Sad face" width={400} height={400} />
    </div>)

    const repositoryCards = repositories.items.map((repo: Item, index: number) => <RepositoryCard repo={repo} key={repo.id} index={index} />);
    return <section data-testid="repositories" className={styles.grid}>{repositoryCards}</section>
}