import Head from 'next/head';

import fetchRepos from '@/api/github';
import Footer from '@/components/footer';
import RepositoryListContainer from '@/components/repositoryListContainer';
import styles from '@/styles/home.module.css';
import { Repositories } from '@/types';

export async function getStaticProps() {
  const defaultRepositories = await fetchRepos();
  return {
    props: { defaultRepositories },
  }
}

export default function Home({ defaultRepositories }: { defaultRepositories: Repositories }) {
  return (
    <>
      <Head>
        <title>Gh-Trends - What&apos;s trending?</title>
        <meta name="description" content="Find and manage your favourites repositories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.inline}>
            <div className={styles.inline}>
              <div className={styles.logo}>
                <img src="/logo.png" alt="Gh-Trends" />
              </div>
              <div>
                <h1 className={styles.h1}>Catch the Code Wave</h1>
                <h2 className={styles.h2}>Today&apos;s Hottest GitHub Trends!</h2>
              </div>
            </div>
            <div>
              <a href="https://github.com/karliky/gh-trends" target='_blank'>View on GitHub</a>
            </div>
          </div>
        </header>
        <RepositoryListContainer respositories={defaultRepositories} />
        <Footer />
      </main>
    </>
  )
}
