import Head from 'next/head';

import fetchRepos from '@/api/github';
import Footer from '@/components/footer';
import RepositoryListContainer from '@/components/repositoryListContainer';
import styles from '@/styles/home.module.css';

import { Repositories } from '@/types';

export async function getServerSideProps() {
  const defaultRepositories = await fetchRepos();
  return {
    props: { defaultRepositories },
  }
}

export default function Home({ defaultRepositories }: { defaultRepositories: Repositories }) {
  return (
    <>
      <Head>
        <title>What&apos;s trending?</title>
        <meta name="description" content="Find and manage your favourites repositories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Catch the Code Wave: Today&apos;s Hottest GitHub Trends!</h1>
        </header>
        <RepositoryListContainer respositories={defaultRepositories} />
        <Footer />
      </main>
    </>
  )
}
