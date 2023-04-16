import Filter from '@/components/header/filter';
import RepositoryList from '@/components/repositoryList';
import useRepositoryList from '@/hooks/useRepositoryList';
import styles from '@/styles/repository.module.css';
import { Repositories } from '@/types';

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