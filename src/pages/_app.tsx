import 'node_modules/modern-normalize/modern-normalize.css';
import '@/styles/globals.css';

import { FavoritesContextProvider } from '@/context/favoritesContext';
import { FiltersContextProvider } from '@/context/filtersContext';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <FavoritesContextProvider>
    <FiltersContextProvider>
      <Component {...pageProps} />
    </FiltersContextProvider>
  </FavoritesContextProvider>
}
