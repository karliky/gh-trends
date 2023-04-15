import useRepositoryList from '@/hooks/useRepositoryList';
import styles from '@/styles/Home.module.css';

import { Repositories, Sections } from '../types';
import Filter from './filter';
import RepositoryList from './repositoryList';

export default function RepositoryListContainer({ respositories }: { respositories: Repositories }) {
  const { repositoryList, isLoading, setRepositoryList } = useRepositoryList(respositories);
  return <section className={styles.repositories}>
    <Filter
      setRepositories={setRepositoryList}
      repositoryList={repositoryList}
    />
    <RepositoryList repositories={repositoryList} isLoading={isLoading} />
  </section>
}