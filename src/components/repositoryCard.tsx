import Image from 'next/image';

import RepositoryHeader from '@/components/repositoryHeader';
import styles from '@/styles/repository.module.css';
import { Item } from '@/types';

export default function RepositoryCard({ repo, index }: { repo: Item, index: number }) {
    return <div className={styles.repository} key={repo.id}>
        <div className={styles.repository__wrapper}>
            <RepositoryHeader repo={repo} index={index} />
            <div className={styles.inline_items}>
                <Image src="/repository.svg" height={18} width={18} alt='Repository' />
                <span>{repo.full_name}</span>
            </div>
            <p className={styles.description}>
                {repo.description}
            </p>
            <div className={styles.flex__center}>
                <div className={styles.inline_items}>
                    <Image src="/star.svg" height={18} width={18} alt='Stars' />
                    <span data-testid={`stargazers_count-${index}`}>{repo.stargazers_count}</span>
                </div>
                <div className={styles.inline_items}>
                    <Image src="/forks.svg" height={18} width={18} alt='Forks' />
                    <span>{repo.forks}</span>
                </div>
            </div>
            <div>
                <div className={styles.inline_items}>
                    <Image src={repo.owner.avatar_url} height={18} width={18} alt='Owner' className={styles.bubble} />
                    <span>Created by: {repo.owner.login}</span>
                </div>
                {repo.language && <div className={styles.inline_items}>
                    <span>Language: {repo.language}</span>
                </div>}
            </div>
        </div>
        <div className={styles.actions}>
            <div className={`${styles.action_view} ${styles.pointer}`}>
                <a href={repo.homepage || repo.html_url} target='_blank'>{repo.homepage ? 'View homepage' : 'View repository'}</a>
            </div>
            <div className={`${styles.action_view} ${styles.pointer}`}>
                <a href={repo.owner.html_url} target='_blank'>View owner</a>
            </div>
        </div>
    </div>
} 